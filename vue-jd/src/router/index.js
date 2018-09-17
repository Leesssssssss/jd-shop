import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index'
import Classify from '@/page/classify'
import Discover from '@/page/discover'
import Cart from '@/page/cart'
import Login from '@/page/login'
import SignUp from '@/page/signUp'
import My from '@/page/my'
import GoodDetail from '@/page/goodDetail'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/goodDetail',
      name: 'GoodDetail',
      component: GoodDetail
    }
  ]
})
