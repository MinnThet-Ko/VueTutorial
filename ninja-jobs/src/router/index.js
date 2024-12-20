import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobView from '@/views/jobs/JobView.vue'
import JobDetailView from '@/views/jobs/JobDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }, 
  {
    path: "/jobs",
    name: "jobs",
    component: JobView
  },
  {
    path: "/jobs/:id",
    name: "jobsDetail",
    component: JobDetailView,
    props: true
  },
  {
    path: "/all-jobs",
    redirect: "/jobs"
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
