//***********************************************************************************
//* 이름: src/store/index.js
//*
//* 설명:
//*
//* 참고:
//*
//*
//***********************************************************************************

import Vue from 'vue';
import Vuex from 'vuex';
import common from '@/store/modules/common.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common: common,
  },
});

export default store;
