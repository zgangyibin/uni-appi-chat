import Request from "./request"
import api from "../api/api"
export function login(data,callback){//登录
	Request(api.login,data,callback,"post");
}
export function register(data,callback){//注册
	Request(api.register,data,callback,"post");
}
export function profile(callback){//注册
	Request(api.profile,{},callback);
}