import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCourse from '../views/AddCourse.vue'
import EditCourse from '../views/EditCourse.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nou',
    name: 'addCourse',
    component: AddCourse
  },
  {
    path: '/editar/:id',
    name: 'editCourse',
    component: EditCourse
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
