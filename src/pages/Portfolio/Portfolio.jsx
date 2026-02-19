import Card from '../../components/Card.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import projects from './projects.js';

function Portfolio() {
    const [activeProject, setActiveProject] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const closeLightbox = () => {
        setIsClosing(true);

        setTimeout(() => {
            setActiveProject(null);
            setIsClosing(false);
        }, 300); // match animation duration
    };

    useEffect(() => {
        document.body.className = 'portfolio';

        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <>
            <div className="wrapper">
                <Card />
                <section className="content">
                    <h2>Past Projects</h2>

                    <div className="gallery">
                        {projects.map((project) => (
                            <div className="gallery__item" key={project.id}>
                                <div className="gallery__img">
                                    <button
                                        className="zoom"
                                        onClick={() =>
                                            setActiveProject(project)
                                        }
                                    >
                                        <img
                                            src={project.src}
                                            loading="lazy"
                                            alt={project.alt}
                                        />
                                    </button>
                                </div>

                                <div className="gallery__info">
                                    <h3>{project.title}</h3>
                                    <p>{parse(project.desc)}</p>
                                    <div className="tech">
                                        <div className="tech__used">
                                            <strong>Technology used:</strong>
                                        </div>
                                        <div className="tech__stack__wrap">
                                            {project.tech.map((t, index) => (
                                                <div
                                                    className="tech__stack"
                                                    key={index}
                                                >
                                                    {t.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="gallery__links">
                                        <Link
                                            to={project.link}
                                            className="gallery__link"
                                        >
                                            {project.linkText}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {activeProject && (
                        <div
                            className={`lightbox ${isClosing ? 'closing' : ''}`}
                            onClick={closeLightbox}
                        >
                            <button className="close" onClick={closeLightbox}>
                                &times;
                            </button>

                            <div
                                className="lightbox__content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={activeProject.src}
                                    alt={activeProject.alt}
                                />
                                <p>{activeProject.alt}</p>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}

export default Portfolio;
