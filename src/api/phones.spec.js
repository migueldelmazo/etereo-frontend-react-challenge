import axios from 'axios'
import _ from 'lodash'
import { getPhones } from './phones'

jest.mock('axios')

const getCustomApiResponse = (invalidData = {}) => {
  const validData = {
    data: {
      phones: [
        {
          id: '1',
          img: 'Img',
          model: 'Model',
          price: 1.99
        }
      ],
      pagination: {
        currentPage: 0,
        size: 4
      },
      total: 10
    }
  }
  return _.defaultsDeep({
    data: invalidData
  }, validData)
}

describe('Api get phones', () => {

  it('Valid data: should return phones, pagination and total', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse())
    return getPhones()
      .then((response) => {
        setTimeout(() => {
          expect(response.phones[0].id).toStrictEqual('1')
          expect(response.phones[0].img).toStrictEqual('Img')
          expect(response.phones[0].model).toStrictEqual('Model')
          expect(response.phones[0].price).toStrictEqual(1.99)
          expect(response.pagination.currentPage).toStrictEqual(0)
          expect(response.pagination.size).toStrictEqual(4)
          expect(response.total).toStrictEqual(10)
        })
      })
  })

  it('No array phones: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      phones: {}
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: phones')
      })
  })

  it('Null phone item: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      phones: [null]
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: phones data')
      })
  })

  it('Invalid id phone item: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      phones: [
        {
          id: null
        }
      ]
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: phones data')
      })
  })

  it('Invalid img phone item: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      phones: [
        {
          img: null
        }
      ]
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: phones data')
      })
  })

  it('Invalid model phone item: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      phones: [
        {
          model: null
        }
      ]
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: phones data')
      })
  })

  it('Invalid price phone item: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      phones: [
        {
          price: '1.99'
        }
      ]
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: phones data')
      })
  })

  it('Invalid current page: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      pagination: {
        currentPage: '0'
      }
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: pagination')
      })
  })

  it('Invalid size page: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      pagination: {
        size: '4'
      }
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: pagination')
      })
  })

  it('Invalid total phones: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      total: '10'
    }))
    return getPhones()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones endpoint: total')
      })
  })

})
