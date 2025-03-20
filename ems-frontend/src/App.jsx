import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  //ListEmployeeComponent 04.Import and Use ListEmployeeComponent in App Component
  //02.Import and Use HeaderComponent in App Component
  //04.Import and Use FooterComponent in App Component
  return (
    <>
      <HeaderComponent />
      <ListEmployeeComponent />
      <FooterComponent />
    </>
  )
}

export default App
