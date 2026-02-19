import LogoLinkedIn from '../assets/images/logo-linkedin.svg?react';
import LogoGithub from '../assets/images/logo-github.svg?react';
import { Link } from "react-router-dom";

function Social() {
    return (
        <nav className="social">
            <ul>
                <li>
                    <Link
                        to="https://www.linkedin.com/in/kentpribbernow/"
                        className="social__link"
                        target="_blank"
                    >
                        <LogoLinkedIn/>
                        <span>LinkedIn</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://github.com/elitistsnob"
                        className="social__link"
                        target="_blank"
                    >
                        <LogoGithub/>
                        <span>GitHub</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Social;
