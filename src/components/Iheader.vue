<template>
  <div id="header">
    <h1> C T F - D o c k e r</h1>
    <!-- 导航主体 -->
    <div id="ui">
      <ul>
        <router-link to="/login" tag="li"><span>答题</span></router-link>
        <router-link to="/login" tag="li"><span>竞赛</span></router-link>
        <router-link to="/login" tag="li"><span>排行榜</span></router-link>
        <router-link to="/login" tag="li"><span>队伍</span></router-link>
        <router-link to="/login" tag="li"><span>登录</span></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  #header > h1{
    padding: 20px;
    text-align: center;
  }
  #ui > ul{
    height: 60px;
    box-sizing: border-box;
    margin: 10px 20px;
    border-radius: 10px;
    background-color: rgba(255,255,255,1);
    box-shadow: 0px 10px 10px 20px rgb(0 0 0 / 6%);

    display: flex;
    justify-content: center;
  }

  #ui li{
    display: inline-block;
    width: 100px;
    text-align: center;
    line-height: 50px;
    margin: 5px 80px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 700;
    color: #757575;
  }

  #ui li:hover{
    cursor: pointer;
    color: #50a1ff;
    border-bottom: 4px solid #757575;
  }
</style>
