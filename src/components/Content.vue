<template>
  <div id="content">
    <mt-cell title="我是一个详情界面"/>
    <h2>{{list.title}}</h2>
    <div v-html="list.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "数据",
      list: []
    };
  },
  mounted() {
    // console.log(this.$route.params);
    let aid = this.$route.params.aid;
    //调用请求数据的方法
    this.requestData(aid);
  },
  methods: {
    requestData(aid) {
      //get请求如果跨域的话，后台里面要允许跨域请求
      let api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
      this.$http.get(api).then(
        response => {
          console.log(response.body.result[0]);
          this.list = response.body.result[0];
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
// #content{
//   padding: 1rem;
//   line-height: 2;
//   img{
//     max-width:100%;
//   }
// }
</style>
