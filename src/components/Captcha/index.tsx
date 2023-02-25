/**
 * Index
 * @author 周广俊
 * @date 2022-02-25 15:21
 * @since 1.0.0
 */

import React, { MutableRefObject, useEffect, useImperativeHandle, useRef } from 'react'
import { getCurrentPages } from '@tarojs/taro'
import ui from '@/lib/ui'
// import classnames from 'classnames'
// import styles from './index.module.less'

export interface CaptchaProps {
    // 验证码成功后回调
    onSuccess?: (data: { tencent_ticket: string }) => void
}

export interface CaptchaRef {
    // 开始验证
    toVerify: () => void
}

function Captcha(props: CaptchaProps, ref: MutableRefObject<CaptchaRef>) {
    // 是否可以显示验证码
    const showVerify = useRef(false)

    // 获取实例方法
    const currentInstance = getCurrentPages().pop()

    // 验证码实例
    const captchaRef: MutableRefObject<any> = useRef(null)

    // ready
    const onReady = () => {
        showVerify.current = true
    }

    // 关闭
    const onClose = () => {
        showVerify.current = false
    }

    // 报错
    const onError = (err: any) => {
        ui.notify('验证码加载失败，请稍后再试')
        console.log('try.catch.Captcha.onError: ', err)
    }

    // 检验
    const onVerify = (result: any) => {
        const data = result.detail

        if (data.ret === 0) {
            props.onSuccess && props.onSuccess({ tencent_ticket: data.ticket })
        }
    }

    // 导出子组件方法
    useImperativeHandle(ref, () => {
        return {
            toVerify: () => {
                if (captchaRef.current) {
                    captchaRef.current.show()
                }
            },
        }
    })

    // 延迟加载验证码实例
    useEffect(() => {
        const timer = setTimeout(() => {
            captchaRef.current = currentInstance?.selectComponent('#captcha')
        }, 0)

        return () => {
            clearTimeout(timer)
            if (captchaRef.current) {
                captchaRef.current.destroy()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <t-captcha
            id="captcha"
            appId="2049592252"
            onVerify={onVerify}
            onReady={onReady}
            onClose={onClose}
            onError={onError}
        />
    )
}

export default React.memo(React.forwardRef(Captcha))
