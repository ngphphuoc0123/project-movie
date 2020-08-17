import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { adminService } from "../../../API";
import Swal from "sweetalert2";

export default function ModalUser() {
  const [user, setUser] = React.useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
  });

  const userEdit = useSelector((state) => state.AdminReducer.userEdit);

  useEffect(() => {
    if (userEdit) {
      setUser(userEdit);
    } else {
      setUser({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "KhachHang",
      });
    }
  }, [userEdit]);

  const handleChange = (event) => {
    const ten = event.target.name; // ham nay nhận ten của mỗi thằng
    const giaTriNhap = event.target.value;
    setUser({
      ...user,
      [ten]: giaTriNhap, // được viết theo cách multi [tên gán cho hàm event.target.name]: tên gán cho event.target.value
    });
  };

  const _handleEdit = (event) => {
    let admin = JSON.parse(localStorage.getItem("credentials"));
    let userEdit = { ...user, maNhom: "GP04" };

    adminService
      .editUserAPI(userEdit, admin.accessToken)
      .then((rs) => {
        Swal.fire(
          "Thành Công",
          "Thay Đổi Thông Tin Người Dùng Thành Công!",
          "success"
        );
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire("Thay Đổi Thông Tin Thất Bại !!", err.response.data, "error");
      });
  };
  const _handleAdd = (event) => {
    event.preventDefault();
    let admin = JSON.parse(localStorage.getItem("credentials"));
    let userAdd = { ...user, maNhom: "GP04" };

    adminService
      .addUserAPI(userAdd, admin.accessToken)
      .then((rs) => {
        Swal.fire("Thêm Người Dùng Thành Công !!", "", "success")
        })
      .catch((error) => {
        Swal.fire("Thêm Người Dùng Thất Bại !!", error.response.data, "error");
      });
  };
  return (
    <div
      className="modal fade"
      id="modelIdUserRedux"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {userEdit ? "EDIT USER" : "ADD USER"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={{ user }}
              render={(formikProps) => {
                return (
                  <Form onSubmit={userEdit ? _handleEdit : _handleAdd}>
                    <div className="form-group">
                      <label>Tài Khoản</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="taiKhoan"
                        onChange={handleChange}
                        value={user.taiKhoan}
                      />
                    </div>
                    {userEdit ? null : (
                      <div className="form-group">
                        <label>Mật Khẩu</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="matKhau"
                          onChange={handleChange}
                          value={user.matKhau}
                        />
                      </div>
                    )}
                    <div className="form-group">
                      <label>Họ Và Tên</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="hoTen"
                        onChange={handleChange}
                        value={user.hoTen}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Số Điện Thoại</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="soDt"
                        onChange={handleChange}
                        value={user.soDt}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mã Loại Người Dùng</label>
                      <Field
                        selected
                        component="select"
                        className="form-control"
                        name="maLoaiNguoiDung"
                        onChange={handleChange}
                        value={user.maLoaiNguoiDung}
                      >
                        <option value="KhachHang">Khách Hàng</option>
                        <option value="QuanTri">Quản Trị</option>
                      </Field>
                    </div>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </Form>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// bấm vô nút submit (đây là 1 action), action này sẽ bắn vô store bằng cách dispatch = hàm dispatcth bên dưới, xong phải connect (phải import ==> connect)
// nhưng bắn cái gì ??? bắn user, thì user ở đâu ra, user là cái modal khi mình nhập thông tin vào, làm sao biết khi nào thì action ==> khi bấm submit, thì ngay submit phải có cái hàm
