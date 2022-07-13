<template>
	<view class="container">
		<uni-search-bar 
		@confirm="search" v-model="searchValue">
		</uni-search-bar>
		<uni-list>
			<uni-list :border="true">
				<uni-swipe-action-item :right-options="option1" @click="onClick" @change="change">
					<uni-list-item title="列表左侧带略缩图" showArrow
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						thumb-size="lg" />
				</uni-swipe-action-item>
			</uni-list>
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
			};
		}
	}
</script>

<style lang="scss">

</style>
