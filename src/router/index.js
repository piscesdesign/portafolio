import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import MainView from '../views/projects/MainView.vue'
import SingularView from '../views/projects/SingularView.vue'
import FlowersView from '../views/projects/FlowersView.vue'
import BeauteView from '../views/projects/BeauteView.vue'
import ConvictView from '../views/projects/ConvictView.vue'
import ContactView from '../views/ContactView.vue'
import Error404View from '../views/Error404View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Inicio'
    }
  },
  {
    path: '/acerca',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'Acerca de mí'
    }
  },
  {
    path: '/proyectos',
    name: 'proyects',
    component: ProjectsView,
    children: [
      {
        path: '',
        name: 'main',
        component: MainView,
        meta: {
          title: 'Proyectos'
        }
      },
      {
        path: 'singular-euforia',
        name: 'singular',
        component: SingularView,
        meta: {
          title: 'Singular Euforia'
        }
      },
      {
        path: 'wild-flower',
        name: 'flowers',
        component: FlowersView,
        meta: {
          title: 'Wild Flower'
        }
      },
      {
        path: 'convict-history',
        name: 'convict',
        component: ConvictView,
        meta: {
          title: 'Convict History'
        }
      },
      {
        path: 'beaute-volcanique',
        name: 'beaute',
        component: BeauteView,
        meta: {
          title: 'Beaute Volcanique'
        }
      }
    ]
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contacto'
    }
  },
  {
    path: '*',
    name: 'error',
    component: Error404View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  setTimeout(() => document.title = 'Pisces | ' + (to.meta?.title || '404'), 800);
  next();
  return;
});

export default router
