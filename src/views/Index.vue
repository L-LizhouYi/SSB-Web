<template>
  <div id="index">
    <!-- Header 栅格布局 -->
    <div id="header">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="background-color: #42B983;">1</div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple" id="t1">
            <ul>
              <li>答题</li>
              <li>竞赛</li>
              <li>排行榜</li>
              <li>队伍</li>
              <li>XXX</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">4</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Index',
  components: {

  }
}

</script>

<style scoped>
  #header {
    height: 80px;
    background-color: white;

    box-sizing: border-box;
    padding: 0px 10%;

    box-shadow: -5px -4px 20px 0px rgb(0 0 0 / 40%);
  }
  #t1 ul{
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;
  }
  #t1 li{
    width: 80px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    color: #666666;
  }
  #t1 li:hover{
    background-color: #0081FF;
    color: white;
  }
</style>
