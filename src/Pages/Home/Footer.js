import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import imgiphone from "../../img/iphone.png";
import car1 from "../../img/car1.jpg";
import car2 from "../../img/car2.jpg";
import car3 from "../../img/car3.jpg";
import car4 from "../../img/car4.jpg";
import car5 from "../../img/car5.jpg";
import car6 from "../../img/car6.jpg";
import car7 from "../../img/car7.jpg";
import car8 from "../../img/car8.jpg";
import car9 from "../../img/car9.jpg";
import car10 from "../../img/car10.jpg";
import car11 from "../../img/car11.jpg";
import cgv from "../../img/cgv.png";
import mega from "../../img/mega.png";
import beta from "../../img/beta.png";
import galaxy from "../../img/galaxy.png";
import bhd from "../../img/bhd.png";
import lotte from "../../img/lotte.png";
import dcine from "../../img/dcine.png";
import dongdacinema from "../../img/dongdacinema.png";
import touch from "../../img/touch.png";
import starlight from "../../img/starlight.png";
import zalopay from "../../img/zalopay.png";
import vietin from "../../img/vietin.png";
import vcb from "../../img/vcb.png";
import apple from "../../img/apple-logo.png";
import android from "../../img/android-logo.png";
import facebook from "../../img/facebook-logo.png";
import zalo from "../../img/zalo-logo.png";

export default class Footer extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2900,
    };
    return (
      <Fragment>
        <div className="appHomeControl" id='appHomeControl'>
          <div className="container">
            <div className="row">
              <div className="col-6 left">
                <p className="textLeft">
                  Ứng dụng tiện lợi dành cho <br />
                  người yêu điện ảnh
                </p>
                <p className="textSmallLeft">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <button className="btn btn-danger buttonLeft">
                  App miễn phí - Tải về ngay !
                </button>
                <p className="textAppUnder">
                  TIX có 2 phiên bản
                  <a href>IOS</a> &amp;
                  <a href>Android</a>
                </p>
              </div>
              <div className="col-6 right">
                <img src={imgiphone} alt="" />
                <div className="slickSlide">
                  <div className="single-item-rtl">
                    <Slider {...settings}>
                      <div>
                        <img src={car1} alt="" />
                      </div>
                      <div>
                        <img src={car2} alt="" />
                      </div>
                      <div>
                        <img src={car3} alt="" />
                      </div>
                      <div>
                        <img src={car4} alt="" />
                      </div>
                      <div>
                        <img src={car5} alt="" />
                      </div>
                      <div>
                        <img src={car6} alt="" />
                      </div>
                      <div>
                        <img src={car7} alt="" />
                      </div>
                      <div>
                        <img src={car8} alt="" />
                      </div>
                      <div>
                        <img src={car9} alt="" />
                      </div>
                      <div>
                        <img src={car10} alt="" />
                      </div>
                      <div>
                        <img src={car11} alt="" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container pdt20">
            <div className="row">
              <div className="col-4">
                <p className="tittle">TIX</p>
                <div className="left">
                  <div className="col-6 aDecor">
                    <a href>FAQ</a>
                    <a href>Brand Guidelines</a>
                  </div>
                  <div className="col-6 aDecor mobile">
                    <a href>Thỏa thuận sử dụng</a>
                    <a href>Chính sách bảo mật</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <p className="tittle">ĐỐI TÁC</p>
                {/* dòng 1 */}
                <div className="col-12 m-bt noPaddingLeft">
                  <a href>
                    <img className="iconConnect" src={cgv} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={beta} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={galaxy} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={bhd} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={lotte} alt="" />
                  </a>
                </div>
                {/* dòng 2 */}
                <div className="col-12 m-bt noPaddingLeft">
                  <a href>
                    <img className="iconConnect" src={mega} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={dcine} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={dongdacinema} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={touch} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={starlight} alt="" />
                  </a>
                </div>
                {/* dòng 3 */}
                <div className="col-12 m-bt noPaddingLeft">
                  <a href>
                    <img className="iconConnect" src={touch} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={vcb} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={beta} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={zalopay} alt="" />
                  </a>
                  <a href>
                    <img className="iconConnect" src={vietin} alt="" />
                  </a>
                </div>
              </div>
            

            <div className="col-4">
              <div className="row">
                <div className="col-6 textCenter">
                  <p className="tittle">MOBILE APP</p>
                  <a href>
                    <img className="iconApp" src={apple} alt="" />
                  </a>
                  <a href>
                    <img className="iconApp" src={android} alt="" />
                  </a>
                </div>
                <div className="col-6 textCenter">
                  <p className="tittle">SOCIAL</p>
                  <a href>
                    <img className="iconApp" src={facebook} alt="" />
                  </a>
                  <a href>
                    <img className="iconApp" src={zalo} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="hrFooter" />
        </div>
        </div>
      </Fragment>
    );
  }
}
