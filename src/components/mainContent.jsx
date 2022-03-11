import React from "react";
import Card from "./card";
import DashboardHeading from "../utils/dashboardHeading";
import cardicon1 from "../assets/media/icon1.png";
import cardicon2 from "../assets/media/icon2.png";
import { Row, Col } from "antd";
import Charts from "./charts";

const MainContent = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <DashboardHeading />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row green-card" span={8}>
          <Card
            imgSrc={cardicon1}
            title="Reedem Card"
            desc="Have you Bitcoin Gift card"
            link="Click Here"
            cha={<Charts />}
          />
        </Col>
        <Col className="gutter-row blue-card" span={8}>
          <Card
            imgSrc={cardicon2}
            title="Total Amout"
            desc="Have you Bitcoin Gift card ?"
            info="0.000000 BTC"
            link="Click Here"
          />
        </Col>
        <Col className="gutter-row grey-card" span={8}>
          <Card
          imgSrc={cardicon1}
          title="Total Amout"
            chart={<Charts />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
