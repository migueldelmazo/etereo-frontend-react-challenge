import React from 'react'
import PropTypes from 'prop-types'
import CatalogItems from './CatalogItems'
import CatalogPagination from './CatalogPagination'
import './Catalog.css'

const Catalog = ({ items, pagination, title, DetailComponent, ItemComponent, onClickItem, onClickPage }) => (
  <div className='container'>
    <div className='row'>
      <div className='col catalog-title'>
        <h1>{ title }</h1>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <CatalogItems
          items={ items }
          ItemComponent={ ItemComponent }
          onClickItem={ onClickItem }
        />
        <CatalogPagination
          pagination={ pagination }
          onClickPage={ onClickPage }
        />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <DetailComponent />
      </div>
    </div>
  </div>
)

Catalog.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  pagination: PropTypes.object.isRequired,
  DetailComponent: PropTypes.any.isRequired,
  ItemComponent: PropTypes.any.isRequired,
  onClickItem: PropTypes.func.isRequired
}

export default Catalog
