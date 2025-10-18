import {
	http
} from "@/utils/request.js";


export function getCartItemList() {
	return http.request({
		url: `app/cartitem/list`,
		method: "GET"
	});
}
export function getCartItemProductQuantity() {
	return http.request({
		url: `app/cartitem/allQuantity`,
		method: "GET"
	});
}
export function updateCartItemQuantity(params) {
	return http.request({
		url: `app/cartitem/update/quantity`,
		method: "GET",
		data: params
	});
}
export function addToCartItem(params) {
	return http.request({
		url: `app/cartitem/add`,
		method: "POST",
		data: params
	});
}
export function deleteCartItem(params) {
	return http.request({
		url: `app/cartitem/delete`,
		method: "POST",
		data: params
	});
}
export function clearCartItem() {
	return http.request({
		url: `app/cartitem/clear`,
		method: "POST",
	});
}
export function generateConfirmOrderForNow(params) {
	return http.request({
		url: `app/order/generateConfirmOrderForNow`,
		method: "POST",
		data: params
	});
}

export function generateConfirmOrder(params) {
	return http.request({
		url: `app/order/generateConfirmOrder`,
		method: "POST",
		data: params
	});
}

export function generateOrder(params) {
	return http.request({
		url: `app/order/generateOrder`,
		method: "POST",
		data: params
	});
}

export function generateOrderReserve(params) {
	return http.request({
		url: `app/order/generateOrderReserve`,
		method: "POST",
		data: params
	});
}

export function list(params) {
	return http.request({
		url: `app/order/list`,
		method: "Get",
		data: params
	});
}

export function detail(params) {
	return http.request({
		url: `app/order/detail/` + params,
		method: "Get"
	});
}

export function unifiedOrder(params) {
	return http.request({
		url: `app/order/unifiedOrder`,
		method: "POST",
		data: params
	});
}

export function paySuccess(params) {
	return http.request({
		url: `app/order/paySuccess`,
		method: "POST",
		data: params
	});
}

export function cancelOrder(params) {
	return http.request({
		url: `app/order/cancelOrder`,
		method: "POST",
		data: params
	});
}

export function addGift(id,params) {
	return http.request({
		url: `app/cartitem/addGift/`+id,
		method: "POST",
		data: params
	});
}
