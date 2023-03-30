import React from 'react';
import './Bookmarked.css';

const Bookmarked = ({ bookmarkedItems }) => {
    return (
        <div className='bookmarked-container'>
            <h2 className='bookmarked-count'>Bookmarked Blogs : {bookmarkedItems.length}</h2>
            {
                bookmarkedItems.map((name, index) => <p key={index} className="bookmark-title">{name}</p>)
            }
        </div>
    );
};

export default Bookmarked;