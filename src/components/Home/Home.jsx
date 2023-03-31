import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const [bookmarkedItems, setBookmarkedItems] = useState([]);
    const handleBookmark = (blogTitle) => {
        if (bookmarkedItems.includes(blogTitle)) {
            toast.error('Blog already bookmarked!');
        }
        const bookMarked = [...bookmarkedItems, blogTitle];
        setBookmarkedItems(bookMarked);
    }
    return (
        <div className='home-container'>
            <Blogs
                handleSpentTime={handleSpentTime}
                handleBookmark={handleBookmark}
            ></Blogs>
            <div className='side-container'>
                <SpentTime spentTime={spentTime}></SpentTime>
                <Bookmarked
                    bookmarkedItems={bookmarkedItems}
                ></Bookmarked>
            </div>
        </div>
    );
};

export default Home;