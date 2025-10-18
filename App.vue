<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif

					Vue.prototype.windowHeight = e.windowHeight;
				}
			})
			let f = uni.canIUse('getUpdateManager') // 获取小程序更新机制兼容
			console.log("f:",f);
			if (f) {
				const _u = uni.getUpdateManager()
				console.log("u:",_u);
				_u.onCheckForUpdate(res => { // 请求完新版本信息的回调
				console.log("hasUpdate:",res.hasUpdate);
					if (res.hasUpdate) { // 是否有新的版本
						_u.onUpdateReady(() => { // 当新版本下载完成，会进行回调
							uni.showModal({
								title: '更新提示',
								content: '新版本已发布,请重启当前应用!',
								showCancel: false,
								success(c_res) {
									if (c_res.confirm) {
										_u.applyUpdate() // 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启
									}
								}
							})
						})
					}
				})
				_u.onUpdateFailed(() => { // 当新版本下载失败，会进行回调
					uni.showModal({
						title: '发现新版本',
						content: '请删除当前小程序,重新搜索打开'
					})
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("/components/gaoyia-parse/parse.css");
	@import "colorui/main.css";
	@import "colorui/icon.css";

	page {
		height: 100%;
	}

	.agreement_checked {
		color: #ffffff;
		border: 4upx solid #FFFFFF;
	}

	.bg-purple2 {
		background-color: #824899;
		color: #FFFFFF;
	}

	.text-purple2 {
		color: #824899;
	}

	.bg-purple3 {
		background-color: #E3D6EA;
		color: #333333;
	}
</style>
