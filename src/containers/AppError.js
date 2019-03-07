import { connect } from 'react-redux'
import AppErrorMessage from '../components/app/AppErrorMessage'

const mapStateToProps = state => {
  return {
    status: state.app.error
  }
}

export default connect(
  mapStateToProps
)(AppErrorMessage)
