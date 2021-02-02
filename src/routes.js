import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Project from "./pages/Project.js";

var routes = [
  
  {
    path: "/home",
    name: "Home",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/admin",
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    layout: "/admin",
  },
 
];
export default routes;
