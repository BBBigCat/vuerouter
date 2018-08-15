<template>
  <div id="news">
    我是一个新闻组件--{{this.$store.state.count}}
    <ul class="list">
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+item.aid"> {{item.aid}}--{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  //引入store
  import store from '../vuex/store.js'

  export default {
    data() {
      return {
        msg: "我是一个新闻组件",
        list: []
      }
    },
  store,
    methods: {
      requestData() {
        //jsonp请求的话，后台接口要支持jsonp
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        this.$http.jsonp(api).then((response) => {
        // this.$http.get(api).then((response) => {
          console.log(response);
          //用到this要注意指向
          this.list = response.body.result;
          //数据放在store中,实现请求的数据的持久化
          this.$store.commit('addList', response.body.result);
        }, function (error) {
          console.log(error);
        })
      }
    },
    mounted() {
      //判断store中有没有数据
      let listData = this.$store.state.list;
      if (listData.length > 0) {
        this.list = listData;
      } else {
        this.requestData();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {

    li {
      height: 3.4rem;
      line-height: 3.4rem;
      border-bottom: 1px solid #eee;
      font-size: 1.6rem;
      a {
        color: #666;
      }
    }

  }
</style>
