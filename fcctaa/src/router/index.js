// ***********************************************************************************
// * 이름:
// *
// * 설명:
// *
// * 참고:
// *
// *
// ***********************************************************************************

import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '@/views/Start.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Tmp from '@/views/Tmp.vue';
import Tmp2 from '@/views/Tmp2.vue';
// import TestGoJsWordCloud from '@/sample/wordcloud/TestGoJsWordCloud.vue';

Vue.use(VueRouter);

const NotFound = { template: '<div>Page not found</div>' };

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Start },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/tmp', component: Tmp },
    { path: '/tmp2', component: Tmp2 },
    // { path: '/testgojswordcloud', component: TestGoJsWordCloud },
    { path: '*', component: NotFound },
  ],
});

console.log('>>>>>>>>>>>>>>>>>  router/index.js  35');

export default router;
