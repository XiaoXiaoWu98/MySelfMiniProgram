/**
 * Index
 * @author 伍东京
 * @date 2022-12-03 20:19
 * @since 1.0.0
 */

import React, { MutableRefObject, ReactElement, memo  } from 'react'
import { View } from '@tarojs/components'
// import classnames from 'classnames'
import styles from './index.module.less'

export interface GlobalLoadingProps {
    [key: string]: any
}


interface GlobalLoadingRef {
    [key: string]: any
}


function GlobalLoading(props: GlobalLoadingProps, ref: MutableRefObject<GlobalLoadingRef>): ReactElement {

    const { } = props;
     
    return (
        <View>
            GlobalLoading
        </View>
    )
}

export default memo(GlobalLoading)

