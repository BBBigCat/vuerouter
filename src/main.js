import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//引入公共scss,创建项目时必须用scss
import './assets/css/basic.scss'
// import './router/router.js' 路由模块化，把配置路由的过程放入另一个js中，然后引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI)

//1.创建组件
import Home from './components/Home.vue'
import News from './components/News.vue'
import Content from './components/Content.vue'
import Pcontent from './components/Pcontent.vue'
import User from './components/User.vue'
import UserAdd from './components/User/UserAdd.vue'
import UserList from './components/User/UserList.vue'
import shadow from './components/shadow.vue'


//2.配置路由
const routes = [{
    path: "/home",
    component: Home,
    name:"Home"
  },
  {
    path: "/news",
    component: News,
    name: "news"
  },
  {
    path: "/content/:aid",
    component: Content,
    name: "content"
  }, //动态路由
  {
    path: "/pcontent",
    component: Pcontent
  },
  //路由嵌套
  {
    path: '/user',
    component: User,
    children: [{
        path: 'useradd',
        component: UserAdd
      },
      {
        path: 'userlist',
        component: UserList
      }
    ]
  },
  {
    path: '/shadow',
    component: shadow
  },
  {
    path: '/*',
    redirect: '/shadow'
  } //默认跳转
];
//3.实例化路由
const router = new VueRouter({
  mode: 'history', //hash模式改为history模式,history模式要结合后端配置
  routes //（缩写）相当于routes:routes
});

//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
//5.    <router-view></router-view>跟组件的模板里边放上这句话
