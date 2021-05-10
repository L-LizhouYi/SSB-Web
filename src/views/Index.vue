<template>
  <div id="index">
    <div id="header">
      <Header></Header>
    </div>
    <div id="content">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Iheader'
import Content from '@/components/Icontent'

export default{
  name: 'Index',
  components: {
    Header,
    Content
  }
}

</script>

<style scoped>
  #index{
    width: 100%;
    height: 100%;
    background-color: #F8FAFB;
  }
  #header{
    width: 100%;
    height: 75px;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 10px -10px rgb(0 0 0 / 40%);
  }
  #content{
    margin-top: 10px;
    background-color: #F8FAFB;
  }
</style>
