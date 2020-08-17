import React, { useEffect,  } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import UserItem from "./UserItem";
import { connect, useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { createAction } from "../../../Redux/Action/Action";
import { FETCH_USER_EDIT } from "../../../Redux/Action/Type";
import Search from "../Search";
import ModalUser from "./ModalUser";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { adminService } from "../../../API";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function AdminUser() {
  const [keyword, setKeyWord] = React.useState([]);
  const key = useSelector((state) => state.AdminReducer.keyword);
  const dispatch = useDispatch();
  const [listUser, setListUser] = React.useState([]);

  // lấy value của ô search
  useEffect(() => {
    setKeyWord(key);
  }, [key]);

  // fetch danh sách user
  useEffect(() => {
    adminService
      .fetchListUserAPI()
      .then((rs) => {
        setListUser(rs.data);
      })
      .catch((err) => console.log(err));
  }, [listUser]);

  const classes = useStyles();

  const handleEdit= (value) => {
    dispatch(createAction(FETCH_USER_EDIT, value));
  };
  const renderTable = () => {
      const userSearch = listUser?.filter((user) => {
        if (keyword !== null) {
          return (
            user.hoTen?.toLowerCase().indexOf(keyword?.toLowerCase()) !== -1
          );
        } else {
          return user;
        }
      });

      return userSearch.map((item, index) => {
        return (
          <UserItem user={item} key={index} handleEdit={handleEdit} />
        );
      });
  };

  return (
    <div className="adminUser">
      <div className="title">
        <AccountCircleRoundedIcon classname="icon-icon" />
        <p lassName="icon-text">Quản Lý Người Dùng</p>
      </div>
      <Search />
      <ModalUser/>
      <div
        className="btn"
        onClick={() => handleEdit(null)}
        data-toggle="modal"
        data-target="#modelIdUserRedux"
      >
        Add User
        <AddIcon />
      </div>
      <TableContainer component={Paper} className='scroll'>
        <Table className={classes.table}  stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên</StyledTableCell>
              <StyledTableCell align="center">Tài Khoản</StyledTableCell>
              <StyledTableCell align="center">Mật Khẩu</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Số ĐT</StyledTableCell>
              <StyledTableCell align="center">
                Mã Loại Người Dùng
              </StyledTableCell>
              <StyledTableCell align="center">Sửa</StyledTableCell>
              <StyledTableCell align="center">Xóa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody >{renderTable()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default connect()(AdminUser);
