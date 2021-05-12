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
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input class="bdinput" v-model="form.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input class="bdinput" v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password1">
          <el-input class="bdinput" v-model="form.password1" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input class="bdinput" v-model="form.password2" placeholder="确认密码"></el-input>
        </el-form-item>
        <p class="bdyzm">
          <el-input class="bdinput" v-model="form.yzm" placeholder="验证码"></el-input>
          <img src="../assets/images/captcha.png" alt="">
        </p>
        <el-button type="primary" id="bdbutton" size="medium" @click="submitForm('form')">注册</el-button>
      </el-form>
    </div>
    <!-- 分割线 -->
    <hr class="sethr">

    <div class="retlogin">
      <p>已有账号 ? </p>
      <p>
        <router-link to="/login/" tag="span">登录 ! </router-link>
      </p>
    </div>

  </div>
</template>

<script>
import {
  rulesUsername,
  rulesPassword,
  rulesEmail
} from '../assets/js/login.js'
import * as API from '../api/v1.js'
export default {
  data () {
    var rulesPassword2 = (rule, value, callback) => {
      if (this.form.password2 === '') {
        callback(new Error('请再次输入密码'))
      } else if (this.form.password2 !== this.form.password1) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        email: '',
        password1: '',
        password2: '',
        yzm: ''
      },
      rules: {
        username: [{
          required: true,
          validator: rulesUsername,
          trigger: 'blur'
        }],
        password1: [{
          required: true,
          validator: rulesPassword,
          trigger: 'blur'
        }],
        password2: [{
          required: true,
          validator: rulesPassword2,
          trigger: 'blur'
        }],
        email: [{
          required: true,
          validator: rulesEmail,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    // 注册用户
    RegUser () {
      let data = {
        username: this.form.username,
        password: this.form.password1,
        email: this.form.email
      }
      API.userRegister(data).then(response => {
        if (response.code === 0) {
          this.$notify.success({
            title: '用户注册成功',
            message: '正在跳转到登录页面.'
          })
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        } else {
          this.$notify.error({
            title: '用户注册失败',
            message: response.msg
          })
          this.form = {}
        }
      })
    },
    // 校验
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.RegUser()
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
