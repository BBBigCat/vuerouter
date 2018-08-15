<template>
  <div>
    商品详情
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }, mounted() {
      //get传值
      console.log(this.$route.query);
    }
  }
</script>

<style scoped>

</style>
