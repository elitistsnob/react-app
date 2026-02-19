import Nav from '../components/Nav.jsx';
import Logo from '../assets/images/logo.svg?react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div id="" className="header__logo">
                <Link to="/" aria-label="Elitist Snob logo"><Logo/ ></Link>
            </div>

            <div className="header__info">
                <h1>Kent Pribbernow</h1>
                <h2>Software Engineer | UX </h2>
                <Nav/>
            </div>
        </header>
    );
}

export default Header;