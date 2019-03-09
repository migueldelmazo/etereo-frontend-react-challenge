const microTasks = require('micro-tasks')

// returns phone data with some or all the fields
const getPhone = (id, allFields) => {
  const phone = {
    id: id + '',
    img: 'http://localhost:3001/files/phone-' + id + '.jpg',
    model: 'Phone ' + id,
    price: parseInt(id) + .99
  }
  if (allFields) {
    phone.description = 'Lorem ipsum ' + id
    phone.screen = '6.' + id
  }
  return phone
}

// returns a phones array, pagination and total for /phones endpoint
const getPhones = (payload) => {
  const phones = []
  const total = 22
  const paginationCurrentPage = payload.queryParams.paginationCurrentPage
  const paginationSize = payload.queryParams.paginationSize

  for (
    let idx = paginationCurrentPage * paginationSize;
    idx < paginationCurrentPage * paginationSize + paginationSize && idx < total;
    idx += 1
  ) {
    phones.push(getPhone(idx, false))
  }

  return {
    phones,
    pagination: {
      currentPage: paginationCurrentPage,
      size: paginationSize
    },
    total
  }
}

// returns a phone for /phones/:id endpoint
const getPhoneDetail = (payload) => {
  return getPhone(payload.params.id, true)
}

// this is a fake SQL that generates the data on demand
microTasks.methodRegister('fakeSql.query', function(query) {
  // query for /phones endpoint
  if (query.indexOf('SELECT id, img, model, price FROM phones') === 0) {
    // if current page is 3 we simulate an error to see it in web app
    if (this.queryParams.paginationCurrentPage === 3) {
      return microTasks.reject({
        err: 'A 500 error has been forced when paginationCurrentPage is "3"'
      })
    } else {
      return getPhones(this)
    }
  }

  // query for /phones/:id endpoint
  if (query.indexOf('SELECT * FROM phones') === 0) {
    // if phone id is 3 we simulate an error to see it in web app
    if (this.params.id === '3') {
      return microTasks.reject({
        err: 'A 500 error has been forced when phone id is "3"'
      })
    } else {
      return getPhoneDetail(this)
    }
  }
})
