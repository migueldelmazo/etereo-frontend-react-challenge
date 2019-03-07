import React from 'react'
import PropTypes from 'prop-types'
import './PhoneItem.css'

const PhoneItem = ({ img, model, price, onClickItem }) => (
  <li
    className='catalog-item card clickable'
    onClick={ onClickItem }
  >
    <img
      className='card-img-top'
      src={ img }
      alt={ model }
    />
    <div className='card-body'>
      <h5 className='card-title'>{ model }</h5>
      <p className='card-text'>
        { price } €
      </p>
    </div>
  </li>
)

PhoneItem.propTypes = {
  img: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClickItem: PropTypes.func.isRequired
}

export default PhoneItem
