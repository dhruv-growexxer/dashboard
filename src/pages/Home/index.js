import { Layout } from 'antd'
import React from 'react'
import Sidebar from '../../components/Sidebar/index'
import MyHeader from '../../components/Header'

const { Content } = Layout

const Home = () => {
  return (
    <Content
      className='site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      Home Page
    </Content>
  )
}

export default Home
