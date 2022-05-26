const path = require('path');

module.exports = {
  // 빌드한 결과물을 ../nodeserver/public 디렉토리에 저장하는 것으로 설정한다.
  outputDir: path.resolve(__dirname, '../nodeserver/public'),
  // 아래 설정은 /api 로 리퀘스트 요청을 하면 해당 요청을 backend 쪽의 /api로 돌려주는
  // proxy 설정이다.
  // node express 서버와 vue front서버를 하나의 단일 서버에서 기동하게끔 하려면
  // 아래와 같이 proxy 설정을 해줘야 한다.
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5050/api',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },
};
