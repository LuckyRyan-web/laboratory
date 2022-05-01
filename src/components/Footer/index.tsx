/**
 * @author liuyuan
 * @date 2022-04-30 16:30
 * @since 0.1.0
 */

import React, { useCallback } from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'
import { Button } from 'antd'

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
    const link = useCallback(() => {
        window.open('https://beian.miit.gov.cn/', '_blank')
    }, [])

    return (
        <div className={style.text}>
            互联网ICP备案:
            <Button
                type='link'
                onClick={() => {
                    link()
                }}>
                粤ICP备2020117319号
            </Button>
        </div>
    )
}

export default React.memo(Footer)
