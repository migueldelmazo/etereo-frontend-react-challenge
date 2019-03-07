import { connect } from 'react-redux'
import actions from '../actions'
import PhoneDetail from '../components/phone/PhoneDetail'

const mapStateToProps = state => {
  const phoneDetail = state.phoneDetail.data
  return {
    description: phoneDetail.description,
    img: phoneDetail.img,
    model: phoneDetail.model,
    price: phoneDetail.price,
    screen: phoneDetail.screen,
    isValidData: state.phoneDetail.isValidData
  }
}

const mapDispatchToProps = dispatch => ({
  hidePhoneDetail: () => dispatch(actions.hidePhoneDetail())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetail)
