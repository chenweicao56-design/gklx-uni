import {
	http
} from "@/utils/request.js";

import api from "@/config/api.js";



/**
 * 发送验证码
 * @param  mobile
 */
export function sendMobile(mobile, type = 'LOGIN') {
	return http.request({
		url: `${api.common}/sms/${type}/${mobile}`,
		method: "GET",
	});
}

/**
 * 登录
 * @param  mobile
 * @param  smsCode
 */
export function login(params) {
	return http.request({
		url: `/app/login`,
		method: "POST",
		data: params
	});
}

export function bindUserMobile(params) {
	return http.request({
		url: `/app/bindUserMobile`,
		method: "POST",
		data: params
	});
}

export function getUserInfo() {
	return http.request({
		url: `/app/getUserInfo`,
		method: "POST",
	});
}
export function getUserAssets() {
	return http.request({
		url: `/app/getUserAssets`,
		method: "POST",
	});
}