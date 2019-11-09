import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Skills from '@/components/pages/Skills'
import ProjectsList from '@/components/pages/ProjectsList'
import Contact from '@/components/pages/Contact'
import Project from '@/components/pages/Project'
import Portfolio from '@/components/pages/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/o-mnie',
      name: 'About',
      component: About
    },
    {
      path: '/umiejetnosci',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:name',
      component: ProjectsList,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          component: Project,
          name: 'portfolio.home',
          path: ''
        }
      ]
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    }
  ]
})
