import actionTypes from '../constants/actionTypes'

const initialState = {
  error: false,
}

const phones = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.TOGGLE_APP_ERROR:
      return {
        ...state,
        error: !!action.status
      }

    default:
      return state
  }
}

export default phones
