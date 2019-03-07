import { connect } from 'react-redux'
import AppLoading from '../components/app/AppLoading'

const mapStateToProps = state => {
  return {
    status: state.phones.loading || state.phoneDetail.loading
  }
}

export default connect(
  mapStateToProps
)(AppLoading)
