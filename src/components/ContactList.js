import React, { useRef } from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const inputEl = useRef("");
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

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h3 style={{marginLeft:"3.5rem"}}>Customer Success Managers <Link to="/add"><button className="ui button blue right" style={{marginLeft:"48rem"}}>Add CSM</button></Link></h3>
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} type="text" placeholder="Search by Name or email" className="prompt" value={ props.term} onChange={ getSearchTerm }/>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "Not Available..."}</div>
    </div>
  );
};

export default ContactList;