import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div className="adminNavbar">
      <h1 align="center" className="title">
        Chức năng hệ thống
      </h1>
      <div className="userInfo">
        <div className="icon">
          <AccountCircleRoundedIcon classname="icon-icon" />
          <Link to="/adminUser" className="icon-text">
            Quản Lý Người Dùng
          </Link>
        </div>
        <div className="icon">
          <TheatersRoundedIcon classname="icon-icon" />
          <Link to='/adminMovie'className="icon-text">Quản Lý Phim</Link>
        </div>
      </div>
    </div>
  );
}
