import { http } from "@/utils/request.js";

import api from "@/config/api.js";





/**
 * 登录
 * @param  mobile
 */
export function getBanner4Type(params) {
  return http.request({
    url: `/app/banner/getBanner4Type`,
    method: "GET",
    data: params
  });
}
/**
 * @param {Object} params
 */
export function getArticleByType(params) {
  return http.request({
    url: `/app/getArticleByType`,
    method: "GET",
    data: params
  });
}
