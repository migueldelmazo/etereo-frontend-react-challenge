import api from '../api'
import actionTypes from '../constants/actionTypes'

const getPaginationSize = (paginationSize, getState) => {
  return paginationSize === undefined
    ? getState().phones.pagination.size
    : paginationSize
}

// get phone list from api
export const getPhones = (paginationCurrentPage = 0, paginationSize) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SET_PHONES_LOADING,
    status: true
  })
  dispatch({
    type: actionTypes.SET_APP_ERROR_STATUS,
    status: false
  })
  return api.getPhones(paginationCurrentPage, getPaginationSize(paginationSize, getState))
    .then((response) => {
      dispatch({
        type: actionTypes.ADD_PHONES,
        pagination: {
          currentPage: response.pagination.currentPage,
          size: response.pagination.size,
        },
        phones: response.phones,
        total: response.total
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
        type: actionTypes.SET_PHONES_LOADING,
        status: false
      })
    })
}
