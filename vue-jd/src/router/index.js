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
import WriteAddress from '@/page/writeAddress'
import AccountManagement from '@/page/accountManagement'
import ChangePassword from '@/page/changePassword'
import ChangeTelNum from '@/page/changeTelNum'
import Address from '@/page/address'
import Order from '@/page/order'
import Pay from '@/page/pay'
import Success from '@/page/success'
import OrderDetail from '@/page/orderDetail'
import OrderList from '@/page/orderList'



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
    },
    {
      path: '/writeAddress',
      name: 'WriteAddress',
      component: WriteAddress
    },
    {
      path: '/accountManagement',
      name: 'AccountManagement',
      component: AccountManagement
    },
    {
      path: '/changePassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/changeTelNum',
      name: 'ChangeTelNum',
      component: ChangeTelNum
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    }
  ]
})
