const cors = require('cors')
const express = require('express')
const microTasks = require('micro-tasks')
const endpoints = require('./endpoints')

// express configuration
const port = 3001
const app = express()
app.use(cors())
app.use(express.static('public'))

// init micro-tasks generic helpers
require('micro-tasks/libs/math')
require('micro-tasks/libs/utils')
// init micro-tasks project helpers
require('./tasks/express')
require('./tasks/fakeSql')
require('./tasks/logger')
// init micro-tasks endpoints
require('./endpoints/phones')
require('./endpoints/phoneDetail')

// listen endpoints by express
for (let path in endpoints) {
  console.log('Listen ' + path + ' with endpoints/' + endpoints[path] + '.js tasks')
  app.get(path, (req, res) => {
    // run micro-tasks endopoin
    microTasks.taskRun(endpoints[path], {
      req,
      res
    })
      // ends express response with micro-tasks result
      .then((task) => res.status(task.response.status).json(task.response.data))
      // manages unhandled micro-tasks errors
      .catch(() => res.status(500).json({
        err: 'unhandled error'
      }))
  })
}

// init express
app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Server listen on ' + port + ' port')
  }
})
