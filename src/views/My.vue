<template>
    <div class="my">
        <div class="header">
            <p></p>
            <span>立即登录</span>
        </div>
        <div class="list">
            <div>
                <van-icon name="setting" size="20px"/>
                 <p>电影订单</p>
            </div>
            <div>
               <van-icon name="setting" size="20px"/>
                 <p>电影订单</p>
            </div>
        </div>
        <div class="item">
            <van-icon name="setting" size="20px"/>
            <div>买座卷</div>
            <div>></div>
        </div>
        <div class="item">
            <van-icon name="setting" size="20px"/>
            <div>组合红包</div>
            <div>></div>
        </div>
        <div class="item">
            <van-icon name="setting" size="20px"/>
            <div>余额</div>
            <div>></div>
        </div>
        <div class="item">
            <van-icon name="setting" size="20px"/>
            <div>设置</div>
            <div>></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"My",
    components:{

    }
}
</script>

<style scoped lang="scss">
.my{
    background-color: #f4f4f4;
    width: 100%;
    height: 100%;
    .header{
        width: 100%;
        height: 150px;
        position: relative;
        background-color: orange;
        p{
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            top: 25%;
            left: 5%;
            background-color: pink;
        }
        span{
            position: absolute;
            top: 45%;
            left: 33%;
        }
    }
    .list{
        display: flex;
        background-color: white;
        margin-bottom: 10px;
        div{
            flex: 1;
            flex-direction: column;
            align-items: center;
            display: flex;
            justify-content: center;
            
            p,i{
                padding: 10px;
            }
        }
    }
    .item{
        display: flex;
        margin-bottom: 2px;
        background-color: white;
        div,i{
            line-height: 50px;
        }
        i{
            flex: 1;
            display: flex;
            justify-content: center;
        }
        div:nth-child(1){
            flex: 1;
        }
        div:nth-child(2){
            flex: 5;
        }
        div:nth-child(3){
            flex: 1;
            display: flex;
            justify-content: end;
            padding-right: 20px;
        }
    }
}
</style>