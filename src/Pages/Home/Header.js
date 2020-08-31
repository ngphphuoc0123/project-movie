import React, { Component, Fragment } from "react";
import logo from "../../img/cinehub.jpg";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Action/Action";
import { FETCH_CREDENTIAL } from "../../Redux/Action/Type";
import UserInfo from "./UserInfo";

class Header extends Component {
  renderNavbarItem = () => {
    let { navbar } = this.props;
    switch (navbar) {
      case "movieDetail":
        return (
          <Fragment>
            <li className="nav-item">
              <Link to="../" className="nav-link" href="#">
                Trang Chủ
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#table">
                Thông Tin Phim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#table">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item nav-right">
              {this.props.credential ? (
                <Fragment>
                  {/* <i className="fas fa-user-circle" /> */}
                  <p
                    type="button"
                    className="nav-right-login"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Hi, {this.props.credential.hoTen}{" "}
                  </p>
                  <p
                    className="logOut"
                    onClick={() => {
                      this.props.cancelUser();
                    }}
                  >
                    Thoát
                  </p>
                </Fragment>
              ) : (
                <>
                  <div>
                    {/* <i className="fas fa-user-circle" /> */}
                    <Link to="/signin">Đăng Nhập</Link>
                  </div>
                </>
              )}
            </li>
          </Fragment>
        );
        break;

      default:
        return (
          <Fragment>
            <li className="nav-item">
              <a className="nav-link" href="#listFilm">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cinema">
                Cụm Rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#appHomeControl">
                Tin Tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#appHomeControl">
                Ứng Dụng
              </a>
            </li>
            <li className="nav-item nav-right">
              {this.props.credential ? (
                <>
                  {/* <i className="fas fa-user-circle" /> */}
                  <p
                    type="button"
                    className="nav-right-login"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Hi, {this.props.credential.hoTen}{" "}
                  </p>
                  <p
                    className="logOut"
                    onClick={() => {
                      this.props.cancelUser();
                    }}
                  >
                    Thoát
                  </p>
                </>
              ) : (
                <>
                  {/* <i className="fas fa-user-circle" /> */}
                  <Link to="/signin">Đăng Nhập</Link>
                </>
              )}
            </li>
          </Fragment>
        );
        break;
    }
  };
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">{this.renderNavbarItem()}</ul>
          </div>
          {/* modal lịch sử đặt vé */}
        </nav>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal body */}
              <div className="modal-body">
                <UserInfo />
              </div>
              {/* Modal footer */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  credential: state.UserReducer.credential,
});
const mapDispatchToProps = (dispatch) => {
  return {
    cancelUser: () => {
      dispatch(createAction(FETCH_CREDENTIAL, ""));
      localStorage.clear();
    },
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
