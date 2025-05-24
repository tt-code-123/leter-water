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
