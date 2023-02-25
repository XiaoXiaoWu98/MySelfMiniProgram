import { useGlobalIconFont } from './iconfont/helper'

export default {
  pages: ["pages/novel/index","pages/login/index",  "pages/cartoon/index", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  usingComponents: Object.assign(useGlobalIconFont()),

  tabBar: {
    // custom: true,
    color: '#999',
    selectedColor: '#B90220',
    backgroundColor: "#fff",
    list: [{
      pagePath: "pages/novel/index",
      iconPath: './assets/tab-bar/schedule.png',
      selectedIconPath: './assets/tab-bar/schedule-red.png',
      text: "小说"
    }, {
      pagePath: "pages/cartoon/index",
      iconPath: './assets/tab-bar/schedule.png',
      selectedIconPath: './assets/tab-bar/schedule-red.png',
      text: "漫画"
    }, {
      pagePath: "pages/mine/index",
      iconPath: './assets/tab-bar/course.png',
      selectedIconPath: './assets/tab-bar/course-red.png',
      text: "我的"
    }],
    usingComponents: {
      customtabbar: "custom-tab-bar/index.jsx"
    }
  },


};
