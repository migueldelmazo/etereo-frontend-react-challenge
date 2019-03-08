import axios from 'axios'
import _ from 'lodash'
import { getPhoneDetail } from './phoneDetail'

jest.mock('axios')

const getCustomApiResponse = (invalidData = {}) => {
  const validData = {
    data: {
      id: '1',
      description: 'Description',
      img: 'Img',
      model: 'Model',
      price: 1.99,
      screen: '6.9'
    }
  }
  return _.defaultsDeep({
    data: invalidData
  }, validData)
}

describe('Api get phones', () => {

  it('Valid data: should return a phone detail', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse())
    return getPhoneDetail()
      .then((response) => {
        setTimeout(() => {
          expect(response.id).toStrictEqual('1')
          expect(response.description).toStrictEqual('Description')
          expect(response.img).toStrictEqual('Img')
          expect(response.model).toStrictEqual('Model')
          expect(response.price).toStrictEqual(1.99)
          expect(response.screen).toStrictEqual('6.9')
        })
      })
  })

  it('Invalid id phone detail: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      id: 1
    }))
    return getPhoneDetail()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones/:id endpoint: phone detail')
      })
  })

  it('Invalid description phone detail: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      description: 1
    }))
    return getPhoneDetail()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones/:id endpoint: phone detail')
      })
  })

  it('Invalid img phone detail: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      img: 1
    }))
    return getPhoneDetail()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones/:id endpoint: phone detail')
      })
  })

  it('Invalid model phone detail: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      model: 1
    }))
    return getPhoneDetail()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones/:id endpoint: phone detail')
      })
  })

  it('Invalid price phone detail: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      price: '1.99'
    }))
    return getPhoneDetail()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones/:id endpoint: phone detail')
      })
  })

  it('Invalid screen phone detail: should return an error', async () => {
    axios.get.mockResolvedValue(getCustomApiResponse({
      screen: 1
    }))
    return getPhoneDetail()
      .catch((err) => {
        expect(err.message).toStrictEqual('Api error on /api/phones/:id endpoint: phone detail')
      })
  })

})
