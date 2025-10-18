<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">操作条</block>
			</cu-custom>
		</view>
		<scroll-view class="content" scroll-y>
			<view style="height: 1000upx; width: 100%;" class="bg-cyan"></view>
			<view style="height: 1000upx; width: 100%;" class="bg-pink"></view>
		</scroll-view>
	<!-- 	<view class="content bg-green">
			
		</view> -->
		<view class="footer bg-red">123</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>