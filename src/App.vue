<template>
  <div id="app">
    <div class="page-navbar">
      <mt-navbar class="header" v-model="selected">
        <mt-tab-item id="1">
          <router-link to="/home">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="2">
          <router-link to="/news">新闻</router-link>
        </mt-tab-item>
        <mt-tab-item id="3">
          <router-link to="/user">用户中心</router-link>
        </mt-tab-item>
      </mt-navbar>
      <br>
      <!-- <header class="header">
    </header> -->
      <router-view></router-view>
    </div>
     <!-- <div class="shadow">
       <div>
        <img alt="今日诗词" src="https://v2.jinrishici.com/one.svg?font-size=20&spacing=2">
       </div>
    </div> -->
  </div>
</template>

<script>
/*不同路由传值:动态路由
   *  1.配置动态路由
   *routes:[
   *  //动态路径参数，以冒号开头
   *  {path:'/user/:id',component:User}
   * ]
   *
   *2.在对应界面
   * this.$route.params获取路径的值
   *
   *
   * */
export default {
  name: "app",
  data() {
    return {
      selected: "1",
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
.mint-tab-item-label {
  font-size: inherit; //继承自定义字体大小
}
// .header {
//   height: 4rem;
//   background: #000;
//   color: #ffff;
//   line-height: 4rem;
//   // text-align: center;
//   a {
//     color: #ffff;
//     text-decoration: none;
//     padding: 0 2rem;
//   }
// }
.shadow{
  position: relative;
}
</style>
