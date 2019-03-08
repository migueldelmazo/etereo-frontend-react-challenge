import { hidePhoneDetail } from './phoneDetail'

describe('Phone detail actions', () => {

  it('addTodo should create ADD_TODO action', () => {
    expect(hidePhoneDetail())
      .toStrictEqual({
        type: 'HIDE_PHONE_DETAIL'
      })
  })

})
