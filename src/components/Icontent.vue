<template>
  <div id="content">
    <!-- 轮播图片 -->
    <div id="limg">
      <el-carousel trigger="click" height="500px" id="box-r">
        <!-- <el-carousel-item v-for="item in 2" :key="item"> -->
        <!-- <h3 class="small">{{ item }}</h3> -->
        <!-- </el-carousel-item> -->

        <el-carousel-item>
          <img src="../assets/images/b1.jpg" alt="">
        </el-carousel-item>

        <el-carousel-item>
          <img src="../assets/images/bg.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 分割竖线 -->
    <!-- <div style="height: 400px; width: 3px; background: #475669; margin-top: 50px;"></div> -->

    <!-- 功能区域 -->
    <div id="rfun">
      <ul class="rl">
        <ul>
          <span>使用介绍</span><hr>

        </ul>
        <ul>
          <span>系统公告</span><hr>
        </ul>
        <ul>
          <span>赛事新闻</span><hr>
        </ul>
      </ul>
      <ul class="rr">
        <span>用户信息</span>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
  #content {
    display: flex;
    justify-content: space-between;
  }

  #box-r {
    border-radius: 25px;
  }

  #limg {
    width: 900px;
  }

  #limg img {
    width: 100%;
    height: 100%;
  }

  #rfun {
    width: 550px;
    height: 500px;
    /* background-color: chocolate; */

    border: 2px solid black;
    box-sizing: border-box;
    padding: 10px;

    display: flex;
    justify-content: space-between;

  }

  .rl{
    width: 310px;
    /* background-color: red; */
  }

  .rl > ul{
    display: block;
    height: 100px;
  }

  .rr{
    width: 200px;
    background-color: aquamarine;
  }
</style>
