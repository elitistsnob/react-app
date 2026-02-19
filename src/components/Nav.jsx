import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/" className="home-link">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio" className="portfolio-link">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" className="contact-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
