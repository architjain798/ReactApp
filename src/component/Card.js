import React from "react";
import "../styling/Card.css";

class Card extends React.Component {
  render() {
  
    return (
      <div className="card-head">
        <div className="card-image" style={{ backgroundImage: `url(${this.props.imgSrc}` }}></div>
        <div className="card-detail">
          <h2>{this.props.title}</h2>
          <p>{this.props.detail}</p>
        </div>
      </div>
    );
  }
}
export default Card;
