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
    <div id="r" style="">
      <ul>
        <img src="" alt="">
        <router-link to="/login/" tag="li">登录</router-link>
        <router-link to="/login/registered" tag="li">注册</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
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
    display: flex;
    justify-content: space-between;
  }
  #r img{
    width: 20px;
    height: 20px;
    background-color: red;

  }
  #r ul{
    width: 100%;
    margin: auto 4px;
    display: flex;
    justify-content: space-between;
  }
  #r ul>li{
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #0081FF;
    color: #0081FF;
    padding: 5px 12px;
    border-radius: 20px;
  }

  #r ul li:nth-child(2){
    background-color: #0081FF;
    border: 1px solid #0081FF;
    color: white;
  }
  #r ul li:hover{
    background-color: #0081FF;
    border: 1px solid #0081FF;
    color: white;
  }
</style>
