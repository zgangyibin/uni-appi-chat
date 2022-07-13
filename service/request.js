export default function Request(url,data,callback,method="get"){
		uni.showLoading({
			title:"加载中...",
			mask:true
		});
		uni.request({
		    url, 
		    data,
			method,
		    header: {
		        Authorization: uni.getStorageSync("token")//获取token
		    },
		    success: (res) => {
				if(res.data.success){
					callback(res);
				}else {
					uni.showToast({
						icon:"error",
						title: res.data.message
					})
				}
		    },
			fail:(err)=>{
				uni.showToast({
					icon:"error",
					title: err.message
				})
			},
			complete(){
				uni.hideLoading()
			}
		});
	}
	
