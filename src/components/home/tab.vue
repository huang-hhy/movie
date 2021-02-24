<template>
    <div class="tab">
        <van-tabs v-model="active">
            <van-tab title="正在热映">
                <!-- <router-link> -->
                <div class="list" v-for="(item,index) in hotList" :key="index"
                @click="handelChangPage(item.filmId)">
                    <div class="img">
                        <img :src="item.poster" alt="">
                    </div>
                    <div class="contant">
                        <h4>{{item.name}}</h4>
                        <p>观众评分：{{item.grade}}</p>
                        <p>主演：{{item.director}}</p>
                        <p>{{item.nation}} | {{runtime}}分钟</p>
                    </div>
                    <div class="gp">
                        <p>购票</p>
                    </div>
                </div>
                <!-- </router-link> -->
            </van-tab>
            <van-tab title="即将上映">
                <div class="list" v-for="(item,index) in aboutList" :key="index"
                @click="handelChangPage(item.filmId)">
                    <!-- <div> -->
                        <div class="img">
                            <img :src="item.poster" alt="">
                        </div>
                        <div class="contant">
                            <h4>{{item.name}} <span>{{item.item.name}}</span></h4>                    
                            <p>主演：{{item.director}}</p> 
                            <p>上映日期：周五 2月26日</p>                     
                        </div>
                        <div class="gp">
                            <p>购票</p>
                        </div>
                    <!-- </div> -->
                    
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            active:0,
            hotList:[],
            aboutList:[],
            runtime:'',
            showTan:false
        }
    },
    methods:{
        goCinema(){
            this.$router.push('/cinema')
        },
        handelChangPage(id){
            // console.log(id);
            this.$router.push(`/detail/${id}`)
        },
        getHotList(){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=1781853",
                
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1613914180230906031767553","bc":"440100"}',
                    'X-Host':'mall.film-ticket.film.list'
                }
                })
                .then(res=>{
                // console.log(res.data);
                this.hotList=res.data.data.films
                // console.log(this.hotList);
                })
        },

        getAboutList(){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=4026868",
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1613914180230906031767553","bc":"440100"}',
                    'X-Host':'mall.film-ticket.film.list'
                }
                })
                .then(res=>{
                // console.log(res.data);
                this.aboutList=res.data.data.films
                // console.log(this.aboutList);
                })
        },
        handelScroll(){
            // console.log(document.documentElement.scrollTop);
            if(document.documentElement.scrollTop>='150'){
                // console.log('fixed');
                this.showTan=true
            }else{
                // console.log("un");
                this.showTan=false
            }
        }
    },

    mounted(){
        this.getHotList(),
        this.getAboutList(),
        window.onscroll=this.handelScroll
    }

}
</script>

<style scoped lang="scss">
.fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: white;
}
.tab{
    margin-top: 20px;
    .list{
        cursor: pointer;
        display: flex;
        padding:10px 0;
        border-top: 1px solid #ccc;
        .img{
            margin-right: 20px;
            flex: 1;
            img{
                width: 100%;
            }
        }
        .contant{
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4{
                font-weight: normal;
                span{
                    background: #ccc;
                    padding: 2px;
                    font-size: 12px;
                }
            }
            p{
                font-size: 13px;
                margin-top: 4px;
                color: #797d82;
            }
            
            flex: 3;
        }
        .gp{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
                border:1px solid sandybrown;
                width: 50px;
                padding: 3px;
                text-align: center;
                z-index: 99;
            }
        }
    }
}
</style>