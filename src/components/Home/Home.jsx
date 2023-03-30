import React from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmarked from '../Bookmarked/Bookmarked';
import SpentTime from '../SpentTime/SpentTime';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h2>hello from Home Compo:</h2>
            <div className='home-container'>
                <Blogs></Blogs>
                <div>
                    <SpentTime></SpentTime>
                    <Bookmarked></Bookmarked>
                </div>
            </div>
        </div>
    );
};

export default Home;