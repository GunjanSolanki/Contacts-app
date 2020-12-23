import { CONTACT_CREATE_SUCCESS, CONTACT_CREATE_ERROR, CONTACT_CREATE_LOADING } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default ({
    country_code,
    first_name,
    last_name,
    phone_number,
    is_favorite
  }) => (dispatch) => {
  
  dispatch({
    type: CONTACT_CREATE_LOADING,
    loading: true,
  });       
  axiosInstance().post("/contacts/", 
    {
      country_code,
      first_name,
      last_name,
      phone_number,
      is_favorite
    })
    .then((res) => {
      console.log("RES:", res)
      dispatch({
        type: CONTACT_CREATE_SUCCESS,
        payload: res.data,
      });
      
    })
    .catch((err) => {
      console.log("ERR:", err)
      dispatch({
        type: CONTACT_CREATE_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    })
}
