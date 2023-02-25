// 本地储存Key
export enum StorageKey {
    Token = 'token'
}

// 全局监听事件
export enum GlobalEvent {
    // 全局loading
    Loading = 'loading',

    // Token 失效
    TokenInvalid = 'token_invalid',

    // 手动登录成功
    LoginSuccess = 'login_success',

    // 自动登录结果
    AutoLoginResult = 'auto_login_result'
}
