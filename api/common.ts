import { httpRequest } from "@/utils/request";  

/**
 * 获取字典列表
 * @param modelName professionalTitle:职称 position：职务 educationalBackground：学历 unitProperty：单位性质 registrationType：登记注册类型 managementSystem：管理制度 unitClass：单位类型
 * @returns
 */
type GwDictParams = 'professionalTitle' | 'position' | 'educationalBackground' | 'unitProperty' | 'registrationType' | 'managementSystem' | 'unitClass'


export enum GwDictEnum {
  /**
   * 职称
   */
  professionalTitle = 'professionalTitle',
  /**
   * 职务
   */
  position = 'position',
  /**
   * 学历
   */
  educationalBackground = 'educationalBackground',
  /**
   * 单位性质
   */
  unitProperty = 'unitProperty',
  /**
   * 登记注册类型
   */
  registrationType = 'registrationType',
  /**
   * 管理制度
   */
  managementSystem = 'managementSystem',
  /**
   * 单位类型
   */
  unitClass = 'unitClass'
}

export const getGwDictList = (modelName:GwDictParams)=> httpRequest.get(`/qiye/gw_dict/getGwDictList?modelName=${modelName}`)


/**
 * 所属省市区域
 * @returns 
 */
export const getAreaJson = ()=> httpRequest.get(`/extend/area.json`)