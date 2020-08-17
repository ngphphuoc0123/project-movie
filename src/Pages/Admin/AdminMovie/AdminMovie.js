import React, { useEffect, useReducer, Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect, useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { createAction } from "../../../Redux/Action/Action";
import { FETCH_USER_EDIT, FETCH_USER_LIST, FETCH_MOVIE_EDIT } from "../../../Redux/Action/Type";
import Search from "../Search";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import { adminService, movieService } from "../../../API";
import MovieItem from "./MovieItem";
import ModalMovie from "./ModalMovie";

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

function AdminMovie() {
  const [keyword, setKeyWord] = React.useState([]);
  const key = useSelector((state) => state.AdminReducer.keyword);
  const dispatch = useDispatch();
  const [listMovie, setListMovie] = React.useState([]);

  // lấy value của ô search
  useEffect(() => {
    setKeyWord(key);
  }, [key]);

  // fetch danh sách user
  useEffect(() => {
    movieService
      .fetchListMovieAPI()
      .then((rs) => {
        setListMovie(rs.data)      })
      .catch((err) => {
        console.log(err);
      });
  }, [listMovie]);

  const classes = useStyles();

  const handleEdit = (value) => {
    dispatch(createAction(FETCH_MOVIE_EDIT, value));
  };
  const renderTable = () => {
      const movieSearch = listMovie?.filter((movie) => {
        if (keyword !== null) {
          return (
            movie.tenPhim?.toLowerCase().indexOf(keyword?.toLowerCase()) !== -1
          );
        } else {
          return movie;
        }
      });

      return movieSearch.map((item, index) => {
        return (
          <MovieItem movie={item} key={index} handleEdit={handleEdit} />
        );
      });
  };

  return (
    <div className="adminUser">
      <div className="title">
        <TheatersRoundedIcon classname="icon-icon" />
        <p lassName="icon-text">Quản Lý Phim</p>
      </div>
      <Search />
      <ModalMovie />
      <div
        className="btn"
        onClick={() => handleEdit(null)}
        data-toggle="modal"
        data-target="#modelIdMovieRedux"
      >
        THÊM PHIM MỚi
        <AddIcon />
      </div>
      <TableContainer component={Paper} className='scroll'>
        <Table className={classes.table}  stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã Phim</StyledTableCell>
              <StyledTableCell align="center">Tên Phim</StyledTableCell>
              <StyledTableCell align="center">Trailer</StyledTableCell>
              <StyledTableCell align="center">Bí Danh</StyledTableCell>
              <StyledTableCell align="center">Đánh Giá</StyledTableCell>
              <StyledTableCell align="center">Ngày Khởi Chiếu</StyledTableCell>
              <StyledTableCell align="center">Hình Ảnh</StyledTableCell>
              <StyledTableCell align="center">
                Mô Tả
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


export default connect()(AdminMovie);
