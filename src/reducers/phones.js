import actionTypes from '../constants/actionTypes'

const initialState = {
  items: [],
  error: false,
  loading: false,
  pagination: {
    currentPage: 0,
    size: 4
  },
  total: 0
}

const phones = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_PHONES:
      return {
        ...state,
        items: [...action.phones],
        pagination: {
          currentPage: action.pagination.currentPage,
          size: action.pagination.size
        },
        total: action.total
      }

    case actionTypes.TOGGLE_PHONES_ERROR:
      return {
        ...state,
        error: !!action.status
      }

    case actionTypes.TOGGLE_PHONES_LOADING:
      return {
        ...state,
        loading: !!action.status
      }

    default:
      return state
  }
}

export default phones
