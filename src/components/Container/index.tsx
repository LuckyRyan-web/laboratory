/**
 * @author liuyuan
 * @date 2022-05-01 11:43
 * @since 0.1.0
 */

import React, { PropsWithChildren } from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'
import { Layout } from 'antd'
import Footer from '@/components/Footer'

interface ContainerProps {
    header: JSX.Element
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = (props) => {
    return (
        <Layout className={style.container}>
            <Layout.Header>{props.header}</Layout.Header>
            <Layout>
                <Layout.Content className={style.content}>
                    {props.children}
                </Layout.Content>
            </Layout>
            <Layout.Footer className={style.footer}>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}

export default React.memo(Container)
