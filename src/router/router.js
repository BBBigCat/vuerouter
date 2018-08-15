import Vue from 'vue';
import VueRouter from 'vue-router';
//引入公共scss,创建项目时必须用scss
import './assets/css/basic.scss';

Vue.use(VueRouter);
//1.创建组件
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import User from '../components/User.vue';


//2.配置路由
const routes = [
  {path: "/home", component: Home},
  {path: "/news", component: News, name: 'news'},
  {path: '/user', component: User,},
  {path: '/*', redirect: '/home'}//默认跳转
];
//3.实例化路由
const router = new VueRouter({
  mode: 'history',//hash模式改为history模式,history模式要结合后端配置
  routes //（缩写）相当于routes:routes
});

export default router;
