const accountInfo = uni.getAccountInfoSync();
export const envVersion = accountInfo.miniProgram.envVersion;

// 正式
let config = {
  /** 接口请求地址 */
  requestURL: 'http://139.170.221.33:7777',
};
// 开发
if (envVersion === 'develop') {
  config = {
    requestURL: 'http://139.170.221.33:7777',
  };
}
// 体验
if (envVersion === 'trial') {
  config = {
    /** 接口请求地址 */
    requestURL: 'http://139.170.221.33:7777',
  };
}
console.log(envVersion, '====配置');
export const envConfig = config;
