import React from 'react'
// import style from './App.module.scss'
import Index from '@/pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getRoutes, NavigateWrapper } from '@/router'
import Nav from '@/components/Nav'
import Container from '@/components/Container'

const App = () => {
    return (
        <>
            <Container header={<Nav />}>
                <BrowserRouter>
                    <Routes>{getRoutes()}</Routes>
                </BrowserRouter>
            </Container>
        </>
    )
}

export default App
