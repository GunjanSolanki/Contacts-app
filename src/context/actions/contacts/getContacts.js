import { CONTACTS_LOAD_SUCCESS, CONTACTS_LOAD_ERROR, CONTACTS_LOADING } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (history) => (dispatch) => {
  
  dispatch({
    type: CONTACTS_LOADING,
    loading: true,
  });       
  axiosInstance(history).get("/contacts/")
    .then((res) => {
      dispatch({
        type: CONTACTS_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CONTACTS_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    })
}
