import React from "react";
import user from "../images/user.png";
import './App.css';

import Avatar from 'react-avatar';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item itemList">
      {/* <img className="ui avatar image" src={user} alt="user" /> */}
        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', '#bec6ff'])} name={name} round={true} size={40} style={{display:"inline"}} className="ui avatar image"/>
      <div className="content conDisplay">
        <div className="header">{name}</div>
        <div>{email}</div>

        

      </div>
      <i
        className="trash icon"
        // style={{ color: "blue", marginTop: "7px" }}
        style={{ color: "blue", marginTop: "-2rem", marginLeft: "68rem" ,position:"absolute" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

// #d7dcff 

export default ContactCard;

