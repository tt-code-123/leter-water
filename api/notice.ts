import { httpRequest } from "@/utils/request";

/**
 * 招标信息
 * @param params
 * @returns
 */
export const getTenderPageList = (params: any) =>
  httpRequest.get("/qiye/tender/queryTZwfwjdgljZbggyzgysggxx", params);

/**
 * 中标候选人|中标公告
 * @param params
 * @returns
 */
export const getBiddingPageList = (params: any) =>
  httpRequest.get("/qiye/tender/queryTZwfwjdgljZbjggsxx", params);
