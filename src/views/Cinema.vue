<template>
    <div class="cinema">
        <van-nav-bar title="影院" left-text="广州" colo>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="nav">
            <div>全城 <van-icon name="arrow-down" size="10px"/> </div>
            <div>APP订票 <van-icon name="arrow-down" size="10px"/> </div>
            <div>最近去过 <van-icon name="arrow-down" size="10px"/> </div>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item,index) in itemList" :key="index">
                    <div class="left">
                        <p>{{item.name}}</p>
                        <p>{{item.address}}</p>
                    </div>
                    <div class="right">
                        <p>49起</p>
                        <p>距离未知</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Cinema",
    data(){
        return{
            itemList:[]
        }
    },
    mounted(){
         axios({
                url:"https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=7657461",              
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1613914180230906031767553","bc":"440100"}',
                    'X-Host':'mall.film-ticket.cinema.list'
                    }
                })
                .then(res=>{
                    console.log(res.data.data.cinemas);
                    this.itemList=res.data.data.cinemas
                })
    }
}
</script>

<style scoped lang="scss">
.cinema{
    .nav{
        display: flex;
        height: 50px;
        line-height: 50px;
        
        div{
            flex: 1;
            display: flex;
            justify-content: center;
            i{
                line-height: 55px;
                margin-left: 5px;
            }
        }
    }
    .list{
        ul{
            li{
                list-style: none;
                display: flex;
                border-top: 1px solid #ccc;
                .left{
                    flex: 3;
                    p:nth-child(1){
                        padding: 10px 0 5px 10px;
                        color: #191a1b;
                        font-size: 15px;
                    }
                    p:nth-child(2){
                        width: 100%;
                        padding: 0px 0 10px 10px;
                        color: #797d82;
                        font-size: 12px;
                         display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        // white-space: nowrap;
                        -webkit-box-orient: vertical;
                    }
                }
                .right{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    p:nth-child(1){
                        color: #ff5f16;
                        font-size: 14px;
                    }
                    p:nth-child(2){
                        color: #797d82;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>