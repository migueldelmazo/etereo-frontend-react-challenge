import React from 'react'
import PropTypes from 'prop-types'

const CatalogItems = ({ items, ItemComponent, onClickItem }) => (
  <ul className='catalog-items'>
    {items.map(item =>
      <ItemComponent
        key={item.id}
        {...item}
        onClickItem={() => onClickItem(item.id)}
      />
    )}
  </ul>
)

CatalogItems.propTypes = {
  items: PropTypes.array.isRequired,
  ItemComponent: PropTypes.any.isRequired,
  onClickItem: PropTypes.func.isRequired
}

export default CatalogItems
