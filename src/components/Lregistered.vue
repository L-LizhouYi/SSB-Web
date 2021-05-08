<template>
  <div id="reg">
    <!-- LOGO -->
    <div id="logo">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <!-- 标题 -->
    <p class="title">注册账号</p>
    <!-- 注册表单 -->
    <div>
       <el-form :model="form">
         <el-input class="bdinput" v-model="form.username" placeholder="账号"></el-input>
         <el-input class="bdinput" v-model="form.email" placeholder="邮箱"></el-input>
         <el-input class="bdinput" v-model="form.npassword" placeholder="密码"></el-input>
         <el-input class="bdinput" v-model="form.opassword" placeholder="确认密码"></el-input>
         <p class="bdyzm">
           <el-input class="bdinput" v-model="form.yzm" placeholder="验证码"></el-input>
           <img src="../assets/images/captcha.png" alt="">
         </p>
         <el-button type="primary" id="bdbutton" size="medium">注册</el-button>
       </el-form>
    </div>
       <!-- 分割线 -->
       <hr class="sethr">

    <div class="retlogin">
      <p>已有账号 ? </p>
      <p><router-link to="/login/login" tag="span">登录 ! </router-link></p>
    </div>

  </div>
</template>

<script>
export default{
  data () {
    return {
      form: {
        username: '',
        email: '',
        npassword: '',
        opassword: '',
        yzm: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
