import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ContactList from './pages/ContactList'
import Covid from './pages/Covid'
import AppWrapper from './components/AppWrapper'

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactlist' element={<ContactList />} />
        <Route path='/covid' element={<Covid />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
