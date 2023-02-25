import { StorageKey } from '@/common/enum'
import Taro from '@tarojs/taro'

const storage = {
    get: async <T>(key: StorageKey) => {
        try {
            const res = await Taro.getStorage<T>({ key })
            return res.data
        } catch (err) {
            console.log(`try.catch.storage.get.err, and storage key is ${key}`, err)
            return undefined
        }
    },

    set: <T>(key: StorageKey, data: T) => {
        return Taro.setStorage({ key, data })
    },

    remove: (key: StorageKey) => {
        return Taro.removeStorage({ key })
    },
}

export default storage
