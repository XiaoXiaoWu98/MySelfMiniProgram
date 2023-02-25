import { GlobalEvent } from '@/common/enum'
import Taro, { getSystemInfoSync, showToast } from '@tarojs/taro'

const systemInfo = getSystemInfoSync()

const ui = {
    // 安全距离
    safeArea: {
        top(): number {
            return systemInfo.safeArea?.top || 0
        },
        bottom(): number {
            const bottom = systemInfo.safeArea?.bottom
            if (!bottom) return 0
            return systemInfo.screenHeight - bottom || 0
        }
    },

    navigator: {
        statusBar: {
            height(): number {
                return systemInfo.statusBarHeight || 0
            }
        },

        titleBar: {
            height(): number {
                const { height, top } = Taro.getMenuButtonBoundingClientRect()

                return height + (top - ui.navigator.statusBar.height()) * 2
            }
        },

        height(): number {
            return ui.navigator.statusBar.height() + ui.navigator.titleBar.height()
        }
    },

    // px 转 rem
    pxToRem(px: number) {
        return Taro.pxTransform(px)
    },

    // 轻消息
    notify(
        msg: string,
        duration: number = 3000,
        complete?: (res: TaroGeneral.CallbackResult) => void
    ) {
        showToast({
            icon: 'none',
            title: msg,
            duration,
            complete
        })
    },

    // 全局loading
    loading: {
        show() {
            Taro.eventCenter.trigger(GlobalEvent.Loading, true)
        },

        hide() {
            Taro.eventCenter.trigger(GlobalEvent.Loading, false)
        }
    }
}

export default ui
