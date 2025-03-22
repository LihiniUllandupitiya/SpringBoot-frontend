import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

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

            {/* create route for add employee */}
            {/* http://localhost:3000/add-employee */}
            <Route path='/add-employee' element = {<EmployeeComponent />}></Route>

            {/* create route for edit employee */}
            {/* http://localhost:3000/edit-employee */}
            <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>

          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
