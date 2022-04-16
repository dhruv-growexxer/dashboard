import { Layout } from 'antd'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/index'
import MyHeader from '../../components/Header'
import { Content } from 'antd/lib/layout/layout'

const Covid = () => {
  return (
    <Content
      className='site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      Covid
    </Content>
  )
}

export default Covid
