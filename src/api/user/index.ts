// TODO: update log-out function

import request from "@/utils/request";
import type { LoginReqParams, LoginResParams, UserResParams } from "./type";

enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info",
    LOGOUT_URL = "/logout"
}

export const reqLogin = (data: LoginReqParams) => request.post<any, LoginResParams>(API.LOGIN_URL, data);
export const reqUserInfo = () => request.get<any, UserResParams>(API.USERINFO_URL);
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)