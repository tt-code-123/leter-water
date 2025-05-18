/**
 * 判断是否是微信浏览器
 */
export function isWeChatBrowser() {
  var ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua);
}

/**
 * 获取状态栏高度
 * @returns 状态栏高度
 */
export const getNavHeight = () => {
  const rectInfo = uni.getMenuButtonBoundingClientRect();
  const sysInfo = uni.getSystemInfoSync();
  // 获取状态栏高度
  const statusBarHeight = sysInfo.statusBarHeight || 0;
  //获取胶囊顶部高度
  const menuButtonHeight = rectInfo.height;
  // 获取胶囊距离顶部的高度
  const menuButtonTop = rectInfo.top;
  //计算nav导航栏的高度
  const navBarHeight =
    statusBarHeight + menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;

  return navBarHeight;
};

const TAB_BAR_HEIGHT = 50;

/**
 * 返回屏幕可用高度
 */
export function getWindowHeight() {
  const info = uni.getSystemInfoSync();
  const { windowHeight } = info;

  return windowHeight;
}

export function getSafeWindowHeight() {
  const windowHeight = getWindowHeight();
  const windowInfo = uni.getWindowInfo();

  return windowHeight - windowInfo.safeArea?.top!;
}

export function sleep(time: number): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function rpxToPx(rpx: number) {
  const info = uni.getSystemInfoSync();
  const screenWidth = info.screenWidth; // 屏幕宽度，单位是px
  return rpx * (screenWidth / 750);
}

export function pxToRpx(px: number) {
  const info = uni.getSystemInfoSync();
  const screenWidth = info.screenWidth; // 屏幕宽度，单位是px
  return px / (screenWidth / 750);
}

/**
 * 返回底部安全距离
 * @param {*} showTabBar
 */
export function getSafeBottom() {
  const systemInfo = uni.getSystemInfoSync();
  const { screenHeight, safeArea } = systemInfo;

  if (safeArea) {
    // 计算安全区底部距离
    const safeBottom = screenHeight - safeArea.bottom;
    return safeBottom;
  }

  // 如果没有 safeArea 属性，提供默认值（部分老设备可能没有）
  return 0;
}
