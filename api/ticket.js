import {
	http
} from "@/utils/request.js";

import api from "@/config/api.js";



export function list(params) {
	return http.request({
		url: `app/ticket/list`,
		method: "Get",
		data: params
	});
}

export function getTickets(params) {
	return http.request({
		url: `app/ticket/getTickets`,
		method: "Get",
		data: params
	});
}

export function checkTicket(params) {
	return http.request({
		url: `app/ticket/checkTicket`,
		method: "Get",
		data: params
	});
}
