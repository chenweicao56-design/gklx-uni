<template>
	<view class="show-loading-con" :class="{'mask': hasMask}" v-if="isShow">
		<view class="content">
			<image src="http://81.70.118.199:9000/wechat/loading01.gif" mode="widthFix"></image>
			<!-- <view class="title">{{title}}</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hasMask: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '加载中',
			},
		},
		data() {
			return {
				isShow: false,
			};
		},
		methods: {
			show(){
				this.isShow = true
			},
			hide() {
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss">
	.show-loading-con{
		height: 100vh;
		width: 100%;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		.content{
			position: absolute;
			top: 50%;
			left: 50%;
			bottom: 0px;
			right: 0px;
			transform: translate(-50%, -50%);
			
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: #fff;
			width: 6rem;
			height:6rem;
			// background: rgba(0, 0, 0, 0.7);
			border-radius: .3rem;
			font-size: .9rem;
			image{
				width:6rem;
				height: 6rem;
				// margin-bottom: .5rem;
			}
			.title{
				max-width: 5rem;
				overflow: hidden;
				white-space:nowrap;
				text-overflow: ellipsis;
			}
		}
	}
	.mask{
		background: rgba($color: #000000, $alpha: .3);
	}
</style>
