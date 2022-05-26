<!-- 
*************************************************************************
* 이름:
*
* 설명:
*
* 참고:
*
*
**************************************************************************
-->

<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="disconnect" v-if="status === 'connected'">연결끊기</button>
    <button @click="connect" v-if="status === 'disconnected'">연결</button>

    <br />
    <br />

    {{ status }} <br /><br />

    <div v-if="status === 'connected'">
      <input v-model="message" />
      <button type="submit" @click="sendMessage">메세지 전송</button>
      <ul id="logs">
        <li v-for="(log, index) in logs" :key="index" class="log">
          {{ log.event }}: {{ log.data }}
        </li>
      </ul>
    </div>

    <br />
    <br />

    <button @click="clickLogin">로그인</button>

    <br />
    <br />

    <button @click="clickSignup">회원가입</button>

    <br />
    <br />

    <button @click="goTmp">tmp 페이지 이동</button>

    <br />
    <br />

    <button @click="test1">테스트1</button>

    <br />
    <br />

    <button @click="test2">테스트2</button>

    <br />
    <br />

    <button @click="test3">테스트3</button>

    <br />
    <br />

    <button @click="testgojs">테스트 gojs</button>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Main',

  components: {
    HelloWorld,
  },

  data() {
    return {
      message: '',
      logs: [],
      status: 'disconnected',
    };
  },

  async created() {
    // 공통함수 설정 테스트 (start)  ----------------------------------------------------------
    console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  84');
    console.log(this.$isIe());
    console.log(this.$isMobile());
    // 공통함수 설정 테스트 (end)  ----------------------------------------------------------

    // axios 테스트 (start)  ----------------------------------------------------------
    const rtn = await axios.get('https://jsonplaceholder.typicode.com/todos/');

    console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  92');
    console.log(rtn);
    // axios 테스트 (end)    ----------------------------------------------------------
  },

  methods: {
    connect() {
      this.socket = new WebSocket('wss://echo.websocket.org');
      this.socket.onopen = () => {
        this.status = 'connected';
        this.logs.push({
          event: '연결 완료: ',
          data: 'wss://echo.websocket.org',
        });

        this.socket.onmessage = ({ data }) => {
          this.logs.push({ event: '메세지 수신', data });
        };
      };
    },

    disconnect() {
      this.socket.close();
      this.status = 'disconnected';
      this.logs = [];
    },

    sendMessage() {
      this.socket.send(this.message);
      this.logs.push({ event: '메시지 전송', data: this.message });
      this.message = '';
    },

    async goTmp() {
      // router push 테스트 (start)  ----------------------------------------------------------
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  132');

      this.$router.push('/tmp');
      // router push 테스트 (end)    ----------------------------------------------------------
    },

    async test1() {
      const formdata = new FormData();
      formdata.append('id', 'stargenius');
      formdata.append('pw', 'pw1234');

      // axios 테스트 (start)  ----------------------------------------------------------
      // const rtn1 = await axios.get("http://localhost:5050/process/login");
      const rtn1 = await axios.post(
        'http://localhost:5050/process/login',
        formdata,
        {
          header: {
            'Context-Type': 'multipart/form-data',
          },
        },
      );

      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  142');
      console.log(rtn1);
      // axios 테스트 (end)    ----------------------------------------------------------
    },

    async test2() {
      // axios 테스트 (start)  ----------------------------------------------------------
      const rtn2 = await axios.get('http://localhost:5050/api/prod');
      // const rtn2 = await axios.get('/api/prod');

      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  151');
      console.log(rtn2);
      // axios 테스트 (end)    ----------------------------------------------------------
    },

    async test3() {
      // axios 테스트 (start)  ----------------------------------------------------------
      const rtn3 = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/',
      );

      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  162');
      console.log(rtn3);
      // axios 테스트 (end)    ----------------------------------------------------------
    },

    async clickLogin() {
      // router push 테스트 (start)  ----------------------------------------------------------
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  169');

      this.$router.push('/login');
      // router push 테스트 (end)    ----------------------------------------------------------
    },

    async clickSignup() {
      // router push 테스트 (start)  ----------------------------------------------------------
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  177');

      this.$router.push('/signup');
      // router push 테스트 (end)    ----------------------------------------------------------
    },

    async testgojs() {
      // router push 테스트 (start)  ----------------------------------------------------------
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  203');

      this.$router.push('/testgojswordcloud');
      // router push 테스트 (end)    ----------------------------------------------------------
    },
  },
};
</script>

<style></style>
