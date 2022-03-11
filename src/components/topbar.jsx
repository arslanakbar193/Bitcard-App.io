import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/media/logo.png";
import hamburger from "../assets/media/hamburger.png";
import profileImg from "../assets/media/profileimg.png";
import flag from "../assets/media/flag.png";
import flagus from "../assets/media/flagus.png";

import { Select } from "antd";
import { useState } from "react";
import countryCurrency from "../utils/countryCurrency";

const { Option } = Select;

const Topbar = () => {
  const [selectedData, setselectedData] = useState(countryCurrency);
  return (
    <>
      <div className="topbar">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <div className="logo-img">
              <img className="hamburger" src={hamburger} alt="no-img" />
              <img src={logo} alt="no-img" />
            </div>
          </Col>
          <Col className="gutter-row" span={8} offset={8}>
            <div className="select-elem">
              <Row>
                <Col className="gutter-row" span={8}>
                  <span>
                    <img src={flagus} alt="no-img" />
                  </span>
                  <Select defaultValue="USD" style={{ width: 90 }}>
                    {selectedData.currency.map((curElem, index) => {
                      return (
                        <>
                          <option key={index}>{curElem.label}</option>
                        </>
                      );
                    })}
                  </Select>
                </Col>
                <Col className="gutter-row" span={8}>
                  <span>
                    <img src={flag} alt="no-img" />
                  </span>
                  <Select defaultValue="PAK" style={{ width: 90 }}>
                    {selectedData.country.map((curElem, index) => {
                      return (
                        <>
                          <option key={index}>{curElem.label}</option>
                        </>
                      );
                    })}
                  </Select>
                </Col>
                <Col className="gutter-row" span={8}>
                  <span>
                    <img src={profileImg} alt="no-img" />
                  </span>
                  <Select defaultValue="UserName" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Topbar;
