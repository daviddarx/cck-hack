import * as home from '../content/home/home.json';
import * as about from '../content/about/about.json';
import * as projects from '../content/projects/projects.json';
import * as projectsList from '../content/projects/projects/*.json';
delete projectsList.default;

export default {
  home: home,
  about: about,
  projects: projects,
  projectsList: Object.keys(projectsList).map(objKey => projectsList[objKey]).sort((e1, e2) =>
    new Date(e2.date) - new Date(e1.date)
  )
};
