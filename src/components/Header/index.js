import { Header } from 'antd/lib/layout/layout'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleSide } from '../../state/actions/toggleActions'

const MyHeader = () => {
  const stateCollapsed = useSelector((state) => state.toggleSide)

  const dispatch = useDispatch()

  const toggleSide1 = bindActionCreators(toggleSide, dispatch)

  return (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      {stateCollapsed ? (
        <MenuUnfoldOutlined
          onClick={() => toggleSide1(stateCollapsed)}
          className='trigger'
        />
      ) : (
        <MenuFoldOutlined
          onClick={() => toggleSide1(stateCollapsed)}
          className='trigger'
        />
      )}
    </Header>
  )
}

export default MyHeader
