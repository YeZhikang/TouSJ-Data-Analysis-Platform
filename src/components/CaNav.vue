<template>
  <div class="headerBlock">
    <div class="navBlock" ref="navBlock" :style="{width:width}">
      <ul>
        <div class="main">
          <div class="logoPart" @click="collapseIt"></div>
          <li><router-link to="/" ><a ref="index">首页</a></router-link></li>
          <li><router-link to="/da" ><a ref="da">数据分析</a></router-link></li>
          <li><router-link to="/celebrityAnalysis"><a ref="ca" style="color: #409EFF;font-weight: 600">网红价值</a></router-link></li>
          <li><el-input placeholder="搜索" size="small" suffix-icon="el-icon-search" style="width: 200px" ref="search"></el-input></li>
        </div>
        <div class="logreg">

          <div v-if="!userInfo.userName">
            <li id="login" ref="login"><router-link to="/" class="active">立即登陆</router-link></li>
            <li id="register" ref="register"><router-link to="/" class="regis">免费注册</router-link></li>
          </div>
          <div v-if="userInfo.userName">
            <li id="userName" ref="userName"><router-link to="/" class="active"> <el-tag type="primary" size="mini" style="margin-right: 10px">用户</el-tag> {{userInfo.userName}}</router-link></li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CaNav",
        data(){
            return{
                isCollapsed:false,
                userInfo: this.$store.state.userInfo
            }
        },
        props:{
            width:{
                type: String,
                default: '1100px'
            }
        },
        methods:{
            changeIndex(){
                let theme = this.$route.name;
                this.$refs[theme].style.color = '#409EFF';
                this.$refs[theme].style.fontWeight = '600'
            },
            collapseIt(){
                this.isCollapsed = !this.isCollapsed;
                this.$emit("is-collapsed",this.isCollapsed)
            }
        },
        mounted(){
            console.log(this.$store.state.userInfo)

            this.changeIndex();

        },
        watch:{

        }
    }
</script>

<style scoped>
  .headerBlock{
    width: 100%;
    margin: 0;

    border-top:4px solid #409EFF;
    border-bottom: 1px solid lightgray;
    position: fixed;
    background-color: white;
  }
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  li{
    display: inline-block;
  }

  h1{
    display: inline-block;
  }

  .navBlock{
    margin: 0 auto;
  }


  h1 {
    font-size: 26px;
    margin: 0;
  }

  li{
    line-height: 63px;
    margin-left: 8px;
  }

  a{
    text-decoration: none;
    padding: 7px 10px ;
    color: #757575;
    font-size:15px
  }

  .regis{
    color: white;
    background-color: #409EFF;
    border-radius: 6px;
  }
  .active{
    color: #409EFF;
  }

  a:link{

  }
  a:visited{

  }

  a:hover{
    background-color: rgb(244,244,244);
    border-radius: 6px;
  }
  a:active{
    background-color: rgb(244,244,244);
    border-radius: 6px;
  }

  .logreg{
    display: flex;
    align-items: center;
  }

  .logoPart{
    background-size: cover;
    background-image: url("../assets/faviconn.png");
    width: 100px;
    height: 40px;
    margin: 0 20px;
  }

  .main{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
