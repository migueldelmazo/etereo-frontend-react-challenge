import axios from 'axios'
import constants from '../constants/constants'

const checkResponsePhones = (phones) => {
  if (!Array.isArray(phones)) {
    throw new Error('Api error on /api/phones endpoint: phones')
  }
  let phonesLength = phones.length
  for (let idx = 0; idx < phonesLength; idx += 1) {
    if (phones[idx] === null ||
      typeof phones[idx] !== 'object' ||
      typeof phones[idx].id !== 'string' ||
      typeof phones[idx].img !== 'string' ||
      typeof phones[idx].model !== 'string' ||
      typeof phones[idx].price !== 'number') {
      throw new Error('Api error on /api/phones endpoint: phones data')
    }
  }
}

const checkResponsePagination = (pagination) => {
  if (!(pagination &&
    pagination.currentPage !== undefined &&
    pagination.size !== undefined &&
    typeof pagination.currentPage === 'number' &&
    typeof pagination.size === 'number')) {
    throw new Error('Api error on /api/phones endpoint: pagination')
  }
}

const checkResponseTotal = (total) => {
  if (!(total &&
    total !== undefined &&
    typeof total === 'number')) {
    throw new Error('Api error on /api/phones endpoint: total')
  }
}

export const getPhones = (paginationCurrentPage, paginationSize) => {
  return axios.get(constants.API_HOST + '/api/phones', {
    params: {
      paginationCurrentPage,
      paginationSize
    }
  })
    .then((response) => {
      // the api is the only data entry point of the entire app, check the data
      checkResponsePhones(response.data.phones)
      checkResponsePagination(response.data.pagination)
      checkResponseTotal(response.data.total)
      return response.data
    })
}
