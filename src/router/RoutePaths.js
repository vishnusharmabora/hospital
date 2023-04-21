import CareateDepartment from "../pages/private/dashboard/createDepartment/CareateDepartment";

import department from "../pages/private/dashboard/department";
import CreateDoctor from "../pages/private/dashboard/doctors/CreateDoctor";
import DoctorsList from "../pages/private/dashboard/doctors/DoctorsList";
import Home from "../pages/private/dashboard/Home";
import Login from "../pages/public/auth/Login";

export const routes = [
  {
    notLazy: true,
    path: "/",
    element: Home,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/login",
    element: Login,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/department-create",
    element: CareateDepartment,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/department-list",
    element: department,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/create-doctor",
    element: CreateDoctor,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/create-doctor/:did",
    element: CreateDoctor,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/doctor-list",
    element: DoctorsList,
    role: "public",
    name: "Home",
    subRouting: false,
  },

  //   {
  //     notLazy: true,
  //     path: "/templates/custom-template",
  //     element: "",
  //     role: "private",
  //     name: "Custom Template",
  //     subRouting: true,
  //     subRoute: [
  //       {
  //         notLazy: true,
  //         path: "core-customers",
  //         element: "",
  //         role: "private",
  //         name: "Custom Template",
  //       },
  //     ],
  //   },
];
