import phones from './phones'

describe('Phone detail reducers', () => {

  it('Check phones items on init', () => {
    expect(phones(undefined, {
      type: ''
    }).items).toEqual([])
  })

  it('Check phones loading on init', () => {
    expect(phones(undefined, {
      type: ''
    }).loading).toEqual(false)
  })

  it('Check phones pagination on init', () => {
    expect(phones(undefined, {
      type: ''
    }).pagination).toEqual({
      currentPage: 0,
      size: 4
    })
  })

  it('Check phones total on init', () => {
    expect(phones(undefined, {
      type: ''
    }).total).toEqual(0)
  })

  it('Check items on add phones', () => {
    expect(phones({}, {
      type: 'ADD_PHONES',
      phones: [{
        id: '0',
        img: 'Img 0',
        model: 'Model 0',
        price: 1
      }],
      pagination: {}
    }).items)
      .toEqual([{
        id: '0',
        img: 'Img 0',
        model: 'Model 0',
        price: 1
      }])
  })

  it('Check pagination on add phones', () => {
    expect(phones({}, {
      type: 'ADD_PHONES',
      phones: [],
      pagination: {
        currentPage: 1,
        size: 2
      }
    }).pagination)
      .toEqual({
        currentPage: 1,
        size: 2
      })
  })

  it('Check total on add phones', () => {
    expect(phones({}, {
      type: 'ADD_PHONES',
      phones: [],
      pagination: {},
      total: 10
    }).total)
      .toEqual(10)
  })

  it('Set phones loading to true', () => {
    expect(phones({}, {
      type: 'SET_PHONES_LOADING',
      status: true
    }).loading).toEqual(true)
  })

  it('Set phones loading to false', () => {
    expect(phones({}, {
      type: 'SET_PHONES_LOADING',
      status: false
    }).loading).toEqual(false)
  })

})
