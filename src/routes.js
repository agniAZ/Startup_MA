import Home from "./pages/Home.js";
import About from "./pages/About.js";

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
 
];
export default routes;
