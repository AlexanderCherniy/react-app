import { defaultAxios } from "./api-dal"
import { captchaDataType } from '../redux/auth-reducer'

type SetAuthType = {
    resultCode: number
    messages: Array<string>,
    data: {
        id: number,
        email: string,
        login: string
    }
}
type LoginServiceDataType = {
    userId: number
}
type LoginAndUnLoginServiceType<Data = {}> = {
    resultCode: number
    messages: Array<string>
    data: Data
}
export const AuthApi = {
    setAuth: () => defaultAxios.get<SetAuthType>('auth/me').then(response => response.data),
    loginService: (email: string, password: string, rememberMe: boolean, captcha: string, error?: string) => {
        return defaultAxios.post<LoginAndUnLoginServiceType<LoginServiceDataType>>('auth/login', { email, password, rememberMe, captcha, error }).then(response => response.data)
    },
    unloginService: () => defaultAxios.delete<LoginAndUnLoginServiceType<{}>>('auth/login').then(response => response.data),
    getCaptcha: () => defaultAxios.get<captchaDataType>('security/get-captcha-url').then(response => response.data),
}
