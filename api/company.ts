import { httpRequest } from "@/utils/request";

interface IHomeListParams {
  /**
   * 企业名称
   */
  qiyeName?: number;
  /**
   * 企业类型
   */
  qiyeType?: string;
  /**
   * 是否近青
   */
  isLocal?:boolean
  pageNo?: number;
  pageSize?: number;
  /**
   * 公开年份
   */
  year:string
}

interface IQiYePeopleParams {
  /**
   * 企业名称
   */
  qiyeName: string;
  /**
   * 企业Id
   */
  qiyeId:string
  /**
   * 身份证号
   */
  idCardNo?: string;
  /**
   * 人员类型
   */
  ctoZhizType?:string
  /**
   * 人员名称
   */
  name?:string
  pageNo?: number;
  pageSize?: number;
}

/**
 * 首页获取企业列表
 * @param params 
 * @returns 
 */
export const getHomeList = (params:IHomeListParams)=> httpRequest.get('/qiye/qiye_info/homeList',params)

/**
 * 首页根据企业id获取企业对应人员
 * @param params 
 * @returns 
 */
export const getListByQiyeryId = (params:IQiYePeopleParams)=> httpRequest.get('/qiye/qiyeryrg/getSYListByQiyeryId',params)