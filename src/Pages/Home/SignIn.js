import React, { Component } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import {  signInUserSchema } from "../../API/UserAPI";
import { connect } from "react-redux";
import { actCheckSignInUser } from "../../Redux/Action/UserAction";
import { Redirect, Link } from "react-router-dom";

class SignIn extends Component {

  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        validationSchema={signInUserSchema}
        onSubmit={(values) => {
          this.props.dispatch(actCheckSignInUser(values,this.props.history));
          
        }}
        render={({ handleChange }) => (
          <Form className="signIn ">
            <div className="signInBox">
              <h1>Sign In</h1>
              <div className="form-group">
                <label>Tài Khoản</label>
                <Field
                  type="text"
                  name="taiKhoan"
                  onChange={handleChange}
                  className="form-control"
                />
                 <ErrorMessage name="taiKhoan">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật Khẩu</label>
                <Field
                  type="password"
                  name="matKhau"
                  onChange={handleChange}
                  className="form-control"
                />
                 <ErrorMessage name="matKhau">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
              </div>
              <button className="button">Đăng Nhập</button>
              <button className="button">
                <Link className="button" to="/signup">
                  Chưa có tài khoản?? - Đăng ký
                </Link>
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}
export default connect()(SignIn);
