import React from 'react'
import PropTypes from 'prop-types'
import './AppLoading.css'

const AppLoading = ({ status }) => (
  <div
    className='loading'
    hidden={ !status }
  >
    <div className='spinner-border text-primary'>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
)

AppLoading.propTypes = {
  status: PropTypes.bool.isRequired
}

export default AppLoading
