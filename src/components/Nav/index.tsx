/**
 * @author liuyuan
 * @date 2022-04-30 16:30
 * @since 0.1.0
 */

import React, { useState } from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'
import { Menu } from 'antd'

const navItem = [
    {
        label: 'react',
        key: 'react',
    },
]

interface NavProps {}

const Nav: React.FC<NavProps> = (props) => {
    const [menu, currentMenu] = useState('react')

    return (
        <Menu selectedKeys={[menu]} mode='horizontal' className={style.navTop}>
            {navItem.map((v) => (
                <Menu.Item key={v.key}>{v.label}</Menu.Item>
            ))}
        </Menu>
    )
}

export default React.memo(Nav)
