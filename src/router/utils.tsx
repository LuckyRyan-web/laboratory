import { Route, RouteObject } from 'react-router-dom'

/** 路由配置 */
export interface RouteConfig extends RouteObject {
    children?: RouteConfig[]
}

/** 创建路由 */
export function createRoutes(routes: RouteConfig[]) {
    return (
        <>
            {routes.map((route, ix) => (
                <Route {...route} key={ix} element={route.element}>
                    {route.children && createRoutes(route.children)}
                </Route>
            ))}
        </>
    )
}
