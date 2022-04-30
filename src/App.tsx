import React from 'react'
// import style from './App.module.scss'
import Index from '@/pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getRoutes, NavigateWrapper } from '@/router'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {getRoutes()}
                    {/* <Route path='' element={<Index />}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
