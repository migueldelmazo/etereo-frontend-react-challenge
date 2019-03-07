const microTasks = require('micro-tasks')

microTasks.hookRegister('microTasks.onTaskStart', (...args) => {
  console.log('---------- Init endpoint')
})

microTasks.hookRegister('microTasks.onActionEnd', (...args) => {
  console.log(args[0].action)
})

microTasks.hookRegister('microTasks.onActionError', (...args) => {
  console.error(args[0].action)
})

microTasks.hookRegister('microTasks.onActionRejected', (...args) => {
  console.error(args[0].action)
})
