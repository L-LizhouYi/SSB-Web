<template>
  <div id="login">
    <router-link to="/login/login">login</router-link><br>
    <router-link to="/login/registered">registered</router-link><br>
    <router-link to="/login/reset">reset</router-link>
    <div id="content">
      <!-- 登录 -->
      <!-- 注册 -->
      <!-- 忘记密码 -->
      <router-view />
    </div>
  </div>
</template>

<script>
import '../assets/css/element-fui.css'
import '../assets/css/login.css'

export default {
  name: 'login',
  components: {

  }
}
</script>

<style scoped>
  #login {
    width: 100%;
    height: 100%;
    background-color: #F8FAFB;
    position: relative;
  }

  #content {
    width: 450px;
    /* height: 600px; */
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 5px 11px 20px 20px rgb(62 85 120 / 5%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    box-sizing: border-box;
    padding: 40px;
  }
</style>
