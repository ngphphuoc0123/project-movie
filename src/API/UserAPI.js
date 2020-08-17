import * as yup from "yup";
import Axios from "axios";

class UserService {
  signUpAPI(data) {
    return Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
  signInAPI(user) {
    return Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
  getUserInfo(user) {
    return Axios({
      method:"POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: user
      }
    })
  }

}

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Tài khoản không được để trống"),
  matKhau: yup.string().required("*Mật khẩu không được để trống"),
  hoTen: yup.string().required("*Họ tên không được để trống"),
  email: yup
    .string()
    .required("*Email không được để trống")
    .email("*Không đúng định dạng email"),
  soDT: yup
    .string()
    .required("*Số điện thoại không được để trống")
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("*Mã nhóm không được để trống"),
});

export const signInUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Tài khoản không được để trống"),
  matKhau: yup.string().required("*Mật khẩu không được để trống"),
});
export default UserService;
