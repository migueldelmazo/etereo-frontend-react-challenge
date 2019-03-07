import React from 'react'
import PropTypes from 'prop-types'
import './PhoneDetail.css'

const PhoneDetail = ({ description, img, isValidData, model, price, screen, hidePhoneDetail }) => (
  <div
    className='phone-detail modal'
    hidden={ !isValidData }
  >
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>{ model }</h5>
          <button
            className='close'
            type='button'
            aria-label='Close'
            onClick={ hidePhoneDetail }
          >
            <span aria-hidden='true'>×</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col'>
                <img
                  className='img'
                  src={ img }
                  alt={ model }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <strong>Price:&nbsp;</strong>
                { price } €
              </div>
              <div className='col-sm'>
                <strong>Screen:&nbsp;</strong>
                { screen } inch
              </div>
              <div className='col-sm'>
                <p className='card-text'>
                  { description }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

PhoneDetail.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  screen: PropTypes.string.isRequired,
  hidePhoneDetail: PropTypes.func.isRequired
}

export default PhoneDetail
