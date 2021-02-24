<template>
    <div class="information">
        <div v-html="list.data.data.content">
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Information",
    data(){
        return{
            list:[]
        }
    },
     mounted(){
         axios({
                url:"https://m.maizuo.com/gateway?actId=ElzMZU125260",              
                headers:{
                    'X-Client-Info':'',	
                    'X-Host':'mall.act.static-page.info'
                    }
                })
                .then(res=>{
                    console.log(res.data);
                    this.list=res.data
                    // console.log(this.list.data.data.content);
                })
    }
}
</script>

<style scoped lang="scss">

</style>