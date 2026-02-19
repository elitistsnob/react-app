import Card from '../components/Card.jsx';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm.jsx';

function Contact() {
    useEffect(() => {
        document.body.className = 'contact'; // set body class

        return () => {
            document.body.className = ''; // cleanup on unmount
        };
    }, []);

    return (
        <>
            <div className="wrapper">
                <Card />
                <section className="content">
                    <h2>Contact me</h2>
                    <ContactForm />
                </section>
            </div>
        </>
    );
}

export default Contact;
