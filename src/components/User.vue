<template>
  <div id="user">
    <mt-cell title="我是用户中心"/>
    <div class="user">
      <div class="left">
        <ul>
          <li>
            <router-link to="/user/useradd">用户增加</router-link>
          </li>
          <li>
            <router-link to="/user/userlist">用户列表</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        内容区域
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
    mounted() {}
  };

</script>

<style lang="scss" scoped>
  .user {
    display: flex;

    .left {
      width: 200px;
      // min-height: 400px;
      border-right: 2px solid #eee;

      li {
        line-height: 2;
      }
    }
    .right {
      flex: 1;
    }
  }

</style>
