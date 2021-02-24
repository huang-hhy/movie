<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in SwiperList" :key="index">
                <img :src="item.imgUrl" alt="">
            </van-swipe-item>
            <!-- <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item> -->
        </van-swipe>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            SwiperList:[]
        }
    },
    name:"Swiper",
    mounted(){
         axios({
            url:"https://m.maizuo.com/gateway?type=2&cityId=440100&k=718459",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1613914180230906031767553","bc":"440100"}',
                'X-Host':'mall.cfg.common-banner'
                }
            })
            .then(res=>{
            // console.log(res.data);
            this.SwiperList=res.data.data
            // console.log(this.SwiperList);
        })
    }
    
}
</script>

<style scoped lang="scss">
.swiper img{
    width: 100%;
}
</style>