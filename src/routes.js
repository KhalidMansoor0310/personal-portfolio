import Index from "views/Index.js";
import Profile from "views/Profile.js";

import Education from "views/Education";
import Projects from "views/Projects";
import Services from "views/Services";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Services",
    icon: "ni ni-planet text-blue",
    component: Services,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Experince",
    icon: "ni ni-pin-3 text-orange",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Education",
    icon: "ni ni-single-02 text-yellow",
    component: Education,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Projects",
    icon: "ni ni-bullet-list-67 text-red",
    component: Projects,
    layout: "/admin",
  },
];
export default routes;
