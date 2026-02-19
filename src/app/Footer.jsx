import Nav from '../components/Nav.jsx';

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright">&copy; {new Date().getFullYear()} Kent Pribbernow.</p>
            <Nav />
        </footer>
    );
}

export default Footer;