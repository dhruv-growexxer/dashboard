import { Header } from 'antd/lib/layout/layout'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../state/index'

const MyHeader = () => {
  const stateCollapsed = useSelector((state) => state.toggleSide)

  const dispatch = useDispatch()

  const { toggleSide } = bindActionCreators(actions, dispatch)

  return (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      {stateCollapsed ? (
        <MenuUnfoldOutlined
          onClick={() => toggleSide(stateCollapsed)}
          className='trigger'
        />
      ) : (
        <MenuFoldOutlined
          onClick={() => toggleSide(stateCollapsed)}
          className='trigger'
        />
      )}
    </Header>
  )
}

export default MyHeader
