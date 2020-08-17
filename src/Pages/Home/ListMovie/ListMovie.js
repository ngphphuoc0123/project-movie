import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MovieItems from "./MovieItems/MovieItems";
import { fetchMovie } from "../../../Redux/Action/MovieAction";
import ListRap from "../ListRap/ListRap";
import Slider from "react-slick";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      dangChieu: true,
      onClickDangChieu: false,
      onClickSapChieu: false,
      trailer: "",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  trailer = (trailer) => {
    if (trailer) {
      this.setState({ trailer });
    }
  };
  renderFilm = () => {
    let { listMovie } = this.props;

    return listMovie.map((movie, index) => {
      return <MovieItems key={index} item={movie} trailer={this.trailer} />;
    });
  };

  settings = () => {
    if (this.state.width > 375) {
      return {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        slidesPerRow: 2,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2900,
      };
    } else {
      return {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 2,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2900,
      };
    }
  };
  render() {
    console.log(this.trailer());
    const settings = this.settings();
    return (
      <Fragment>
        <div className="modal" id="Trailer">
          <div className="modal-dialog">
            <div className="modal-content">
              
                <iframe
                  width="1000"
                  height="600"
                  src={this.state.trailer}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              
            </div>
          </div>
        </div>
        <div id="listFilm">
          <div class="listFilmMenu">
            <ul>
              <li>
                <a  
                  href=""
                  className={`${this.state.onClickDangChieu ? "active" : null}`}
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      onClickDangChieu: true,
                      onClickSapChieu: false,
                      dangChieu: true,
                    });
                  }}
                >
                  Đang Chiếu
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={`${this.state.onClickSapChieu ? "active" : null}`}
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      onClickDangChieu: false,
                      onClickSapChieu: true,
                      dangChieu: false,
                    });
                  }}
                >
                  Sắp Chiếu
                </a>
              </li>
            </ul>
          </div>
          <div className="listFilmContent">
            <div className="container">
              <Slider {...settings}>{this.renderFilm()}</Slider>
            </div>
          </div>
        </div>
        <ListRap />
      </Fragment>
    );
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.props.dispatch(fetchMovie());
  }

  // lấy realtime của window width
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}

const mapStateToProps = (state) => ({
  listMovie: state.MovieReducer.listMovie,
});

export default connect(mapStateToProps)(ListMovie);
