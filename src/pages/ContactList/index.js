import { Layout } from 'antd'
import React from 'react'
import Sidebar from '../../components/Sidebar/index'
import MyHeader from '../../components/Header'
import { Content } from 'antd/lib/layout/layout'

const ContactList = () => {
  return (
    <Content
      className='site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      Contact List
    </Content>
  )
}

export default ContactList
