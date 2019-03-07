import React from 'react'
import PropTypes from 'prop-types'

const AppErrorMessage = ({ status }) => (
  <div
    className='m-3'
    hidden={ !status }
  >
    <div className='alert alert-danger'>
      There was a problem trying to connect to the server
    </div>
  </div>
)

AppErrorMessage.propTypes = {
  status: PropTypes.bool.isRequired
}

export default AppErrorMessage
