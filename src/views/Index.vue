<template>
  <div id="index">
    <div id="header">
      <Header></Header>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Iheader'
import '../assets/css/element-fui.css'
export default{
  name: 'Index',
  components: {
    Header
  }
}

</script>

<style scoped>
  #index{
    width: 100%;
    height: 100%;
  }
  #header{
    width: 100%;
    height: 75px;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 10px -10px rgb(0 0 0 / 40%);
  }
  #content{
    width: 1240px;
    margin: 0 auto;
    padding: 20px 0px;
    color: #505050;
  }
</style>
