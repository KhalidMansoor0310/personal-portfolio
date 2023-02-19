import Index from "views/Index.js";
import Profile from "views/Profile.js";

import Education from "views/Education";
import Projects from "views/Projects";
import Services from "views/Services";
import Contact from "views/Contact";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-white",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Services",
    icon: "ni ni-planet text-white",
    component: Services,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Experience",
    icon: "ni ni-satisfied text-white",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Education",
    icon: "ni ni-hat-3 text-white",
    component: Education,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Projects",
    icon: "ni ni-bullet-list-67 text-white",
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/contact",
    name: "Contact",
    icon: "ni ni-bell-55 text-white",
    component: Contact,
    layout: "/admin",
  },
];
export default routes;
