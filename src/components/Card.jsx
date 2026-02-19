import Social from '../components/Social.jsx';

function Card() {
    return (
        <section className="card">
            <h3>I build compelling user experiences for the web.</h3>
            <p>
                I am a <strong>software engineer</strong> focused on building high-quality, user-centered digital experiences. Throughout my career, I have worked in marketing and engineering teams - and have an extensive background in <strong>e-commerce</strong>, <strong>SaaS</strong>, <strong>AI</strong>, and <strong>data science</strong>. I bring a strong blend of technical expertise and product-driven thinking.</p>

            <p>
                <span className="">Technology I work with:</span>
            </p>

            <div className="tech home--tech">
                <div className="tech__stack__wrap">
                    <div className="tech__stack">HTML</div>
                    <div className="tech__stack">CSS</div>
                    <div className="tech__stack">SASS</div>
                    <div className="tech__stack">Javascript</div>
                    <div className="tech__stack">Vue.js</div>
                    <div className="tech__stack">Next.js</div>
                    <div className="tech__stack">React</div>
                    <div className="tech__stack">Angular</div>
                    <div className="tech__stack">GraphQL</div>
                    <div className="tech__stack">Python</div>
                    <div className="tech__stack">PHP</div>
                    <div className="tech__stack">Laravel</div>
                    <div className="tech__stack">Docker</div>
                    <div className="tech__stack">Github</div>
                    <div className="tech__stack">Yaml</div>
                    <div className="tech__stack">Ci/Cd</div>
                    <div className="tech__stack">Jira</div>
                </div>
            </div>

            <Social />
        </section>
    );
}

export default Card;
