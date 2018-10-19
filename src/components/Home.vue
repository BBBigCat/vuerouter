<template>
  <div class="home">
    <mt-cell title="我是一个Home组件">
      {{this.$store.state.count}}--{{this.$store.getters.computedCount}}
    </mt-cell>
    <mt-cell v-for="(item,key) in list" :key=key :title="item" is-link :to="{  path: 'pcontent', query: { aid: key} }">
      <!-- <router-link :to="'/pcontent?aid='+key">{{key}}--{{item}}</router-link> -->
    </mt-cell>
    <!-- <ul>
              <li v-for="(item,key) in list" :key=key>
                <router-link :to="'/pcontent?aid='+key">{{key}}--{{item}}</router-link>
              </li>
            </ul> -->
    <br>
    <div class="button-box">
      <mt-button type="primary" size="small" @click.native="incCount()">增加vuex中count数量</mt-button>
      <mt-button type="primary" size="small" @click.native="goNews()">通过js跳转到新闻页面</mt-button>
    </div>
  </div>
</template>

<script>
  //使用vuex 1、引入store
  import store from "../vuex/store.js";
  //2.注册
  export default {
    data() {
      return {
        msg: "我是一个Home组件",
        list: ["苹果", "菠萝", "香蕉"]
      };
    },
    store,
    methods: {
      goNews() {
        /*编程式导航（js跳转路由）
          官方：注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。
          想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
          */
        // this.$router.push({path:'news'})
        // this.$router.push({path: '/content/499'})
        //命名路由
        this.$router.push({
          name: "news"
        });
      },
      incCount() {
        //触发state中的数据
        // this.$store.commit('incCount');
        this.$store.dispatch("incMutationsCount"); //触发actions里的方法
      }
    }
  };

</script>

<style scoped>
  .button-box {
    display: flex;
    justify-content: space-around;
  }

</style>
