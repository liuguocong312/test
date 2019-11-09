import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Content from '../views/content'
import Change1 from '../views/change1'
import Change2 from '../views/change2'
import Change3 from '../views/change3'
import Change4 from '../views/change4'
import Change5 from '../views/change5'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Index,
    children: [{
      path: '/',
      component: Content
    }, {
      path: '/good',
      component: Change1
    }
    , {
      path: '/share',
      component: Change2
    }
    , {
      path: '/ask',
      component: Change3
    }
    , {
      path: '/job',
      component: Change4
    },
    {
      path: '/dev',
      component: Change5
    }

    ]
  }



]
let replace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location) {
  return replace.call(this, location).catch(err => { })
}

const router = new VueRouter({
  routes
})

export default router
