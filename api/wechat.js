import { http } from "@/utils/request.js";

import api from "@/config/api.js";





/**
 * 登录
 * @param  mobile
 */
export function getOpenId(params) {
  return http.request({
    url: `/wechat/login`,
    method: "GET",
    data: params
  });
}

export function getUserPhoneNumber(params) {
  return http.request({
    url: `wechat/getUserPhoneNumber`,
    method: "POST",
    data: params
  });
}


