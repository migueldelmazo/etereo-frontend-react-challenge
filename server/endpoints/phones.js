const microTasks = require('micro-tasks')

microTasks.taskRegister('phones', [
  {
    method: 'express.getRequestQueryParams',
    resultPath: 'queryParams'
  },
  {
    method: 'utils.default',
    params: ['queryParams.paginationCurrentPage', 0]
  },
  {
    method: 'math.parseInt',
    params: '{payload.queryParams.paginationCurrentPage}',
    resultPath: 'queryParams.paginationCurrentPage'
  },
  {
    method: 'utils.default',
    params: ['queryParams.paginationSize', 4]
  },
  {
    method: 'math.parseInt',
    params: '{payload.queryParams.paginationSize}',
    resultPath: 'queryParams.paginationSize'
  },
  {
    method: 'math.multiply',
    params: [
      '{payload.queryParams.paginationCurrentPage}',
      '{payload.queryParams.paginationSize}'
    ],
    resultPath: 'paginationOffset'
  },
  {
    method: 'fakeSql.query',
    params: 'SELECT id, img, model, price FROM phones WHERE id > "{{payload.paginationOffset}}" LIMIT {{payload.queryParams.paginationSize}}',
    resultPath: 'response.data'
  },
  {
    method: 'utils.set',
    params: ['response.status', 200]
  },
  {
    catch: true,
    method: 'utils.set',
    params: ['response.status', 500]
  }
])
