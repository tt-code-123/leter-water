// utils/request.ts

import { envConfig } from "@/config"

// 定义基础类型
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestConfig {
  url: string
  baseURL?: string
  method?: HttpMethod
  data?: any
  header?: Record<string, string>
  timeout?: number
}

interface ResponseData<T = any> {
  code: number
  message: string
  data: T
}

interface RequestOptions {
  isShowLoading?: boolean
  isHandleError?: boolean
}

// 默认配置
const defaultConfig = {
  baseURL: envConfig.requestURL || '',
  timeout: 10000,
  header: {
    'Content-Type': 'application/json',
    'Cookie':'JSESSIONID=63aec6b6-1f70-412e-bde1-45a3be58db89'
  }
}

// 自定义参数序列化方法（兼容小程序环境）
const serializeParams = (params: Record<string, any>): string => {
  const parts: string[] = []
  
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || typeof value === 'undefined') return
    
    if (Array.isArray(value)) {
      value.forEach(item => {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
      })
    } else {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  })
  
  return parts.join('&')
}


const requestQueue = new Set<string>()

const createRequest = () => {
  // 处理GET请求参数（拼接URL）
  const processGetParams = (url: string, data: any) => {
    if (!data || Object.keys(data).length === 0) return url
    
    const params = serializeParams(data)
    return url.includes('?') ? `${url}&${params}` : `${url}?${params}`
  }

  const requestInterceptor = (config: RequestConfig) => {
    const token = uni.getStorageSync('token')
    if (token) {
      config.header = {
        ...config.header,
        Authorization: `Bearer ${token}`
      }
    }
    
    // GET请求特殊处理
    if (config.method === 'GET' && config.data) {
      config.url = processGetParams(config.url, config.data)
    }
    
    return config
  }

  const responseInterceptor = (response: any) => {
    const { statusCode, data } = response
    if (statusCode === 200) {
      return data?.data || data
    }
    return Promise.reject(response)
  }

  const errorHandler = (error: any) => {
    console.error('Request Error:', error)
    return Promise.reject(error)
  }

  const request = async <T = any>(
    config: RequestConfig,
    options: RequestOptions = {}
  ): Promise<T> => {
    const mergedConfig = {
      ...defaultConfig,
      ...config,
      header: {
        ...defaultConfig.header,
        ...config.header
      }
    }

    try {
      const processedConfig = requestInterceptor(mergedConfig)
      
      if (options.isShowLoading) {
        uni.showLoading({ title: '加载中...', mask: true })
      }

      const requestKey = `${config.method}_${config.url}`
      requestQueue.add(requestKey)

      // 清除GET请求的data（参数已拼接到URL）
      const requestData = config.method === 'GET' ? undefined : processedConfig.data

      const response = await uni.request({
        url: processedConfig.baseURL + processedConfig.url,
        method: processedConfig.method,
        data: requestData,
        header: processedConfig.header,
        timeout: processedConfig.timeout
      })

      const data = await responseInterceptor(response)
      return data as T
    } catch (error) {
      if (options.isHandleError) {
        handleBusinessError(error)
      }
      return errorHandler(error)
    } finally {
      const requestKey = `${config.method}_${config.url}`
      requestQueue.delete(requestKey)
      
      if (options.isShowLoading) {
        uni.hideLoading()
      }
    }
  }

  const handleBusinessError = (error: any) => {
    const errMsg = error?.data?.message || '请求失败，请稍后重试'
    uni.showToast({
      title: errMsg,
      icon: 'none',
      duration: 2000
    })
  }

  return {
    request,
    get: <T = any>(
      url: string, 
      params?: Record<string, any>, 
      config?: Omit<RequestConfig, 'url' | 'method' | 'data'>
    ) => request<T>({ 
      ...config, 
      url, 
      method: 'GET',
      data: params // 将params赋值给data
    }),
    
    post: <T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'url' | 'method' | 'data'>) =>
      request<T>({ ...config, url, method: 'POST', data })
  }
}

export const httpRequest = createRequest()