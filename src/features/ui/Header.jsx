import { Link } from "react-router-dom"
import style from "@/styles/header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link className={style.navlink} to="/">Home</Link>
                <Link className={style.navlink} to="/table">Table</Link>
                <Link className={style.navlink} to="/forms">Forms</Link>
                <Link className={style.navlink} to="/search-auto-complete">Search Auto Complete</Link>
            </nav>
        </header>
    )
}