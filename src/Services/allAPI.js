import { commonAPI } from "./commonAPI";
import { server_URL } from "./serverURL";

const appenHeader = ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
        const headers ={
            "Authorization":`Bearer ${token}`
        }
        return headers
    }else{
        return ""
    }
}

export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${server_URL}/user/register`,user,"")
}

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${server_URL}/user/login`,user,"")
}

export const emailVerifyAPI = async (id,token)=>{
    return await commonAPI("GET",`${server_URL}/${id}/verify/${token}`,"","")
}

export const RequestService = async (body)=>{
    return await commonAPI("POST",`${server_URL}/services/pending/add`,body,appenHeader())
}