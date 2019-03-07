const cors = require('cors')
const express = require('express')
const microTasks = require('micro-tasks')
const endpoints = require('./endpoints')

const port = 3001
const app = express()

app.use(cors())
app.use(express.static('public'))

require('micro-tasks/libs/math')
require('micro-tasks/libs/utils')
require('./tasks/express')
require('./tasks/fakeSql')
require('./tasks/logger')
require('./endpoints/phones')
require('./endpoints/phoneDetail')

for (let path in endpoints) {
  console.log('Listen ' + path + ' with endpoints/' + endpoints[path] + '.js tasks')
  app.get(path, function(req, res) {
    microTasks.taskRun(endpoints[path], {
      req,
      res
    })
      .then((task) => res.status(task.response.status).json(task.response.data))
  })
}

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Server listen on ' + port + ' port')
  }
})
