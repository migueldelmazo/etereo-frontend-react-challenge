import actionTypes from '../constants/actionTypes'

const initialState = {
  error: false,
}

const app = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_APP_ERROR_STATUS:
      return {
        ...state,
        error: !!action.status
      }

    default:
      return state
  }
}

export default app
