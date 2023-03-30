import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmarked from '../Bookmarked/Bookmarked';
import SpentTime from '../SpentTime/SpentTime';
import './Home.css';

const Home = () => {
    const [spentTime, setSpentTime] = useState(0);
    const handleSpentTime = (time) => {
        setSpentTime(spentTime + time);
    }
    return (
        <div className='home-container'>
            <Blogs
                handleSpentTime={handleSpentTime}
            ></Blogs>
            <div>
                <SpentTime spentTime={spentTime}></SpentTime>
                <Bookmarked></Bookmarked>
            </div>
        </div>
    );
};

export default Home;