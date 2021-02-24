<template>
  <div id="app">
    <div id="tabbar">
      <van-tabbar v-model="active" active-color="#ff5f16">
        <van-tabbar-item icon="friends" to="/home" active>电影</van-tabbar-item>
        <van-tabbar-item icon="video" to="/cinema">影院</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/information">咨讯</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      active:0
    }
  },
  mounted(){
    axios({
      url:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=1781853",
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1613914180230906031767553","bc":"440100"}',
        'X-Host':'mall.film-ticket.film.list'
      }
    })
    .then(res=>{
      // console.log(res.data);
    })
  }
}
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
</style>
