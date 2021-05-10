<template>
  <div id="content">
    <div id="l">22</div>
    <div id="r">
      <!-- 签到 -->
      <div id="SignIn">
        签到
      </div>
      <!-- WP投稿 -->
      <div id="WpContribute">
        投稿入口
      </div>
      <!-- 赛事 -->
      <div id="event">
        赛事
      </div>
      <!-- 最新WP -->
      <div id="NewWp">
        最新WriteUP
      </div>
      <!-- 解题动态 -->
      <div id="dynamic">
        解题动态
      </div>
      <!-- 友情链接 -->
      <div id="Links">
        友情链接
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  #content{
    width: 1240px;
    /* height: 100px; */
    margin: 0 auto;
    display: flex;
  }
  #l, #r{
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid;
  }
  #l{
    width: 900px;
    /* height: 100px; */
  }
  #r{
    width: 340px;
    /* height: 100px; */
  }

  #r>div{
    width: 300px;
/*    height: 100px; */
    /* background-color: #0081FF; */
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 0px rgb(127 127 127 / 30%);
  }
  #r > div:nth-child(n-1){
    margin-top: 20px;
    background-color: #FFFFFF;
    height: 200px;
  }
  #SignIn{
    height: 136px;
    background: linear-gradient(230deg, #aa66cc, #ca9fdf) !important;
  }
  #WpContribute{
    height: 200px;
  }
</style>
