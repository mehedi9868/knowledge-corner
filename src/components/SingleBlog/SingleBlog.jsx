import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleBlog.css';
const SingleBlog = ({ blog, handleSpentTime }) => {

    return (
        <div className='blog-container'>
            <div className="card">
                <div className="card-img">
                    <img src={blog.cover} alt="Card Image" />
                </div>
                <div className="card-info">
                    <div className='blog-info'>
                        <div className='author-info'>
                            <div className="card-author">
                                <img src={blog.author_img} alt="Author Image" />
                            </div>
                            <div>
                                <p className='author-name'>{blog.authorName}</p>
                                <span className="card-date">{blog.published} (4 Days ago)</span>
                            </div>
                        </div>
                        <div className="spent-time">
                            <span>Read Time: {blog.readTime}</span>
                            <button className='btn-bookmark' onClick={() => handleSpentTime(blog.readTime)}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                        </div>
                    </div>


                    <div className="blog-title">
                        <h3>{blog.blogTitle}</h3>
                    </div>
                    <div className="btn-read">
                        <button>Mark as read</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default SingleBlog;