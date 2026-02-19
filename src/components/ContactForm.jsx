import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import '../styles/form.scss';

function ContactForm() {
    const { register, handleSubmit, reset } = useForm();
    const [showModal, setShowModal] = useState(false);

    function onSubmit(data) {
        emailjs
            .send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                data,
                import.meta.env.VITE_EMAIL_PUBLIC_ID
            )
            .then(() => {
                setShowModal(true); // open modal
                reset();

                // Close modal automatically after 5 seconds
                setTimeout(() => {
                    setShowModal(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Email error:', error);
            });
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete='on'>
                <div className="form__field">
                    <input placeholder="Name" name="name" {...register('name')} autoComplete='name'/>
                </div>

                <div className="form__field">
                    <input placeholder="Email" {...register('email')} />
                </div>

                <div className="form__field">
                    <textarea placeholder="Message" {...register('message')} />
                </div>

                <button className="button" type="submit">
                    Submit
                </button>
            </form>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.5 12.1316L11.7414 14.5L16 10M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z"
                                stroke="#22bb33"
                                stroke-width="1.2"
                            />
                        </svg>
                        <p>Email sent successfully!</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;
