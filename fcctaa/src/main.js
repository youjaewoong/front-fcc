//***********************************************************************************
//* 이름: src/main.js
//*
//* 설명:
//*
//* 참고:
//*
//*
//***********************************************************************************

import Vue from 'vue';
import router from '@/router/index.js';
import store from '@/store/index.js';
import App from './App.vue';
import * as global from '@/utils/global.js';
import * as functionList from '@/utils/functionList.js';

Vue.config.productionTip = false;

console.log('>>>>>>>>>>>>>>>>>>  main.js  19');
console.log(global);

// 1. 공통 함수들을 vue.prototype에 세팅한다.
Object.keys(global).forEach((key) => {
  Object.defineProperty(Vue.prototype, `$${key}`, { value: global[key] });
});
Object.keys(functionList).forEach((key) => {
  Object.defineProperty(Vue.prototype, `$${key}`, { value: functionList[key] });
});

// 2. vue 인스턴스를 생성한다.
window.vmForFccTaaProject = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
