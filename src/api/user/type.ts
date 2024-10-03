// login
export interface LoginReqParams {
    username: string,
    password: string
}

interface LoginResParamsDataType{
    token: string, 
}

export interface LoginResParams{
    code: number, 
    data: LoginResParamsDataType, 
}

// fetch user info
interface UserInfo{
    userId: number,
    avatar: string,
    username: string,
    password: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}

interface User{
    validateUser: any
    data: UserInfo
}

export interface UserResParams {
    code: number
    data: User
}