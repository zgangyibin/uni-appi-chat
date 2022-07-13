<template>
	<view class="container">
		<uni-list>
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="option1" >
					<uni-list-chat title="uni-app" @click="onClick"
					avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" 
					note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
				</uni-swipe-action-item>
			</uni-swipe-action>
	</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				option1: [{
							text: '删除',
							style:{
								backgroundColor:"#ea191b"
							}
						}],
			}
		},
		methods: {
			onClick(){

				uni.navigateTo({
					url:"/pages/chat/chat"
				})
			},
		}
	}
</script>

<style>

</style>
