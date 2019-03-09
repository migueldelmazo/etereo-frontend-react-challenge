const microTasks = require('micro-tasks')

// hook executed when a task starts
microTasks.hookRegister('microTasks.onTaskStart', (...args) => {
  console.log('---------- Init endpoint')
})

// hook executed when an action ends
microTasks.hookRegister('microTasks.onActionEnd', (...args) => {
  console.log(args[0].action)
})

// hook executed when an actions throws an error
microTasks.hookRegister('microTasks.onActionError', (...args) => {
  console.error(args[0].action)
})

// hook executed when an action is rejectted
microTasks.hookRegister('microTasks.onActionRejected', (...args) => {
  console.error(args[0].action)
})
