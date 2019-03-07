import app from './app'

describe('app reducers', () => {

  it('Check app error status on init', () => {
    expect(app(undefined, {
      type: ''
    }).error).toEqual(false)
  })

  it('Set app error status to true', () => {
    expect(app({}, {
      type: 'SET_APP_ERROR_STATUS',
      status: true
    }).error).toEqual(true)
  })

  it('Set app error status to false', () => {
    expect(app({}, {
      type: 'SET_APP_ERROR_STATUS',
      status: false
    }).error).toEqual(false)
  })

})
