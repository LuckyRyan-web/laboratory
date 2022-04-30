import React from 'react'
import {
    NavigateFunction,
    useNavigate as useReactRouterNavigate,
} from 'react-router-dom'
import mitt from 'mitt'
import { useMount, useUnmount } from 'ahooks'
// import querystring from 'querystring'

/** 导航选项 */
interface NavigateOptions {
    /** 是否是 reaplace */
    replace?: boolean
    /** 路由 query 参数 */
    query?: Record<string, any>
    /** 路由路径参数 */
    params?: Record<string, any>
}

/** 导航方法参数 */
interface NavigateParams {
    to: string
    options?: NavigateOptions
}

/** 事件 bus */
const bus = mitt<{
    navigate: NavigateParams
}>()

/** 导航 */
function navigate(
    to: string,
    options?: NavigateOptions,
    reactRouterNavigateFun?: NavigateFunction,
): void
function navigate(
    delta: number,
    reactRouterNavigateFun?: NavigateFunction,
): void
function navigate(
    arg1: number | string,
    arg2?: NavigateOptions | NavigateFunction,
    arg3?: NavigateFunction,
): void {
    const to = typeof arg1 === 'string' ? arg1 : ''
    const delta = typeof arg1 === 'number' ? arg1 : void 0
    const options = typeof arg2 === 'function' ? void 0 : arg2
    const reactRouterNavigateFun = typeof arg2 === 'function' ? arg2 : arg3

    if (delta) {
        reactRouterNavigateFun
            ? reactRouterNavigateFun(delta)
            : window.history.go(delta)
        return
    }

    // 如果没有 reactRouterNavigateFun, emit 事件给 NavigateWrapper 组件去跳转
    if (!reactRouterNavigateFun) {
        bus.emit('navigate', {
            to,
            options,
        })
        return
    }

    const { replace = false, query = {}, params = {} } = options || {}
    const pathname = to.replace(/:([\w]+)/g, (math, key) =>
        decodeURIComponent(params[key] || ''),
    )
    // const search = querystring.stringify(query)
    // console.log(pathname, search, replace)

    reactRouterNavigateFun(
        {
            pathname,
            // search,
        },
        {
            replace,
        },
    )
}

export { navigate }

/** 导航 hooks, react-router useNavigate 代替品 */
export function useNavigate() {
    const reactRouterNavigate = useReactRouterNavigate()

    function __navigate(to: string, options?: NavigateOptions): void
    function __navigate(detal: number): void
    function __navigate(arg1: string | number, options?: NavigateOptions) {
        if (typeof arg1 === 'string') {
            return navigate(arg1, options, reactRouterNavigate)
        } else {
            return navigate(arg1, reactRouterNavigate)
        }
    }

    return __navigate
}

/** 导航包裹组件，用来脱离 react hooks,接收全局导航跳转 */
export const NavigateWrapper: React.FC = (props) => {
    const reactRouterNavigate = useReactRouterNavigate()

    const navigateHandler = (e: NavigateParams) => {
        navigate(e.to, e.options, reactRouterNavigate)
    }

    useMount(() => {
        bus.on('navigate', navigateHandler)
    })

    useUnmount(() => {
        bus.off('navigate', navigateHandler)
    })

    return <>{props.children}</>
}
