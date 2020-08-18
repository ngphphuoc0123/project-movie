import React, { Component } from "react";
import "./scss/index.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import { routesHome, routesAdmin } from "./routes"; // có ngoặc nhọn là do export ko default
import { connect } from "react-redux";
import { createAction } from "./Redux/Action/Action";
import { FETCH_CREDENTIAL } from "./Redux/Action/Type";

class App extends Component {
  showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
        {this.showMenuHome(routesHome)}
        {this.showMenuAdmin(routesAdmin)}

          {/* <Route path="/signup" exact component={SignUp} />
          <Route path="/detail/:movieId" exact component={MovieDetail} />
          <Route path="/" exact component={HomeScreens} />*/}
        {/* <Route path="/booking/:maLichChieu" exact component={Booking} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialFromLocal = () => {
    const credentialStr = localStorage.getItem("credentials");
    if (credentialStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIAL, JSON.parse(credentialStr))
      );
    }
  };
  componentDidMount() {
    this._getCredentialFromLocal();
  }
}

export default connect()(App);
