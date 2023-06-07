import React from 'react'
import { Button } from 'antd'
import { BulbOutlined, UserOutlined } from '@ant-design/icons' 
import '../styles/user-info.scss'

const UserInfo = () => {
    return (
        <div className='user-info'>
            <ul>
                <li className='name'>
                    像素脉动
                    <BulbOutlined style={{ color: 'var(--theme-antd)' }} />
                </li>
                <li>576217628@qq.com</li>
                <li>hebei · shijiazhuang</li>
                <li>拥有60+年的前端开发经验</li>
                <li>前端开发项目：576217628</li>
            </ul>
            <Button id="get-user-info" type="primary" icon={<UserOutlined />}>关于更多作者信息</Button>
        </div>
    )
}

export default UserInfo