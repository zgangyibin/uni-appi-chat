<template>
	<view class="login">
		<view class="logo-view">
			<image class="logo" src="/static/imgs/logo.png"></image>
			<text class="text">chat-one</text>
		</view>
		<view class="content">
			<!-- 自定义表单校验 -->
			<uni-forms ref="customForm" label-width="0" :rules="customRules" :modelValue="customFormData">
				<uni-forms-item label="" required name="email">
					<uni-easyinput v-model="customFormData.email" :placeholder="isLogin?'请输入登录邮箱':'请输入注册邮箱'" />
				</uni-forms-item>
				<uni-forms-item label="" required name="password">
					<uni-easyinput type="password" v-model="customFormData.password" :placeholder="isLogin?'请输入登录密码':'请输入用户密码'" />
				</uni-forms-item>
				<uni-forms-item v-if="!isLogin" label="" required name="repassword">
					<uni-easyinput type="password" v-model="customFormData.repassword" placeholder="请确认密码" />
				</uni-forms-item>
			</uni-forms>
			<button type="primary" class="submit" @click="submit('customForm')">提交</button>
		</view>
		<view class="footer">
			<text v-if="isLogin" @click="isLogin=false">没有账号?</text>
			<text v-else @click="isLogin=true">已有账号</text>
		</view>
	</view>
</template>
<script>
	import {
		register,
		login
	} from "../../service/service";
	export default {
		data() {
			return {
				isLogin: true,
				customFormData: {
					email: '',
					passwor: '',
					repassword: ""
				},
				// 自定义表单校验规则
				customRules: {
					email: {
						rules: [{
							required: true,
							errorMessage: '邮箱不能为空'
						}, {
							format: 'email',
							errorMessage: '邮箱格式错误'
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '密码不能为空'
						}, {
							minLength: 4,
							maxLength: 8,
							errorMessage: '密码的长度是{minLength}到{maxLength}'
						}]
					},
					repassword: {
						rules: [{
							required: true,
							errorMessage: '确认密码不能为空'
						}, {
							minLength: 4,
							maxLength: 8,
							errorMessage: '密码的长度是{minLength}到{maxLength}'
						}]
					}

				}

			}
		},
		methods: {
			submit(ref) {
				this.$refs[ref].validate().then(data => {
					console.log('success', data);
					if(this.isLogin){
						login(data,(res)=>{
							console.log(res)
							uni.setStorageSync("token",res.data.token);
							uni.switchTab({ //tab页面需要用switchTab跳转，普通的路由页面用navigateTo
								url:"/pages/my/my"
							})
						})
					} else {
						register(data,(res)=>{
							uni.showToast({
								title: "注册成功,请登录!"
							});
							this.isLogin = true;
						})
						
					}
				}).catch(err => {
					console.log('err', err);
					uni.showToast({
						title: err.message
					})
				})
			}
		}
	};
</script>
<style src="./login.scss" lang="scss">

</style>
