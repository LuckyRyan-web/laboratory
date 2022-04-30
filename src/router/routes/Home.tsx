/** 首页 */
import React from 'react'
import { createRoutes } from '@/router/utils'
import Home from '@/pages/Index'

export default {
    /** 路由路径 */
    routePaths: {
        Home: '/',
    },
    /** 路由配置 */
    routes: () =>
        createRoutes([
            {
                path: '/',
                element: <Home />,
            },
        ]),
}
