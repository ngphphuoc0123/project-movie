import React from "react";
import { Grid } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

import bg1 from "assets/img/bg-questions@1x.png";
import bg11 from "assets/img/bg-questions-1@1x.png";

import "./Questions.style.scss";
import { Col, Container, Row } from "react-bootstrap";

const Questions = () => {
  return (
    <>
      <div className="questions" id="questions">
        <Container>
          <div className="questions-header">
            <h1 className="title">Do you have any questions?</h1>
            <p className="subtitle-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              laudantium quas sunt dolorum consequatur ullam error obcaecati
              iste magnam culpa autem accusantium eaque nam porro voluptas, eius
              optio voluptate exercitationem.
            </p>
          </div>
          <div className="questions-content">
            <Row>
              <Col item xs={12} sm={6}>
                <div className="questions-item">
                  <AddIcon />
                  <p className="questions-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    totam consectetur magnam tempore esse est deleniti quos
                  </p>
                </div>
                <div className="questions-item">
                  <AddIcon />
                  <p className="questions-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    totam consectetur magnam tempore esse est deleniti quos
                  </p>
                </div>
                <div className="questions-item">
                  <AddIcon />
                  <p className="questions-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    totam consectetur magnam tempore esse est deleniti quos
                  </p>
                </div>
              </Col>
              <Col item xs={12} sm={6}>
                <div className="questions-item">
                  <AddIcon />
                  <p className="questions-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    totam consectetur magnam tempore esse est deleniti quos
                  </p>
                </div>
                <div className="questions-item">
                  <AddIcon />
                  <p className="questions-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    totam consectetur magnam tempore esse est deleniti quos
                  </p>
                </div>
                <div className="questions-item">
                  <AddIcon />
                  <p className="questions-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    totam consectetur magnam tempore esse est deleniti quos
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div style={{ display: "flex" }}>
          <img
            className="questions-bg"
            src={bg11}
            style={{ left: "calc(50% - 2567px)" }}
            alt=""
          />
          <img
            className="questions-bg"
            src={bg1}
            style={{ left: "calc(50% - 780px)" }}
            alt=""
          />

          <img
            className="questions-bg"
            src={bg11}
            style={{ left: "calc(50% + 983px)" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Questions;
