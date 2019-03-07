import api from '../api'
import actionTypes from '../constants/actionTypes'

const getPaginationSize = (paginationSize, getState) => {
  return paginationSize === undefined
    ? getState().phones.pagination.size
    : paginationSize
}

export const getPhones = (paginationCurrentPage = 0, paginationSize) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.TOGGLE_PHONES_LOADING,
    status: true
  })
  dispatch({
    type: actionTypes.TOGGLE_APP_ERROR,
    status: false
  })
  api.getPhones(paginationCurrentPage, getPaginationSize(paginationSize, getState))
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
        type: actionTypes.TOGGLE_APP_ERROR,
        status: true
      })
    })
    .then(() => {
      dispatch({
        type: actionTypes.TOGGLE_PHONES_LOADING,
        status: false
      })
    })
}
