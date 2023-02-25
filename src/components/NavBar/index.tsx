/**
 * Index
 * @author 伍东京
 * @date 2022-12-03 20:04
 * @since 1.0.0
 */

import React, { MutableRefObject, ReactElement, memo  } from 'react'
import { View } from '@tarojs/components'
// import classnames from 'classnames'
import styles from './index.module.less'

export interface NavBarProps {
  transparent: boolean
  back: boolean
  className?: string
  style?: React.CSSProperties
    [key: string]: any
}


interface NavBarRef {
    [key: string]: any
}


function NavBar(props: NavBarProps, ref: MutableRefObject<NavBarRef>): ReactElement {

    const { } = props;

    return (
        <View>
            NavBar
        </View>
    )
}

export default memo(NavBar)

