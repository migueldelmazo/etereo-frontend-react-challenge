const microTasks = require('micro-tasks')

microTasks.taskRegister('phoneDetail', [
  {
    method: 'express.getRequestParams',
    resultPath: 'params'
  },
  {
    method: 'fakeSql.query',
    params: 'SELECT * FROM phones WHERE id = "{{payload.params.id}}"',
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
