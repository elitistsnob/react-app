
import Card from '../components/Card.jsx';
import Timeline from '../components/Timeline.jsx';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.body.className = 'homepage'; // set body class

        return () => {
            document.body.className = ''; // cleanup on unmount
        };
    }, []);

    return (
        <div className="wrapper">
            <Card />
            <div className="content">
                <div className="">
                    <Timeline/>
                </div>
            </div>
        </div>
    );
}

export default Home;
