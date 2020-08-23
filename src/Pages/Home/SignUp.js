import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userService } from "../../API";
import { signupUserSchema } from "../../API/UserAPI";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actCheckSignInUser } from "../../Redux/Action/UserAction";
import Swal from "sweetalert2";

class SignUp extends Component {
  _handleSubmit = (values) => {
    userService
      .signUpAPI(values)
      .then((res) => {
        Swal.fire("Đăng Kí Thành Công !!", "", "success").then(() => {
          this.props.dispatch(actCheckSignInUser(res.data, this.props.history));
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Đăng Kí Thất Bại !!", err.response.data, "error");
      });
  };
  render() {
    return (
      <div className="signUp">
        <div className="signUpBox">
          <h1 className="text-center">Sign Up</h1>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              email: "",
              soDT: "",
              maLoaiNguoiDung: "KhachHang",
              maNhom: "GP01",
            }}
            validationSchema={signupUserSchema}
            onSubmit={this._handleSubmit}
            render={(formikProps) => (
              <Form>
                <div className="form-group">
                  <label>Tài Khoản: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="taiKhoan">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Mật Khẩu: </label>
                  <Field
                    type="password"
                    className="form-control"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="matKhau">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Họ tên: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Email: </label>
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Số điện thoại: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="soDT"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {() => (
                      <div className="alert alert-danger">
                        *Số điện thoại phải là số
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Mã nhóm: </label>
                  <Field
                    component="select"
                    className="form-control"
                    name="maNhom"
                    onChange={formikProps.handleChange}
                  >
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                    <option>GP04</option>
                    <option>GP05</option>
                    <option>GP06</option>
                    <option>GP07</option>
                    <option>GP08</option>
                    <option>GP09</option>
                    <option>GP10</option>
                  </Field>
                </div>
                <div className="text-center">
                  <button className="button">Submit</button>
                </div>
                <div className="text-center button">

                  <Link to="/" className="button">
                    Back To Home
                  </Link>
                </div>
                <div className="text-center button">
                  <Link to="/" className="button">
                    Sign In
                  </Link>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}
export default connect()(SignUp);
