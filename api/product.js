import {
	http
} from "@/utils/request.js";


export function getProductDetails(params) {
	return http.request({
		url: `app/product/details`,
		method: "GET",
		data: params
	});
}


export function getShoppingProducts(params) {
	return http.request({
		url: `app/product/getShoppingProducts`,
		method: "GET",
		data: params
	});
}
export function getProductCategory(params) {
	return http.request({
		url: `app/product/getProductCategory`,
		method: "GET",
		data: params
	});
}
export function getProductReserveTime(params) {
	return http.request({
		url: `app/product/getProductReserveTime`,
		method: "GET",
		data: params
	});
}
