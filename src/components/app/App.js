import React from 'react'
import AppError from '../../containers/AppError'
import PhoneCatalog from '../../containers/PhoneCatalog'
import PhonesLoading from '../../containers/PhonesLoading'

const App = () => (
  <div className='app'>
    <AppError />
    <PhonesLoading />
    <PhoneCatalog />
  </div>
)

export default App
