import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SSQ from '@/components/SSQ'
import QLC from '@/components/QLC'
import FC3D from '@/components/FC3D'
import K10 from '@/components/K10'

Vue.use(Router)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/ssq', name: 'SSQ', component: SSQ},
  {path: '/qlc', name: 'QLC', component: QLC},
  {path: '/fc3d', name: 'FC3D', component: FC3D},
  {path: '/k10', name: 'k10', component: K10}
]

export default new Router({
  routes: routes
})
