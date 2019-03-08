import app from './app'

describe('app reducers', () => {

  it('Check app error status on init', () => {
    expect(app(undefined, {
      type: ''
    }).error).toStrictEqual(false)
  })

  it('Set app error status to true', () => {
    expect(app({}, {
      type: 'SET_APP_ERROR_STATUS',
      status: true
    }).error).toStrictEqual(true)
  })

  it('Set app error status to false', () => {
    expect(app({}, {
      type: 'SET_APP_ERROR_STATUS',
      status: false
    }).error).toStrictEqual(false)
  })

})
