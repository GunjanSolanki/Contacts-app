import { CLEAR_CREATE_CONTACT } from "../../../constants/actionTypes"

export default () => (dispatch) => {
  dispatch({
    type: CLEAR_CREATE_CONTACT,
  })
}