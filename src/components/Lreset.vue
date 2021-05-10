<template>
  <div id="reset">
    <!-- LOGO -->
    <div id="logo">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <!-- 标题 -->
    <p class="title">重置密码</p>
    <!-- 重置表单 -->
    <div>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="email">
          <el-input class="bdinput" v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <p class="bdyzm">
          <el-input class="bdinput" v-model="form.yzm" placeholder="验证码"></el-input>
          <img src="../assets/images/captcha.png" alt="">
        </p>
        <el-button type="primary" id="bdbutton" size="medium">重置</el-button>
      </el-form>
    </div>
    <hr class="sethr">
    <div class="retlogin">
      <p><router-link to="/index" tag="span">返回首页</router-link></p>
    </div>
  </div>
</template>

<script>
import { rulesEmail } from '../assets/js/login.js'
export default {
  data () {
    return {
      form: {
        email: '',
        yzm: ''
      },
      rules: {
        email: [
          { required: true, validator: rulesEmail, trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style>
  hr{
    margin: 20px 0px;
  }
</style>
