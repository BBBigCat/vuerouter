<template>
  <div id='shadows'>
    <div class="content">
      <transition name='fade'>
        <img alt="今日诗词" @click="changeHash()"  src="https://v2.jinrishici.com/one.svg?font-size=20&spacing=2" v-if="show">
      </transition>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "shadows",
  data() {
    return {
      show: true
    };
  },
  methods: {
    changeHash() {
      this.show = false;
      var that = this;
      setTimeout(function() {
        that.$router.push({
          name: "Home"
        });
      }, 1000);
    }
  },
};
</script>
<style scoped>
#shadow {
  position: relative;
  width: 400px;
  height: 400px;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>
