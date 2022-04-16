import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactList from './pages/ContactList'
import Covid from './pages/Covid'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import MyHeader from './components/Header'

function App() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout className='site-layout'>
          <MyHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contactlist' element={<ContactList />} />
            <Route path='/covid' element={<Covid />} />
          </Routes>
        </Layout>
      </Layout>
    </>
  )
}

export default App
