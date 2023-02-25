/**
 * Index
 * @author 伍东京
 * @date 2022-08-12 23:25
 * @since 1.0.0
 */

import React, { ReactElement, useEffect, useState } from 'react';
import { CoverImage, CoverView, View } from '@tarojs/components';
// import classnames from 'classnames'
import Taro from '@tarojs/taro';
import IconFont from '@/iconFont';
import { useMemoizedFn } from 'ahooks';
import styles from './index.module.less';

export interface TestProps {
  [key: string]: any;
}

interface TabBarList {
  pagePath: string;
  iconPath: string;
  selectedIconPath: string;
  text: string;
}

const tabBarList: TabBarList[] = [
  {
    pagePath: 'pages/index/index',
    iconPath: 'youjiantou',
    selectedIconPath: '../assets/tab-bar/schedule-red.png',
    text: '首页',
  },
  {
    pagePath: 'pages/test/index',
    iconPath: 'youjiantou',
    selectedIconPath: '../assets/tab-bar/course-red.png',
    text: '购物车',
  },
];

const selectedIconColor = '#FF0000';

function CustomTabBar(): ReactElement {
  const [selected, setSelected] = useState<string>(tabBarList[0].pagePath);
  const a = Taro.getCurrentInstance() || {};
  console.log('a:', a);
  const [path, setPath] = useState<string>(a.router.path);
  useEffect(() => {
    wx.onAppRoute(function(res) {
      console.log('res:', res);

      setPath(res.path);
    });
  }, []);

  const switchTab = useMemoizedFn(item => {
    const url = item.pagePath;
    console.log('url:', url);
    Taro.switchTab({
      url: '/' + url,
    });
    setSelected(url);
  });

  return (
    <CoverView className={styles.customTab}>
      {tabBarList.map(item => {
        return (
          <CoverView
            className={styles.tabItem}
            onClick={() => switchTab(item)}
            data-path={item.pagePath}
            key={item.pagePath}
          >
            <IconFont name='cartoon' color='blue' size={20}></IconFont>
            {/* <CoverImage
              className={styles.tabImg}
              src={item.selectedIconPath}
            /> */}

            <CoverView
              className={styles.tabText}
              style={{
                color: selected === item.pagePath ? selectedIconColor : 'black',
              }}
            >
              {item.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
}

export default CustomTabBar;
