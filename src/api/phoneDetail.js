import axios from 'axios'
import constants from '../constants/constants'

const checkResponsePhoneDetail = (phoneDetail) => {
  if (typeof phoneDetail !== 'object' ||
    typeof phoneDetail.id !== 'string' ||
    typeof phoneDetail.description !== 'string' ||
    typeof phoneDetail.img !== 'string' ||
    typeof phoneDetail.model !== 'string' ||
    typeof phoneDetail.price !== 'number' ||
    typeof phoneDetail.screen !== 'string') {
    throw new Error('Api error on /api/phones/:id endpoint: phone detail')
  }
}

export const getPhoneDetail = (id) => {
  return axios.get(constants.API_HOST + '/api/phones/' + id)
    .then((response) => {
      // the api is the only data entry point of the entire app, check the data
      checkResponsePhoneDetail(response.data)
      return response.data
    })
}
