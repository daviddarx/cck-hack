import Home from './components/pages/home.vue';
import About from './components/pages/about.vue';
import Projects from './components/pages/projects.vue';
import ProjectDetail from './components/pages/project-detail.vue';

import contents from './contents';

//basic routes
let routes = [
  {
    label: 'Home',
    path: '/',
    name: 'home',
    component: Home,
    meta: { pageTitle: 'Home' }
  },
  {
    label: 'About',
    path: '/about',
    name: 'about',
    component: About,
    meta: { pageTitle: 'About' }
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    name: 'portfolio',
    component: Projects,
    meta: { pageTitle: 'Projekte' }
  },
];

// //dynamically create routes for projects
contents.projectsList.forEach((project, i) => {
  routes.push(
    {
      label: project.uuid,
      path: '/portfolio/'+project.uuid,
      name: project.uuid,
      component: ProjectDetail,
      meta: {
        content:project,
        id: i,
        isNavHidden: true
      }
    }
  );
});


export default routes;
