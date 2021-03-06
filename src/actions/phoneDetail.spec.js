import axios from 'axios'
import { hidePhoneDetail, getPhoneDetail } from './phoneDetail'

jest.mock('axios')

describe('Phone detail sync actions', () => {

  it('addTodo should create ADD_TODO action', () => {
    expect(hidePhoneDetail())
      .toStrictEqual({
        type: 'HIDE_PHONE_DETAIL'
      })
  })

})

describe('Phone detail async actions', () => {

  const getPhoneDetailActions = getPhoneDetail('1')

  it('Call getPhoneDetail with valid api response: should dispatch 4 actions', () => {
    const mockDispatch = jest.fn()
    axios.get.mockResolvedValue({
      data: {
        id: '1',
        description: 'Description',
        img: 'Img',
        model: 'Model',
        price: 1.99,
        screen: 'Screen'
      }
    })
    return getPhoneDetailActions(mockDispatch)
      .then(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(4)
        expect(mockDispatch).toHaveBeenNthCalledWith(1, {
          type: 'SET_PHONE_DETAIL_LOADING',
          status: true
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(2, {
          type: 'SET_APP_ERROR_STATUS',
          status: false
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(3, {
          type: 'SET_PHONE_DETAIL',
          description: 'Description',
          img: 'Img',
          model: 'Model',
          price: 1.99,
          screen: 'Screen'
        })
        expect(mockDispatch).toHaveBeenNthCalledWith(4, {
          type: 'SET_PHONE_DETAIL_LOADING',
          status: false
        })
      })
  })

  it('Call getPhoneDetail with invalid api response: should dispatch 4 actions', () => {
    const mockDispatch = jest.fn()
    axios.get.mockResolvedValue({})
    return getPhoneDetailActions(mockDispatch)
      .then(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(4)
        expect(mockDispatch).toHaveBeenNthCalledWith(1, {
          type: 'SET_PHONE_DETAIL_LOADING',
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
          type: 'SET_PHONE_DETAIL_LOADING',
          status: false
        })
      })
  })

})
