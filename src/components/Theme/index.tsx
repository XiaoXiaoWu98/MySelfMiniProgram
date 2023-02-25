/**
 * Index
 * @author 伍东京
 * @date 2022-12-03 20:14
 * @since 1.0.0
 */

import React, { MutableRefObject, ReactElement, memo  } from 'react'
import { View } from '@tarojs/components'
// import classnames from 'classnames'
import styles from './index.module.less'

export interface ThemeProps {
    [key: string]: any
}


interface ThemeRef {
    [key: string]: any
}


function Theme(props: ThemeProps, ref: MutableRefObject<ThemeRef>): ReactElement {

    const { } = props;
     
    return (
        <View>
            Theme
        </View>
    )
}

export default memo(Theme)

