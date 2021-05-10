<template>
  <div>
    <!-- LOGO -->
    <div id="logo">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <!-- 表单 -->
    <div id="from">
      <el-form :model="form" :rules="rules" ref="form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input class="bdinput" v-model="form.username" placeholder="用户名 或 邮箱" clearable></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input class="bdinput" v-model="form.password" placeholder="密码" show-password clearable></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <p class="bdyzm">
          <el-input class="bdinput" v-model="form.yzm" placeholder="验证码"></el-input>
          <img src="../assets/images/captcha.png" alt="">
        </p>
        <!-- 自动登录功能 -->
        <p>
          <el-checkbox v-model="form.AutoLogin">自动登录</el-checkbox>
          <span>
            <router-link to="/login/registered">注册</router-link> | <router-link to="/login/reset">忘记密码</router-link>
          </span>
        </p>
        <el-form-item>
          <el-button type="primary" id="bdbutton" size="medium">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入规则
import { rulesUsername, rulesPassword } from '../assets/js/login.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: '',
        yzm: '',
        AutoLogin: false
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, validator: rulesUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: rulesPassword, trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped>
  #from>form p:nth-child(4) {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }

  #from a {
    font-size: 14px;
  }
</style>
