import { Layout } from 'antd'
import React from 'react'
import MyHeader from '../Header'
import Sidebar from '../Sidebar'

const AppWrapper = (props) => {
  return (
    <Layout>
      <Sidebar />
      <Layout className='site-layout'>
        <MyHeader />
        {props.children}
      </Layout>
    </Layout>
  )
}

export default AppWrapper
