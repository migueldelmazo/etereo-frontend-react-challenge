import actionTypes from '../constants/actionTypes'

const initialState = {
  id: '',
  error: false,
  data: {
    description: '',
    img: '',
    model: '',
    price: 0,
    screen: ''
  },
  isValidData: false,
  loading: false
}

const phoneDetail = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_PHONE_DETAIL:
      return {
        ...state,
        data: {
          description: action.description,
          img: action.img,
          model: action.model,
          price: action.price,
          screen: action.screen
        },
        isValidData: true
      }

    case actionTypes.SET_PHONE_DETAIL_LOADING:
      return {
        ...state,
        loading: !!action.status
      }

    case actionTypes.HIDE_PHONE_DETAIL:
      return {
        ...state,
        isValidData: false
      }

    default:
      return state
  }
}

export default phoneDetail
