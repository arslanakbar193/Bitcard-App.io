import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="cards-icon">
          <img src={props.imgSrc} alt="no-img" />
        </div>
        <div className="cards-heading">
          <Title level={5}>{props.title}</Title>
        </div>
        <div className="card-desc">
          <Title level={3}>{props.info}</Title>
          <Title level={5}>{props.desc}</Title>
          <div className="links">
          <Title level={5}><a href="">{props.link}</a></Title> 
          </div>
          <div>{props.chart}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
