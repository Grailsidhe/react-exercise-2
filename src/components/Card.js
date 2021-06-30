import "./Card.css";
import React from "react";

const Contact = (props) => {
  return (
    <div className="Contact">
      <img className="image" src={props.image} alt="Avatar"></img>
      <div className="info">
      <p className='small-text'><b>First name:</b> {props.fName}</p>
      <p className='small-text'><b>Last name:</b> {props.lName}</p>
      <p className='small-text'><b>Gender:</b> {props.gender}</p>
      <p className='small-text'><b>Height:</b> {props.height}</p>
      <p className='small-text'><b>Birth:</b> {props.birth}</p>
      </div>
    </div>
  );
};

export default Contact;