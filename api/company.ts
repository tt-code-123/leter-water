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
  isLocal?: boolean;
  pageNo?: number;
  pageSize?: number;
  /**
   * 公开年份
   */
  year: string;
}

interface IQiYePeopleParams {
  /**
   * 企业名称
   */
  qiyeName: string;
  /**
   * 企业Id
   */
  qiyeId: string;
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

export interface QiYeInfoPayload {
  aqcsXkfw: string;
  aqscLicence: string;
  aqscLicenceFzjg: string;
  aqscLicencePeriod: string;
  createdBy: null;
  createdTime: null;
  djzcType1: string;
  djzcType2: string;
  dwsbNo: string;
  enterpriseCreditCode: string;
  establishmentDate: string;
  fzOrg: string;
  glzd: string;
  hasBranche: string;
  id: string;
  isLocal: string;
  isOpen: string;
  jyfw: string;
  mainProduct: string;
  mainYewu: string;
  nianbaoIsOpen: string;
  qiyeCommitmentLetter: string;
  qiyeName: string;
  qiyeNameSimplify: null;
  qiyeNature: string;
  qiyeProvince: string;
  qiyeType: string;
  registeredCapital: 5000;
  sbdjOrgName: string;
  updatedBy: string;
  updatedTime: string;
  yyzzFile: string;
  zcAddress: string;
  zcdyzbm: string;
  zhuqAddress: string;
  zhuqFile: string;
  zhuqPerson: string;
  zhuqPhone: string;
}

/**
 * 首页获取企业列表
 * @param params
 * @returns
 */
export const getHomeList = (params: IHomeListParams) =>
  httpRequest.get("/qiye/qiye_info/homeList", params);

/**
 * 企业详情
 * @param params
 * @returns
 */
export const getQiyeInfo = (id: string) =>
  httpRequest.get<QiYeInfoPayload>(`/qiye/qiye_info/${id}`);

/**
 * 企业法人信息
 * @param params
 * @returns
 */
export const getQiyeFr = (id: string) => httpRequest.get(`/qiye/frdb/${id}`);

/**
 * 企业资质信息分页
 * @param params
 * @returns
 */
export const getListByQiye = (params: any) =>
  httpRequest.get("/qiye/qiyeziz_info/getListByQiye", params);

/**
 * 企业人员分页
 * @param params
 * @returns
 */
export const getListByQiyeryId = (params: any) =>
  httpRequest.get(`/qiye/qiyeryrg/getSYListByQiyeryId`, params);
