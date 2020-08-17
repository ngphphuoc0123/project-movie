import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Modal from "@material-ui/core/Modal";
import { actGetUserInfo } from "../../Redux/Action/UserAction";
import { connect } from "react-redux";
import { userService } from "../../API";
import { Link } from "react-router-dom";

// set cho lich sử đặt vé
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: "500px",
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    left: "35%",
    top: "25%",
  },
}));

//render thông tin vé
function UserInfo(props) {
  // set cho modal chi tiết vé
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = React.useState(null);
  const [maVe, setMaVe] = React.useState(null);
  const [rap, setRap] = React.useState(null);
  // const [historyBooking, sethistoryBooking] = React.useState(null);

  useEffect(() => {
    let credentials = JSON.parse(localStorage.getItem("credentials"));
    userService
      //call API lấy userInfo
      .getUserInfo(credentials?.taiKhoan)
      .then((rs) => {
        setUser(rs.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (maVe) {
      let rap1 = user?.thongTinDatVe.find((item) => item.maVe === maVe);
      setRap(rap1);
    }
  }, [maVe]);
  //set modal chi tiết vé
  const renderBookingDetail = () => {
    if (rap) {
      return rap.danhSachGhe.map((item) => {
        return (
          <StyledTableRow key={item.maVe}>
            <StyledTableCell align="center" component="th" scope="row">
              {item.tenHeThongRap}
            </StyledTableCell>
            <StyledTableCell align="center">{item.tenRap}</StyledTableCell>
            <StyledTableCell align="center">{item.tenGhe}</StyledTableCell>
          </StyledTableRow>
        );
      });
    }
  };
  const body = (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Tên Rạp</StyledTableCell>
            <StyledTableCell align="center">Rạp</StyledTableCell>
            <StyledTableCell align="center">Số Ghế</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderBookingDetail()}</TableBody>
      </Table>
    </TableContainer>
  );

  const renderTable = () => {
    // console.log(localStorage.getItem("userInfo"));
    if (user) {
      return user.thongTinDatVe.map((item) => {
        const tongGiaVe = item.giaVe * item.danhSachGhe.length;
        const renderRap = item.danhSachGhe.map(
          (rap) => `${rap.tenHeThongRap} ${rap.maCumRap}`
        );
        let renderRapSort = [...new Set(renderRap)];

        return (
          <StyledTableRow key={item.maVe}>
            <StyledTableCell component="th" scope="row" align="center">
              {item.tenPhim}
            </StyledTableCell>
            <StyledTableCell align="center">{renderRapSort}</StyledTableCell>
            <StyledTableCell align="center">
              {item.danhSachGhe.length} vé
              <button
                className="btn"
                align="center"
                onClick={() => {
                  handleOpen();
                  setMaVe(item.maVe);
                }}
              >
                Chi Tiết
              </button>
            </StyledTableCell>
            <StyledTableCell align="center">
              {new Date(item.ngayDat).toLocaleDateString()}
            </StyledTableCell>
            <StyledTableCell align="center">{tongGiaVe}</StyledTableCell>

            {/* modal cho chi tiết vé */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </StyledTableRow>
        );
      });
    }
  };
  function BookingHistory() {
    return (
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          className={classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Tên Phim</StyledTableCell>
              <StyledTableCell align="center">Rạp</StyledTableCell>
              <StyledTableCell align="center">
                Số Lượng/ Danh Sách Ghế
              </StyledTableCell>
              <StyledTableCell align="center">Ngày Đặt </StyledTableCell>
              <StyledTableCell align="center">Tổng giá vé</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderTable()}</TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div className="userInformation" style={{ width: "100%" }}>
      <Grid container>
        <Grid className={classes.leftTable} item xs={12} sm={3}>
          <div>
            <h1 align="center" className="title">
              Thông tin
            </h1>
            <div className="userInfo">
              <p>Tên tài khoản: {user?.taiKhoan}</p>
              <p>Họ tên: {user?.hoTen}</p>
              <p>Email: {user?.email}</p>
              <p>Số ĐT: {user?.soDT}</p>
            </div>
          </div>
          <div className="text-center button" data-dismiss="modal">
            <Link to="/" className="button">
              Back To Home
            </Link>
          </div>
        </Grid>

        <Grid className={classes.rightTable} item xs={12} sm={9}>
          <h1 align="center" className="title-history">
            Lịch Sử Đặt Vé
          </h1>
          <BookingHistory />
        </Grid>
      </Grid>
    </div>
  );
}

export default connect()(UserInfo);
