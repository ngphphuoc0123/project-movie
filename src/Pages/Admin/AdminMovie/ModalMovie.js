import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Formik, input, Form, Field } from "formik";
import Swal from "sweetalert2";

import { adminService } from "../../../API";
// import * as action from "./../../Redux/Action"

function ModalUser() {
  const [movie, setMovie] = React.useState({
    tenPhim: "",
    maPhim: "",
    trailer: "",
    biDanh: "",
    danhGia: "",
    ngayKhoiChieu: "",
    hinhAnh: "",
    moTa: "",
  });

  const movieEdit = useSelector((state) => state.AdminReducer.movieEdit);

  useEffect(() => {
    if (movieEdit) {
      setMovie(movieEdit);
    } else {
      setMovie({
        tenPhim: "",
        maPhim: "",
        trailer: "",
        biDanh: "",
        danhGia: "",
        ngayKhoiChieu: "",
        hinhAnh: "",

        moTa: "",
      });
    }
  }, [movieEdit]);
  const handleChange = (e) => {
    const ten = e.target.name; // ham nay nhận ten của mỗi thằng
    const giaTriNhap = e.target.value;
    if (ten === "hinhAnh") {
      setMovie(
        { ...movie, hinhAnh: e.target.files[0] },
        console.log("hinhAnh", e.target.files[0])
      );
    } else {
      setMovie(
        {
          ...movie,
          [ten]: giaTriNhap, // được viết theo cách multi [tên gán cho hàm event.target.name]: tên gán cho event.target.value
        },
        console.log([ten], giaTriNhap)
      );
    }
  };
  const _handleEdit = (event) => {
    event.preventDefault();
    var formDataEdit = new FormData();
    console.log(movie);
    const admin = JSON.parse(localStorage.getItem("credentials"));
    let movieEdit = { ...movie, maNhom: "GP06" };

    for (const key in movieEdit) {
      formDataEdit.append(key, movieEdit[key]);
    }

    adminService
      .editMovieAPI(formDataEdit, admin.accessToken)
      .then((rs) => {
        Swal.fire("Sửa Thông Tin Thành Công !!", "", "success")      })
      .catch((err) => {
        Swal.fire("Sửa Thông Tin Thất Bại !!", err.response.data, "error");
      });
  };
  const _handleAddUser = (event) => {
    event.preventDefault();
    var formDataAdd = new FormData();

    let admin = JSON.parse(localStorage.getItem("credentials"));
    let movieAdd = { ...movie, maNhom: "GP06" };

    for (const key in movieAdd) {
      formDataAdd.append(key, movieAdd[key]);
    }
    adminService
      .addMovieAPI(formDataAdd, admin.accessToken)
      .then((rs) => {
        console.log(rs);
        Swal.fire("Thêm Phim Thành Công !!", "", "success")     
      })
      .catch((error) => {
        console.log(error.response.data);
        Swal.fire("Thêm Phim Thất Bại !!", error.response.data, "error");
      });
  };
  return (
    <div
      className="modal fade"
      id="modelIdMovieRedux"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {movieEdit ? "SỬA PHIM" : "THÊM PHIM MỚI"}
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
              initialValues={{ movie }}
              render={(formikProps) => {
                return (
                  <Form onSubmit={movieEdit ? _handleEdit : _handleAddUser}>
                    <div className="form-group">
                      <label>Mã Phim</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="maPhim"
                        onChange={handleChange}
                        value={movie.maPhim}
                      />
                    </div>
                    <div className="form-group">
                      <label>Tên phim</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="tenPhim"
                        onChange={handleChange}
                        value={movie.tenPhim}
                      />
                    </div>
                    <div className="form-group">
                      <label>Trailer</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="trailer"
                        onChange={handleChange}
                        value={movie.trailer}
                      />
                    </div>
                    <div className="form-group">
                      <label>Bí Danh</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="biDanh"
                        onChange={handleChange}
                        value={movie.biDanh}
                      />
                    </div>
                    <div className="form-group">
                      <label>Đánh Giá</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="danhGia"
                        onChange={handleChange}
                        value={movie.danhGia}
                      />
                    </div>
                    <div className="form-group">
                      <label>Ngày Khởi Chiếu</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="ngayKhoiChieu"
                        onChange={handleChange}
                        value={movie.ngayKhoiChieu}
                      />
                    </div>
                    <div className="form-group">
                      <label>Hình Ảnh</label>
                      <Field
                        type="file"
                        name="hinhAnh"
                        className="form-control"
                        // accept={movie.hinhAnh}
                        onChange={handleChange}
                        // defaultValue={hinhAnh(movie)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mô Tả</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="moTa"
                        onChange={handleChange}
                        value={movie.moTa}
                      />
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

export default connect()(ModalUser);
