import React, { useEffect, Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { connect, useDispatch } from "react-redux";
import { adminService } from "../../../API";
import { createAction } from "../../../Redux/Action/Action";
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

  const handleDelete = (movie) => {
    let admin = JSON.parse(localStorage.getItem("Admin"));
    console.log(admin.accessToken);
    adminService
      .deleteMovieAPI(movie.maPhim, admin.accessToken)
      .then((rs) => {
        Swal.fire("Xóa Phim Thành Công !!", "", "success");
      })
      .catch((err) => {
        Swal.fire("Xóa Phim Thất Bại !!", err.response.data, "error");
      });
  };
  const movie = props.movie;
  return (
    <Fragment>
      <TableRow>
        <StyledTableCell>{movie.maPhim}</StyledTableCell>
        <StyledTableCell align="center">{movie.tenPhim}</StyledTableCell>
        <StyledTableCell align="center">{movie.trailer}</StyledTableCell>
        <StyledTableCell align="center">{movie.biDanh}</StyledTableCell>
        <StyledTableCell align="center">{movie.danhGia}</StyledTableCell>
        <StyledTableCell align="center">{movie.ngayKhoiChieu}</StyledTableCell>
        <StyledTableCell align="center">
          <img src={movie.hinhAnh} style={{ width: "50px" }} alt />
        </StyledTableCell>
        <StyledTableCell align="center">{movie.moTa}</StyledTableCell>
        <StyledTableCell align="center">
          <div
            className="edit"
            data-toggle="modal"
            data-target="#modelIdMovieRedux"
            onClick={() => {
              props.handleEdit(movie);
            }}
          >
            <EditIcon />
          </div>
        </StyledTableCell>
        <StyledTableCell align="center" className="">
          <div
            className="del"
            onClick={() => {
              Swal.fire({
                title: "Bạn Chắc Chắn Muốn Xóa Phim Này chứ?",
                text: "Phim sẽ bị xóa vĩnh viễn khỏi danh sách phim  !!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xóa",
                cancelButtonText: 'Hủy'
              }).then((result) => {
                if (result.value) {
                  handleDelete(movie);
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
