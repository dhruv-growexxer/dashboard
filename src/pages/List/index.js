import React, { useEffect, useState } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Modal, Table } from 'antd'
import AddUser from './AddUser'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../state/actions/userActions'
import { bindActionCreators } from 'redux'

const List = () => {
  const users = useSelector((state) => state.users)
  // useEffect(() => {
  //   console.log('userList from list', users)
  // }, [])

  const dispatch = useDispatch()
  const deleteUserComponenet = bindActionCreators(deleteUser, dispatch)

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
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => console.log('hi')} />
            <DeleteOutlined
              onClick={() => {
                Modal.confirm({
                  title: 'Are you sure you want to delete this user?',
                  okText: 'Yes',
                  okType: 'danger',
                  onOk: () => {
                    deleteUserComponenet(record)
                  },
                })
              }}
              style={{ color: 'red', marginLeft: 15 }}
            />
          </>
        )
      },
    },
  ]
  return (
    <>
      <AddUser />
      <Content
        className='site-layout-background'
        style={{
          margin: '10px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Table columns={columns} dataSource={users} rowKey='Id' />
      </Content>
    </>
  )
}

export default List
