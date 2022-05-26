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
    <input type="text" name="id" v-model="id" placeholder="아이디" />
    <input type="password" name="pw" v-model="pw" placeholder="비밀번호" />

    <br />
    <br />

    <button @click="clickSignUp">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',

  data() {
    return {
      id: '',
      pw: '',
    };
  },

  created() {},

  methods: {
    async clickSignUp() {
      // let formdata = new FormData();

      // formdata.append("name", this.id);
      // formdata.append("id", this.id);
      // formdata.append("pw", this.pw);

      // formdata.set("name", this.id);
      // formdata.set("id", this.id);
      // formdata.set("pw", this.pw);

      console.log('>>>>>>>>>>>>>>>>>>>>>>  SignUp.vue  48');
      console.log(this.id);
      console.log(this.pw);

      // console.log(">>>>>>>>>>>>>>>>>>>>>>  SignUp.vue  58");
      // console.log(formdata.get("id"));
      // console.log(formdata.get("pw"));

      const fd = {
        id: this.id,
        pw: this.pw,
      };

      const rtn1 = await axios.post('http://localhost:5050/signup', fd);

      // axios({
      //   method: "post",
      //   url: "http://localhost:5050/login2",
      //   data: fd,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      // const rtn1 = await axios.post("http://localhost:5050/login2", formdata, {
      //   header: { "Context-Type": "multipart/form-data" },
      // });

      console.log('>>>>>>>>>>>>>>>>>>>>>>  SignUp.vue  76');
      console.log(rtn1);
    },
  },
};
</script>

<style></style>
