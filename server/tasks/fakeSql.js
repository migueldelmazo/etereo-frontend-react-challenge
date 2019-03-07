const microTasks = require('micro-tasks')

const getPhone = (id, allFields) => {
  return allFields
    ? {
      id: id,
      description: 'Lorem ipsum ' + id,
      img: 'http://localhost:3001/files/phone-' + id + '.jpg',
      model: 'Phone ' + id,
      price: parseInt(id) + .99,
      screen: '6.' + id
    }
    : {
      id: id,
      img: 'http://localhost:3001/files/phone-' + id + '.jpg',
      model: 'Phone ' + id,
      price: parseInt(id) + .99
    }
}

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

const getPhoneDetail = (payload) => {
  return getPhone(payload.params.id, true)
}

microTasks.methodRegister('fakeSql.query', function(query) {
  if (query.indexOf('SELECT id, img, model, price FROM phones') === 0) {
    if (this.queryParams.paginationCurrentPage === 3) {
      return microTasks.reject({
        err: 'A 500 error has been forced when paginationCurrentPage is "3"'
      })
    } else {
      return getPhones(this)
    }
  }

  if (query.indexOf('SELECT * FROM phones') === 0) {
    if (this.params.id === '3') {
      return microTasks.reject({
        err: 'A 500 error has been forced when phone id is "3"'
      })
    } else {
      return getPhoneDetail(this)
    }
  }
})
