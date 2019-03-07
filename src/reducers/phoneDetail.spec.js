import phoneDetail from './phoneDetail'

describe('Phone detail reducers', () => {

  it('Check phoneDetail id on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).id).toEqual('')
  })

  it('Check phoneDetail error on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).error).toEqual(false)
  })

  it('Check phoneDetail isValidData on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).isValidData).toEqual(false)
  })

  it('Check phoneDetail loading on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).loading).toEqual(false)
  })

  it('Check phoneDetail data on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).data).toEqual({
      description: '',
      img: '',
      model: '',
      price: 0,
      screen: ''
    })
  })

  it('Check data on set phone detail', () => {
    expect(phoneDetail({}, {
      type: 'SET_PHONE_DETAIL',
      description: 'description',
      img: 'img',
      model: 'model',
      price: 'price',
      screen: 'description'
    }).data)
      .toEqual({
        description: 'description',
        img: 'img',
        model: 'model',
        price: 'price',
        screen: 'description'
      })
  })

  it('Check isValidData on set phone detail', () => {
    expect(phoneDetail({}, {
      type: 'SET_PHONE_DETAIL'
    }).isValidData)
      .toEqual(true)
  })

  it('Set phone detail loading to true', () => {
    expect(phoneDetail({}, {
      type: 'SET_PHONE_DETAIL_LOADING',
      status: true
    }).loading).toEqual(true)
  })

  it('Set phone detail loading to false', () => {
    expect(phoneDetail({}, {
      type: 'SET_PHONE_DETAIL_LOADING',
      status: false
    }).loading).toEqual(false)
  })

  it('Hide phone detail', () => {
    expect(phoneDetail({}, {
      type: 'HIDE_PHONE_DETAIL'
    }).isValidData).toEqual(false)
  })

})
