import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h3 style={{marginLeft:"3.5rem"}}>Customer Success Managers <Link to="/add"><button className="ui button blue right" style={{marginLeft:"48rem"}}>Add CSM</button></Link></h3>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;