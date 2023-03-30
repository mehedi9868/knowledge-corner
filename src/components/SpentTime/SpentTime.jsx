import React from 'react';
import './SpentTime.css';
const SpentTime = ({ spentTime }) => {
    return (
        <div className='spent-time-container'>
            <h5 className='spent-time'> Spent time on read : {spentTime} min</h5>
        </div>
    );
};

export default SpentTime;