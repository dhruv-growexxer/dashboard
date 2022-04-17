import React, { useEffect, useState } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Table } from 'antd'
import AddUser from './AddUser'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { useSelector } from 'react-redux'

const List = () => {
  const users = useSelector((state) => state.users)
  // useEffect(() => {
  //   console.log('userList from list', userList)
  // }, [])

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Actions',
      dataIndex: 'address',
      render: (record) => {
        return (
          <>
            <EditOutlined />
            <DeleteOutlined style={{ color: 'red', marginLeft: 15 }} />
          </>
        )
      },
    },
  ]
  return (
    <Content
      className='site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <AddUser />
      <Table columns={columns} dataSource={users} rowKey='Id' />
    </Content>
  )
}

export default List
