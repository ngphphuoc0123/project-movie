import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AdminNavbar from "../Pages/Admin/AdminNavbar";
import Swal from "sweetalert2";

//Component AdminLayout
const AdminLayout = (props) => {
  return (
    <div className='adminAdmin'>
      <AdminNavbar/>
      {props.children}
    </div>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("Admin")) {
          localStorage.removeItem('admin')

          //trường hợp đã login
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else if (localStorage.getItem("credentials")) {
          //Chưa Login
          Swal.fire("Bạn Không Phải Là Quản Trị Viên !!", '', "error")
          return <Redirect to="/" />;
        } else {
          Swal.fire("Bạn Phải Đăng Nhập Để Được Vào Quyền Admin !!", '', "error")
          //set admin để nhận biết đang đăng nhập vào quyền admin, nếu là admin thì đẩy qua /admin, nếu là user thì đẩy qua /home
          localStorage.setItem('admin',123)
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}
