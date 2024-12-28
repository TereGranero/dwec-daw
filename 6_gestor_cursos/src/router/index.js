import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AddCourse from '../views/AddCourse.vue';
import EditCourse from '../views/EditCourse.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/nou', 
    name: 'AddCourse', 
    component: AddCourse 
  },
  { 
    path: '/editar/:id', 
    name: 'EditCourse', 
    component: EditCourse, 
    props: true  
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
