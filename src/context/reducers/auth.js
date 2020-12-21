import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../../constants/actionTypes";
  
const auth = (state, { payload, type }) => {
  switch(type) {
    case REGISTER_LOADING:
      return {
        ...state, 
        auth: {
          ...state.auth,
          loading: true,
          error: false
        }
      }
    case REGISTER_SUCCESS:
      return {
        ...state, 
        auth: {
          ...state.auth,
          loading: false,
          error: false,
          data: payload,
        },
      }
    case REGISTER_ERROR:
      return {
        ...state, 
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      }
    case LOGIN_LOADING:
      return {
        ...state, 
        auth: {
          ...state.auth,
          loading: true,
          error: false
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state, 
        auth: {
          ...state.auth,
          loading: false,
          error: false,
          data: payload,
        },
      }
    case LOGIN_ERROR:
      return {
        ...state, 
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      }
        
    default :
      return state
  }
}

export default auth;