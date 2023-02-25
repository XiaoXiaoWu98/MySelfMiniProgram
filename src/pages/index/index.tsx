/**
 * IndexPage
 * @author 伍东京
 * @date 2022-08-12 22:49
 * @since 1.0.0
 */

import React from 'react'
import { View } from '@tarojs/components'
import IconFont from '@/iconfont/index.weapp'
// import Theme from '@/components/Theme'
// import classnames from 'classnames'
// import styles from './index.module.less'


export interface PageProps {}

function IndexPage(props: PageProps) {
    return (
        // <Theme>
            <View>Index
                <IconFont name='youjiantou' color='red'></IconFont>
            </View>
        // </Theme>
    )
}

export default IndexPage
