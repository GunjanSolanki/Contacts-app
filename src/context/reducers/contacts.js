import { CLEAR_CREATE_CONTACT, CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS, CONTACT_CREATE_ERROR, CONTACT_CREATE_LOADING, CONTACT_CREATE_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes"
import contactsInitialState from "../initialStates/contactsInitialState";

const contacts = (state, { payload, type }) => {
  switch(type) {
    case CONTACTS_LOADING:
      return {
        ...state,
          contacts: {
            ...state.contacts, 
            loading: true,
            error: false
          }
      }
    case CONTACTS_LOAD_SUCCESS:
      return {
        ...state,
          contacts: {
            ...state.contacts, 
            loading: false,
            error: false,
            data: payload,
          }
      }
    case CONTACTS_LOAD_ERROR:
      return {
        ...state,
          contacts: {
            ...state.contacts, 
            loading: false,
            error: payload
          }
      }
    case LOGOUT_USER:
      return {
        ...state,
          contactsInitialState
      };
    case CONTACT_CREATE_LOADING:
      return {
        ...state,
          addContact: {
            ...state.addContact, 
            loading: true,
            error: false
          }
      }
    case CONTACT_CREATE_SUCCESS:
      return {
        ...state,
          addContact: {
            ...state.addContact, 
            loading: false,
            error: false,
            data: payload,
          }
      }
    case CONTACT_CREATE_ERROR:
      return {
        ...state,
          addContact: {
            ...state.addContact, 
            loading: false,
            error: payload
          }
      }
    case CLEAR_CREATE_CONTACT:
      return {
        ...state,
          addContact: {
            ...state.addContact, 
            loading: false,
            error: null,
            data: null
          }
      }
    default :
      return state
  }
}

export default contacts;

