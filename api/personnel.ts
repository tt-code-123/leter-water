import { httpRequest } from "@/utils/request";

interface IQiYePeopleParams {
  /**
   * 企业名称
   */
  qiyeName?: string;
  /**
   * 企业Id
   */
  qiyeId?: string;
  /**
   * 身份证号
   */
  idCardNo?: string;
  /**
   * 人员类型
   */
  ctoZhizType?: string;
  /**
   * 人员名称
   */
  name?: string;
  pageNo?: number;
  pageSize?: number;
}

/**
 * 首页根据企业id获取企业对应人员
 * @param params
 * @returns
 */
export const getListByQiyeryId = (params: IQiYePeopleParams) =>
  httpRequest.get("/qiye/qiyeryrg/getSYListByQiyeryId", params);


/**
 * 根据企业用户id获取用户信息
 * @param params 
 * @returns 
 */
export const getQueryById = (id:string)=> httpRequest.get(`/qiye/qiyeryrg/queryById?id=${id}`)

/**
 * 通过企业ID查询单位类型
 * @param qiyeId 
 * @returns 
 */
export const getQueryUnitTypeById = (qiyeId:string)=>httpRequest.get(`/qiye/unitType/queryUnitTypeById?qiyeId=${qiyeId}`)

/**
 * 获取企业人员专业类型字典
 * @param unitclass 
 * @returns 
 */
export const getListByUnitClass= (unitclass:string)=> httpRequest.get(`/qiye/qiyery_rg_require/getListByUnitClass?unitclass=${unitclass}`)