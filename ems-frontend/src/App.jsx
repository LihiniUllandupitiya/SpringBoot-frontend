import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  //ListEmployeeComponent 04.Import and Use ListEmployeeComponent in App Component
  //02.Import and Use HeaderComponent in App Component
  //04.Import and Use FooterComponent in App Component
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* http://localhost:3000 */}
            <Route path='/' element = {<ListEmployeeComponent />}></Route>

            {/* http://localhost:3000/employees */}
            <Route path='/employees' element = {<ListEmployeeComponent />}></Route>

          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
