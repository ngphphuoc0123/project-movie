import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Home/SignUp";
import MovieDetail from "./Pages/Home/MovieDetail/MovieDetail";
import Booking from "./Pages/Home/Booking/Booking";
import SignIn from "./Pages/Home/SignIn";
import AdminUser from "./Pages/Admin/AdminUser/AdminUser";
import AdminMovie from "./Pages/Admin/AdminMovie/AdminMovie";

const routesHome = [
  {
    path: "/detail/:movieId",
    exact: true,
    component: MovieDetail,
  },
  {
    path: "/booking/:maLichChieu",
    exact: false,
    component: Booking,
  },
  {
    path: "/signup",
    exact: false,
    component: SignUp,
  },
  ,
  {
    path: "/signin",
    exact: false,
    component: SignIn,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];
const routesAdmin = [
  {
    path: "/admin",
    exact: false,
    component: AdminUser,
  },
  {
    path: "/adminUser",
    exact: false,
    component: AdminUser,
  },
  {
    path: "/adminMovie",
    exact: false,
    component: AdminMovie,
  },
];
export { routesAdmin, routesHome };
