import { useHistory } from "react-router-dom";
import { LOGOUT_USER } from "../../../constants/actionTypes";

export default (history) => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: LOGOUT_USER,
  })

  if(history) {
    history.push("/auth/login");
  }
}