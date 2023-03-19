import  { post } from "../utils/requests"

type  LoginData ={
    userName:string;
    password:string;
}

export const loginAPI = (data:LoginData) =>post('/auth/admin_login',data)
