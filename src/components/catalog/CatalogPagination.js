import React from 'react'
import PropTypes from 'prop-types'

const getTotalPages = (pagination) => {
  return pagination.size > 0
    ? pagination.totalItems / pagination.size
    : 0
}

const getPageInfo = (idx, currentPage, onClickPage) => {
  return {
    id: idx,
    label: idx + 1,
    className: idx === currentPage ? 'active' : '',
    onClick: () => onClickPage(idx)
  }
}

const getPages = (pagination, onClickPage) => {
  const pages = []
  let totalPages = getTotalPages(pagination)

  for (let idx = 0; idx < totalPages; idx += 1) {
    pages.push(getPageInfo(idx, pagination.currentPage, onClickPage))
  }

  return pages
}

const CatalogPagination = ({ pagination, onClickPage }) => (
  <div className='pagination-wrapper'>
    <ul className='pagination'>
      {getPages(pagination, onClickPage).map(page =>
        <li
          className={'page-item ' + page.className}
          key={page.id}
        >
          <button
            className='page-link'
            onClick={page.onClick}
          >{page.label}</button>
        </li>
      )}
    </ul>
  </div>
)

CatalogPagination.propTypes = {
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired
  }),
  onClickPage: PropTypes.func.isRequired
}

export default CatalogPagination
