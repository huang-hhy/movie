<template>
    <div class="detail">
        <div class="nav">
            <div style="cursor: pointer;" @click="toHome()" class="jt">
                <van-icon name="arrow-left" color="#ccc" size="25px"/>
            </div>
            <div>{{detailList.name}}</div>
            <div></div>
        </div>
        <div class="img">
            <img :src="detailList.poster" alt="">
        </div>
        <div class="film-detail">
            <div class="title">
                <p>{{detailList.name}}</p><p>{{detailList.grade}}</p>
            </div>
            
            <p>{{detailList.category}}</p>
            <p>2021-02-12上映</p>
            <p>{{detailList.nation}} | {{detailList.runtime}}</p>
            <div class="miaoshu">
                {{detailList.synopsis}}
            </div>
        </div>
        <div class="yanyuan">
            <p class="title">演职人员</p>
            <ul>
                <li v-for="(item,index) in detailList.actors" :key="index">
                    <img :src="item.avatarAddress" alt="">
                    <p>{{item.name}}</p>
                    <p>{{item.role}}</p>
                </li>
               
            </ul>
        </div>
         <div class="juzhao">
            <p class="title">剧照</p>
            <ul>
                <li v-for="(item,index) in detailList.photos" :key="index">
                    <img :src="item" alt="">                
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:null,
            detailList:[]
        }      
    },
    methods:{
        toHome(){
            this.$router.push('/home')
        }
    },
    mounted(){ 
        this.id=this.$route.params.id
        // console.log(this.id);
        axios({
                url:"https://m.maizuo.com/gateway?filmId="+this.id,              
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1613914180230906031767553","bc":"440100"}',
                    'X-Host':'mall.film-ticket.film.info'
                    }
                })
                .then(res=>{
                // console.log(res.data);
                this.detailList=res.data.data.film
                // console.log(this.detailList);
                })
    }
}
</script>

<style scoped lang="scss">
.detail{
    .nav{
        display: flex;
        .jt{
            i{line-height: 50px;}
        }
        div:nth-child(1){
            display: flex;
            justify-content: start;
            padding-left: 20px;
        }
        div{
            flex: 1;
            display: flex;
            justify-content: center;
            height: 50px;
            line-height: 50px;
        }
        // div:nth-child(2){
        //     flex: 2;
        // }
    }
    background-color: #f4f4f4;
    margin-bottom: 50px;
    .img{
        width: 100%;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .film-detail{
        width: 100%;
        background-color: white;
        box-sizing: border-box;
        padding: 20px;
        .title{
            width: 100%;
            overflow: hidden;
            p:nth-child(1){
                float: left;
                font-size: 18px;
                font-weight: 700;
                
            }
            p:nth-child(2){
                float: right;
            }
        }
        p{
            line-height: 30px;
            font-size: 13px;
            color: #797d82;
        }
        .miaoshu{
            font-size: 14px;
            color: #797d82;
        }
    }
    .yanyuan{
        width: 100%;
        margin: 10px 0;
        background-color: white;
        .title{
            height: 50px;
            line-height: 50px;
            margin-left: 10px;
        }
        ul{
             overflow-x: scroll;
              white-space: nowrap;
            li{
                list-style: none;
               display: inline-block;
                // float: left;
                width: 25%;
                padding-bottom: 10px;
                img{
                    width: 90%;
                    margin-left:5%;
                }
                p{
                    // margin-top: 5px;
                    height: 25px;
                    text-align: center;
                    font-size: 12px;
                    line-height: 25px;

                }
            }
        }
    }

    .juzhao{
        width: 100%;
        background-color: white;
        .title{
            height: 50px;
            line-height: 50px;
             margin-left: 10px;
        }
        ul{
             overflow-x: scroll;
              white-space: nowrap;
            li{
                list-style: none;
               display: inline-block;
                width: 40%;
                img{
                    width: 90%;
                    margin-left:5%;
                    padding-bottom: 10px;
                    height: 150px;
                }              
            }
        }
    }
}
</style>