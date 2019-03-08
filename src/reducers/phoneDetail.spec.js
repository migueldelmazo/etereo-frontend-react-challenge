import phoneDetail from './phoneDetail'

describe('Phone detail reducers', () => {

  it('Check phoneDetail id on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).id).toStrictEqual('')
  })

  it('Check phoneDetail error on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).error).toStrictEqual(false)
  })

  it('Check phoneDetail isValidData on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).isValidData).toStrictEqual(false)
  })

  it('Check phoneDetail loading on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).loading).toStrictEqual(false)
  })

  it('Check phoneDetail data on init', () => {
    expect(phoneDetail(undefined, {
      type: ''
    }).data).toStrictEqual({
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
      .toStrictEqual({
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
      .toStrictEqual(true)
  })

  it('Set phone detail loading to true', () => {
    expect(phoneDetail({}, {
      type: 'SET_PHONE_DETAIL_LOADING',
      status: true
    }).loading).toStrictEqual(true)
  })

  it('Set phone detail loading to false', () => {
    expect(phoneDetail({}, {
      type: 'SET_PHONE_DETAIL_LOADING',
      status: false
    }).loading).toStrictEqual(false)
  })

  it('Hide phone detail', () => {
    expect(phoneDetail({}, {
      type: 'HIDE_PHONE_DETAIL'
    }).isValidData).toStrictEqual(false)
  })

})
