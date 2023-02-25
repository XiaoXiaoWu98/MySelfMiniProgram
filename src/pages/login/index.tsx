/**
 * LoginPage
 * @author 伍东京
 * @date 2022-03-08 15:37
 * @since 1.0.0
 */

import React, { MutableRefObject, useRef, useState } from 'react';
import {
  View,
  BaseEventOrig,
  ButtonProps,
  Button,
  Input,
} from '@tarojs/components';
// import { commonSendHandsetCode } from '@/api/common/publicclassification'
// import { useCheckSession, useSceneQuery, useToken, useUserInfo } from '@/hooks'
// import Captcha, { CaptchaRef } from '@/components/Captcha'
// import { GlobalEvent } from '@/common/enum'
import { NavBar } from '@/components';
// import Theme from '@/components/Theme'
import { useInterval } from 'ahooks';
import classnames from 'classnames';
import Taro from '@tarojs/taro';
// import ui from '@/lib/ui'

import styles from './index.module.less';
import ui from '@/lib/ui';
// import Captcha, { CaptchaRef } from '@/components/Captcha';

export interface PageRef {}

export interface PageProps {}

enum activityType {
  phone,
  code,
}

//手机区号
const area = '0086';

function LoginPage(_props: PageProps, _ref: MutableRefObject<PageRef>) {
  // 是否拒绝授权
  const [isReject, setIsReject] = useState<boolean>(false);

  // 验证码组件

  // 手机号
  const [phone, setPhone] = useState<string>('');

  // 验证码
  const [code, setCode] = useState<string>('');

  // 是否已经发送验证码
  const [isSend, setIsSend] = useState<boolean>(false);

  // 获取场景解码值
  // const { params } = useSceneQuery<{ oa_staff_id: string }>()

  // const { oa_staff_id = '0' } = params || {}

  // 检测微信code 是否过期
  // const {} = useCheckSession()

  // token
  // const { updateToken } = useToken()

  // 用户信息
  // const { updateUser } = useUserInfo()

  //计时器
  const [time, setTime] = useState<number>(0);

  // 加密算法
  const [iv, setIv] = useState('');

  // 加密数据
  const [encryptedData, setEncryptedData] = useState('');

  useInterval(
    () => {
      setTime(time - 1);
      if (time === 0) setIsSend(false);
    },
    !isSend ? undefined : 1000,
  );

  // 当前聚焦input
  const [focusInput, setFocusInput] = useState<activityType | undefined>(
    activityType.phone,
  );

  // 用户手机号授权
  const onGetPhoneNumber = async (
    e: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>,
  ) => {
    try {
      e && e.stopPropagation();
      // if (!e || !e.detail || !e.detail.encryptedData) return setIsReject(true)
      ui.loading.show();
      const { code: weappCode } = await Taro.login();
      console.log('code:', weappCode, e, e.detail.iv, e.detail.encryptedData);
      // const res = await userDecryptHandset({
      //     code: weappCode,
      //     iv: e.detail.iv,
      //     encryption_handset: e.detail.encryptedData,
      //     appid: ''
      // })
      // setIv(e.detail.iv)
      // setEncryptedData(e.detail.encryptedData)
      // setPhone(res.handset || '')
      ui.loading.hide();
    } catch (err) {
      setIsReject(true);
      ui.loading.hide();
      console.log('try.catch.index.onGetPhoneNumber.err: ', err);
    }
  };

  // 验证码信息
  const onVerifySuccess = async (data: { tencent_ticket: string }) => {
    try {
      // await commonSendHandsetCode({
      //     handset: phone,
      //     area: area,
      //     rand_str: '',
      //     ticket: data.tencent_ticket,
      //     scene: 'mini'
      // })
      setIsSend(true);
      setTime(60);
    } catch (err) {
      console.log('try.catch.index.onVerifySuccess.err: ', err);
    }
  };

  // 获取验证码
  // const getCode = () => {
  //     captchaRef?.current?.toVerify()
  // }

  // 检验是否可以发送验证码
  // const onCheckGetCode = (e) => {
  //     e && e.stopPropagation()
  //     if (isSend && time !== 0) return

  //     if (!phone || !/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(phone)) {
  //         ui.notify('请输入正确的手机号')
  //         return
  //     }
  //     getCode()
  // }

  // 提交注册
  // const onSubmit = async () => {
  //     if (!phone || !/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(phone)) {
  //         ui.notify('请输入正确的手机号')
  //         return
  //     }
  //     if (isReject && (!code || code.length < 1)) {
  //         ui.notify('请输入验证码')
  //         return
  //     }

  //     ui.loading.show()

  //     try {
  //         const { code: weappCode } = await Taro.login()
  //         const verifyCode = code ? code : undefined
  //         const res = await userLogin({
  //             appid: '',
  //             code: weappCode,
  //             iv: verifyCode ? undefined : iv,
  //             encryption_handset: verifyCode ? undefined : encryptedData,
  //             handset_code: verifyCode,
  //             handset: phone,
  //             handset_area: area,
  //             source: 3,
  //             oa_staff_id: Number(oa_staff_id)
  //         })
  //         ui.loading.hide()

  //         if (res.token) {
  //             updateToken(res.token)
  //         }

  //         if (res.user) {
  //             updateUser(res.user)
  //         }

  //         setIsSend(false)
  //         const pages = Taro.getCurrentPages() //获取当前页面信息栈
  //         const prevPage = pages[pages.length - 2] //获取上一个页面信息
  //         if (!prevPage) return Taro.redirectTo({ url: '/pages/index/index' })
  //         Taro.navigateBack({ delta: 1 })

  //         Taro.eventCenter.trigger(GlobalEvent.LoginSuccess)
  //     } catch (err) {
  //         ui.loading.hide()
  //         console.log('try.catch.index.onSubmit.err: ', err)
  //     }
  // }

  return (
    <View>
      {/* <NavBar transparent title="登录"></NavBar> */}
      <View className={styles.login}>
        <View className={styles.form}>
          <View className={styles.phone}>
            <View className={styles.title}>手机号</View>
            <Input
              className={classnames(styles.input, {
                [styles.activityInput]: focusInput === activityType.phone,
              })}
              name="phone"
              type="number"
              placeholder="获取你的电话号码"
              value={phone}
              onFocus={() => setFocusInput(activityType.phone)}
              onBlur={() => setFocusInput(undefined)}
              placeholderClass={styles.placeholder}
              disabled={!isReject}
              onInput={val => {
                setPhone(String(val));
              }}
            />
            {/* {!isReject && phone.length === 0 && ( */}
            <Button
              className={styles.phoneBtn}
              openType="getPhoneNumber"
              onGetPhoneNumber={onGetPhoneNumber}
            ></Button>
            {/* )} */}
          </View>
          {/* {isReject && (
            <View className={styles.code}>
              <View className={styles.title}>验证码</View>
              <Input
                className={classnames(styles.input, {
                  [styles.activityInput]: focusInput === activityType.code,
                })}
                name="phone"
                type="number"
                placeholderClass={styles.placeholder}
                placeholder="请输入你的验证码"
                value={code}
                onFocus={() => {
                  setFocusInput(activityType.code);
                }}
                onBlur={() => setFocusInput(undefined)}
                // border={false}
                onInput={val => {
                  setCode(String(val));
                }}
              />
              <View className={styles.sendMsg}>
                {isSend && time !== 0 ? (
                  <View className={styles.time}>{`重新发送${time}s`}</View>
                ) : (
                  <View>发送验证码</View>
                )}
              </View>
            </View>
          )} */}
          <View className={styles.goLogin}> 立即登陆</View>
          {/* {isReject && (
            <View
              className={styles.wxlogin}
              onClick={() => {
                setIsReject(false);
                setFocusInput(activityType.phone);
                setPhone('');
              }}
            >
              {'微信快捷登录 >'}
            </View>
          )} */}
        </View>
      </View>
      {/* <Captcha ref={captchaRef} onSuccess={onVerifySuccess}></Captcha> */}
    </View>
  );
}

export default LoginPage;
