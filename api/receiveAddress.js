import {
	http
} from "@/utils/request.js";

import api from "@/config/api.js";



export function getUserReceiveAddress() {
	return http.request({
		url: `/app/getUserReceiveAddress`,
		method: "GET",
	});
}

export function save(data) {
	return http.request({
		url: `/app/save`,
		method: "POST",
		data: data
	});
}

export function update(data) {
	return http.request({
		url: `/app/update`,
		method: "POST",
		data: data
	});
}

export function deleteBatch(data) {
	return http.request({
		url: `/app/delete`,
		method: "POST",
		data: data
	});
}

export function updateDefaultState(data) {
	return http.request({
		url: `/app/updateDefaultState`,
		method: "GET",
		data: data
	});
}
