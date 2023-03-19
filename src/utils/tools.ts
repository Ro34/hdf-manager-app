import logo from "../assets/react.svg"

export const defaultImg = logo

// 服务器地址
export const serverUrl = "http://localhost:3306"

export const  setToken = (token:string )=> sessionStorage.setItem('token',token )
export const  getToken = ()=>sessionStorage.getItem('token')

