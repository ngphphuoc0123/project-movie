import React, { useEffect, Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { connect, useDispatch } from "react-redux";
import { adminService } from "../../../API";
import Swal from "sweetalert2";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
function UserItem(props) {
  const dispatch = useDispatch();

  const handleDelete = (user) => {
    console.log(user);
    let admin = JSON.parse(localStorage.getItem("credentials"));
    adminService
      .fetchDeleteUserAPI(user.taiKhoan, admin.accessToken)
      .then((rs) => {
        Swal.fire("Xóa Người Dùng Thành Công !!", "", "success");
      })
      .catch((err) => {
        Swal.fire("Xóa Người Dùng Thất Bại !!", err.response.data, "error");
      });
  };
  const user = props.user;
  return (
    <Fragment>
      <TableRow>
        <StyledTableCell>{user.hoTen}</StyledTableCell>
        <StyledTableCell align="center">{user.taiKhoan}</StyledTableCell>
        <StyledTableCell align="center">{user.matKhau}</StyledTableCell>
        <StyledTableCell align="center">{user.email}</StyledTableCell>
        <StyledTableCell align="center">{user.soDt}</StyledTableCell>
        <StyledTableCell align="center">{user.maLoaiNguoiDung}</StyledTableCell>
        <StyledTableCell align="center">
          <div
            className="edit"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick={() => {
              props.handleEdit(user);
            }}
          >
            <EditIcon />
          </div>
        </StyledTableCell>
        <StyledTableCell align="center">
          <div
            className="del"
            onClick={() => {
              Swal.fire({
                title: "Bạn Chắc Chắn Muốn Xóa Người Dùng Này chứ?",
                text: "Người dùng sẽ bị xóa vĩnh viễn khỏi trang  !!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xóa",
                cancelButtonText: 'Hủy'

              }).then((result) => {
                if (result.value) {
                  handleDelete(user);
                }
              });
            }}
          >
            <DeleteIcon />
          </div>
        </StyledTableCell>
      </TableRow>
    </Fragment>
  );
}

export default connect()(UserItem);
