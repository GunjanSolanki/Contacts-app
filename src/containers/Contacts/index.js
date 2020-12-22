import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import ContactsListUI from "../../layouts/Contacts";

const ContactsContainer = () => {
  const history = useHistory();
  const { contactsDispatch, contactsState } = useContext(GlobalContext);
  
  
  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return (<ContactsListUI state={contactsState} />);
}

export default ContactsContainer;