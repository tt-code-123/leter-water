// utils/request.ts

import { envConfig } from "@/config"

// 定义基础类型
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestConfig {
  url: string
  baseURL?:string
  method?: HttpMethod
  data?: any
  params?: Record<string, any>
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

// 请求队列
const requestQueue = new Set<string>()

// 创建请求实例
const createRequest = () => {
  // 请求拦截器
  const requestInterceptor = (config: RequestConfig) => {
    // 添加全局请求头，例如token
    const token = uni.getStorageSync('token')
    if (token) {
      config.header = {
        ...config.header,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  }

  // 响应拦截器
  const responseInterceptor = (response: any) => {
    const { statusCode, data } = response
    if (statusCode === 200) {
      return data
    }
    return Promise.reject(response)
  }

  // 错误处理
  const errorHandler = (error: any) => {
    console.error('Request Error:', error)
    return Promise.reject(error)
  }

  // 核心请求方法
  const request = async <T = any>(
    config: RequestConfig,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> => {
    const mergedConfig = {
      ...defaultConfig,
      ...config,
      header: {
        ...defaultConfig.header,
        ...config.header
      }
    }

    try {
      // 请求拦截
      const processedConfig = requestInterceptor(mergedConfig)
      
      // 显示加载状态
      if (options.isShowLoading) {
        uni.showLoading({ title: '加载中...', mask: true })
      }

      // 生成请求唯一标识
      const requestKey = `${config.method}_${config.url}`
      requestQueue.add(requestKey)

      const response = await uni.request({
        url: processedConfig.baseURL + processedConfig.url,
        method: processedConfig.method,
        data: processedConfig.data,
        header: processedConfig.header,
        timeout: processedConfig.timeout
      })

      // 响应拦截
      const data = await responseInterceptor(response)

      return data as ResponseData<T>
    } catch (error) {
      // 错误处理
      if (options.isHandleError) {
        handleBusinessError(error)
      }
      return errorHandler(error)
    } finally {
      // 清理请求队列
      const requestKey = `${config.method}_${config.url}`
      requestQueue.delete(requestKey)
      
      // 隐藏加载状态
      if (options.isShowLoading) {
        uni.hideLoading()
      }
    }
  }

  // 业务错误处理
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
    get: <T = any>(url: string, params?: Record<string, any>, config?: Omit<RequestConfig, 'url' | 'method' | 'data'>) =>
      request<T>({ ...config, url, method: 'GET', params }),
      
    post: <T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'url' | 'method' | 'data'>) =>
      request<T>({ ...config, url, method: 'POST', data })
  }
}

export const httpRequest = createRequest()