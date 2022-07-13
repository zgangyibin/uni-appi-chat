<script>
	import { profile } from "/service/service.js"
	export default {
		data() {
			return {
				nick:"",
				isnick:false,
				userInfo:{}
			}
		},
		onLoad(){
			this.init();
		},
		methods: {
			init(){
				profile((res)=>{
					console.log(res);
					this.userInfo = res.data[0].data;
				})
			},
			 open(is){
				this.isnick=is;
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			  },
			  handleOut(){
				  uni.navigateTo({
				  	url:"/pages/login/login"
				  })
			  },
		}
	}
</script>
<template>
	<view class="container my-bg">
		<view class="avatar-con mt-1">
			<image @click="open(false)" class="avatar" src="/static/imgs/sdq.jpeg" mode=""></image>
			<view @click="open(true)" class="mt-1">nick</view>
			<view  class="mt-1 f-5">11111@qq.com</view>
			<view  class="mt-1 f-5">2022-1-1</view>
			<button @click="handleOut" class="mini-btn mt-1" type="default" size="mini">退出登录</button>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="avatar-pop">
				<uni-file-picker v-if="!isnick" limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
					file-mediatype="image">选择</uni-file-picker>
				<uni-forms-item v-else label="昵称" name="name">
					<uni-easyinput type="text" v-model="nick" placeholder="请输入昵称" />
				</uni-forms-item>
			</view>
		</uni-popup>
	</view>
</template>

<style lang="scss" src="./my.scss">

</style>
