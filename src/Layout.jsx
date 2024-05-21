import { Outlet } from "react-router-dom"
import { Footer } from "@/features/ui/Footer"
import { Header } from "@/features/ui/Header"

import './styles/layout.css'

export const Layout = ()=>{
    return (
        <>
           <Header />
           <Outlet />
           <Footer />
        </>
    )
}