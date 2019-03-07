const microTasks = require('micro-tasks')

microTasks.methodRegister('express.getRequestQueryParams', function(data) {
  return this.req.query
})

microTasks.methodRegister('express.getRequestParams', function(data) {
  return this.req.params
})
