import axios from 'axios'
import { getPhones } from './phones'

jest.mock('axios')

describe('Phones async actions', () => {

  const getPhonesActions = getPhones(0, 4)

  it('Call getPhones with valid api response: should dispatch 4 actions', () => {
    const mockDispatch = jest.fn()
    axios.get.mockResolvedValue({
      data: {
        phones: [],
        pagination: {
          currentPage: 0,
          size: 4
        },
        total: 10
      }
    })
    return getPhonesActions(mockDispatch)
      .then(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(4)
        expect(mockDispatch).toHaveBeenNthCalledWith(1, {
          type: 'SET_PHONES_LOADING',
          status: true
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(2, {
          type: 'SET_APP_ERROR_STATUS',
          status: false
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(3, {
          type: 'ADD_PHONES',
          phones: [],
          pagination: {
            currentPage: 0,
            size: 4,
          },
          total: 10
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(4, {
          type: 'SET_PHONES_LOADING',
          status: false
        })
      })
  })

  it('Call getPhones with invalid api response: should dispatch 4 actions', () => {
    const mockDispatch = jest.fn()
    axios.get.mockResolvedValue({})
    return getPhonesActions(mockDispatch)
      .then(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(4)
        expect(mockDispatch).toHaveBeenNthCalledWith(1, {
          type: 'SET_PHONES_LOADING',
          status: true
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(2, {
          type: 'SET_APP_ERROR_STATUS',
          status: false
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(3, {
          type: 'SET_APP_ERROR_STATUS',
          status: true
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(4, {
          type: 'SET_PHONES_LOADING',
          status: false
        })
      })
  })

})
