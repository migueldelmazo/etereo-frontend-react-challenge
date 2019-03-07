import axios from 'axios'

const host = 'http://localhost:3001'

export default {

  getPhones: (paginationCurrentPage, paginationSize) => {
    return axios.get(host + '/api/phones', {
        params: {
          paginationCurrentPage,
          paginationSize
        }
      })
    .then((response) => response.data)
  },

  getPhoneDetail: (id) => {
    return axios.get(host + '/api/phones/' + id)
      .then((response) => response.data)
  }

}
