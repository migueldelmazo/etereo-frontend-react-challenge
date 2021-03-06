import api from '../api'
import actionTypes from '../constants/actionTypes'

export const hidePhoneDetail = () => ({
  type: actionTypes.HIDE_PHONE_DETAIL
})

// get a phone detail from api
export const getPhoneDetail = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_PHONE_DETAIL_LOADING,
    status: true
  })
  dispatch({
    type: actionTypes.SET_APP_ERROR_STATUS,
    status: false
  })
  return api.getPhoneDetail(id)
    .then((response) => {
      dispatch({
        type: actionTypes.SET_PHONE_DETAIL,
        description: response.description,
        img: response.img,
        model: response.model,
        price: response.price,
        screen: response.screen
      })
    })
    .catch(() => {
      dispatch({
        type: actionTypes.SET_APP_ERROR_STATUS,
        status: true
      })
    })
    .then(() => {
      dispatch({
        type: actionTypes.SET_PHONE_DETAIL_LOADING,
        status: false
      })
    })
}
