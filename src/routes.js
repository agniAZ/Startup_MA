import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Project from "./pages/Project.js";
import Survey from "./pages/Survey.js";

import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

	
var routes = [
  
  {
    path: "/home",
    name: "Home",
    component: Home,
    icon: faHouseUser,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    component: About,
    icon: faInfoCircle,
    layout: "/admin",
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    icon: faWarehouse,
    layout: "/admin",
  },
  {
    path: "/survey",
    name: "Survey",
    component: Survey,
    icon: faClipboardList,
    layout: "/admin",
  },
 
];
export default routes;
