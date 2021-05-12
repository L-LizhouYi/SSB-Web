<template>
  <div id="Iheader">
    <div id="l">
      <a href="">
        <img src="../assets/images/logo.png" alt="">
      </a>
    </div>
    <ul id="c">
      <router-link
       v-for="item in headbar"
      :key="item.name"
      :to="item.path"
      tag="li">{{ item.name }}</router-link>
    </ul>
    <div id="r">
      <div @click="test()" v-if="Avatar">
        <span>{{ this.UserInfo.username }}</span>
        <el-avatar icon="el-icon-user-solid" :size="40"></el-avatar>
      </div>
      <ul v-if="!Avatar" id="Lr">
        <router-link to="/login/" tag="li">登录</router-link>
        <router-link to="/login/registered" tag="li">注册</router-link>
      </ul>
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="ct"
      size="330px"
      :with-header="false">
      <div class="DraTop" style="">
        <el-avatar icon="el-icon-user-solid" :size="60"></el-avatar>
        <p><span>{{ this.UserInfo.username }}</span></p>
        <p><span>{{ this.UserInfo.Signature }}</span></p>
      </div>
      <div class="DraBut">
        <ul>
          <li><a href="">个人中心</a></li>
          <li><a href="">我的战队</a></li>
          <li><a href="">用户设置</a></li>
          <li><a href="">我的消息</a></li>
          <li @click="Signout"><a href="">退出登录</a></li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import * as API from '../api/v1.js'
export default{
  data () {
    return {
      // 抽屉
      ct: false,
      // 头像状态
      Avatar: false,
      UserInfo: {
        username: '',
        Signature: '这个家伙很懒, 什么也没留下'
      },
      headbar: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/topic',
          name: '题目'
        },
        {
          path: '/',
          name: '赛事'
        },
        {
          path: '/',
          name: '动态'
        },
        {
          path: '/',
          name: '公告'
        },
        {
          path: '/',
          name: 'WP库'
        },
        {
          path: '/',
          name: '排行榜'
        },
        {
          path: '/',
          name: '战队'
        },
        {
          path: '/',
          name: '商城'
        },
        {
          path: '/',
          name: '赛事中心'
        },
        {
          path: '/',
          name: '更多'
        }
      ]
    }
  },
  created () {
    this.checkJwt()
  },
  methods: {
    // 检查token
    checkJwt () {
      API.userMe().then(requests => {
        if (requests.code === 0) {
          this.Avatar = true
          this.UserInfo.username = requests.data.username
        } else if (requests.code === 40004) {
          // 清空本地 token
          localStorage.setItem('token', '')
        }
      })
    },
    // 退出登录
    Signout () {
      // 注销JWT
      API.userLogout().then()
      // 清空本地 token
      localStorage.setItem('token', '')
      // 跳转页面
      // this.$router.push('/index')
    },
    test () {
      this.ct = !this.ct
    }

  }
}
</script>

<style scoped>
  #Iheader{
    width: 1240px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  #l a{
    display: inline-block;
    width: 150px;
    height: 75px;
    position: relative;
  }
  #l a>img{
    width: 150px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  #c {
    width: 940px;
    padding: 0px  90px;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  #c >li{
    cursor: pointer;
    padding: 6px 15px;
    border-radius: 8px;
    color: #666666;
    font-size: 15px;
    font-weight: 500;
  }
 #c >li:nth-child(1){
    background-color: #0081FF;
    color: white;
  }
  #c li:nth-child(n+2):hover{
    color: black;
  }
  #r{
    width: 185px;
    height: 100%;
    box-sizing: border-box;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
  }
  #Lr{
    width: 100%;
    margin: auto 4px;
    display: flex;
    justify-content: space-between;
  }
  #Lr>li{
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #0081FF;
    color: #0081FF;
    padding: 5px 12px;
    border-radius: 20px;
  }

  #Lr li:nth-child(1){
    background-color: #0081FF;
    border: 1px solid #0081FF;
    color: white;
  }
  #Lr li:hover{
    background-color: #0081FF;
    border: 1px solid #0081FF;
    color: white;
  }
  #r{
    cursor: pointer;
  }
  #r > div{
    width: 100%;
    line-height: 75px;
    position: relative;
  }
  #r > div span:nth-child(1){
    position: absolute;
    left: 25px;
  }
  #r > div span:nth-child(2){
    position: absolute;
    right: 0px;
    top: 15px;
  }

  /* 弹出用户信息抽屉 */
  .DraTop{
    width: 100%;
    height: 186px;
    background: rgb(125 53 53 / 40%);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/userinfo-bg.png') no-repeat 0% 20%/ cover;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  .DraTop *{
    margin: 5px;
  }
  .DraBut {
    padding: 20px 20px;
  }
  .DraBut ul{

  }
  .DraBut li{
    line-height: 50px;
  }
</style>
