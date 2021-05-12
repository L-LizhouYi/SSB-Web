<template>
  <div id="Icontent">
    <div class="l">
      <!-- 轮播图 -->
      <div class="Carousel">
        <el-carousel trigger="click" height="230px" >
          <el-carousel-item v-for="item in Carousel" :key="item.imgUrl">
            <a :href="item.linkUrl">
              <img :src="item.imgUrl" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 通知 -->
      <div id="Notice">
        <!-- 广播喇叭 -->
        <div class="Not-l">
          <img src="../assets/images/gb.png" alt="">
        </div>
        <div class="Not-r">
            <el-carousel height="50px" direction="vertical"  indicator-position="none">
              <el-carousel-item v-for="item in Notice" :key="item.msg">
                <a :href="item.url">{{ item.msg }}
                  <span>[{{ item.time }}]</span>
                </a>
              </el-carousel-item>
            </el-carousel>
        </div>

      </div>
      <!-- 榜单 -->
      <div id="List" style="">
        <!-- 个人 -->
        <div id="Personal">
          <h3>个人榜</h3>
          <el-table
                :data="ListData.Personal"
                :header-cell-style="{fontSize: '2px',fontWeight: '400', color: '#000'}"
                style="width: 100%">
                <el-table-column
                  prop="Rank"
                  label="排名"
                  align="center"
                  min-width="2">
                </el-table-column>
                <el-table-column
                  prop="User"
                  label="用户"
                  min-width="4">
                </el-table-column>
                <el-table-column
                  prop="Minute"
                  label="分数"
                  min-width="3">
                </el-table-column>
              </el-table>
        </div>
        <!-- 战队 -->
        <div id="Clan">
          <h3>战队榜</h3>
          <el-table
                :data="ListData.Personal"
                :header-cell-style="{fontSize: '2px',fontWeight: '400', color: '#000'}"
                style="width: 100%">
                <el-table-column
                  prop="Rank"
                  label="排名"
                  align="center"
                  min-width="2">
                </el-table-column>
                <el-table-column
                  prop="User"
                  label="用户"
                  min-width="4">
                </el-table-column>
                <el-table-column
                  prop="Minute"
                  label="分数"
                  min-width="3">
                </el-table-column>
              </el-table>
        </div>
      </div>
      <!-- 最新动态 -->
      <div id="News"></div>
    </div>
    <div class="r">
      <!-- 签到 -->
      <div id="SignIn">
        签到
      </div>
      <!-- WP投稿 -->
      <div id="WpContribute">
        <h5>投稿入口</h5>
        <el-button type="primary">投稿题目</el-button><br>
        <el-button type="primary">投稿WP</el-button>
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
export default {
  data () {
    return {
      // 轮播图 url
      Carousel: [
        {
          imgUrl: 'https://ctf.bugku.com/upload/20210207/4de63f01e9f90ad0155d3e4028a97b43.png',
          linkUrl: 'https://jd.com'
        },
        {
          imgUrl: 'https://ctf.bugku.com/upload/20210428/22f56a567da6297ddc371c2ffe8f2c03.jpg',
          linkUrl: 'https://taobao.com'
        },
        {
          imgUrl: 'https://ctf.bugku.com/upload/20210302/23bfae1b47f3934b2b6162d3036a4b14.png',
          linkUrl: 'https://www.baidu.com'
        }
      ],
      // 轮播通知
      Notice: [
        {
          msg: '通知特特特额是是大师傅但是1',
          time: '2002-12-11',
          url: ''
        },
        {
          msg: '通知特特特额是是大师傅但是2',
          time: '2002-12-12',
          url: ''
        },
        {
          msg: '通知特特特额是是大师傅但是3',
          time: '2002-12-13',
          url: ''
        }
      ],
      // 排行榜数据
      ListData: {
        Personal: [
          {
            Rank: 1,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 2,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 3,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 4,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 5,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 6,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 7,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 8,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 9,
            User: 'test',
            Minute: 1000
          },
          {
            Rank: 10,
            User: 'test',
            Minute: 1000
          }
        ],
        Clan: {}
      }
    }
  }
}
</script>

<style scoped>
  #Icontent {
    display: flex;
  }
  .l,.r {
    box-sizing: border-box;
    padding: 0px 20px;
  }
  .l {
    width: 900px;
  }
  .r {
    width: 340px;
  }
  .l>div,
  .r>div {
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 0px rgb(127 127 127 / 30%);
  }
  .l>div:nth-child(n+2) {
    margin-top: 20px;
    background-color: #FFFFFF;
  }
  .r>div:nth-child(n+2) {
    margin-top: 20px;
    background-color: #FFFFFF;
  }
  .el-carousel {
    border-radius: 10px;
  }
  /* 轮播图 */
  .Carousel img{
    width: 100%;
    height: 100%;
  }
  #Notice {
    height: 50px;
    display: flex;
  }
  /* 广播通知 */
  .Not-l{
    width: 50px;
    line-height: 50px;
    text-align: center;
  }
  .Not-l img{
    display: inline-block;
    width: 20px;
    vertical-align: middle;
  }
  .Not-r{
    width: 100%;
    line-height: 50px;
  }
  .Not-r:hover a{
    color: #c64649;
  }
  .Not-r a{
    font-size: 16px;
    font-weight: 400;
    color: #ea5455;

  }
  .Not-r span{
    font-size: 12px;
    color: #a7abc3;
  }

 /* ------------------------------------------------------------ */

/* 排行榜 */
  #List {
    background-color: transparent;
    box-shadow: none;

    display: flex;
    justify-content: space-between;
  }
  #List>div{
    text-align: center;
  }

  #List>div h3{
    margin: 20px 0px;
  }

  #Clan,
  #Personal {
    width: 420px;
    box-sizing: border-box;
    padding: 0px 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgb(127 127 127 / 30%);
    overflow: hidden;
  }
  #News {
    height: 400px;
  }

  /* ----------------------------------------------- */

  #SignIn {
    height: 136px;
    background: linear-gradient(230deg, #aa66cc, #ca9fdf) !important;
  }

  /* 投稿样式 */
  #WpContribute {
    padding: 20px 0px;
    text-align: center;
  }

  #WpContribute h5 {
    font-size: 17px;
    font-weight: 700;
  }

  .el-button {
    padding: 10px 20px;
    width: 200px;
    border-radius: 10px;
    margin: 10px 0px;
    font-weight: 600;
  }
</style>
