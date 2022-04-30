import Home from './routes/Home'
export { navigate, useNavigate, NavigateWrapper } from './navigate'

export const routePaths = {
    Home: Home.routePaths,
}

export function getRoutes() {
    return <>{Home.routes()}</>
}
