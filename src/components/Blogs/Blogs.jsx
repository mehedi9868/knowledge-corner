import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css';
const Blogs = ({ handleSpentTime, handleBookmark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const loadBlogs = async () => {
            const res = await fetch('generated.json');
            const data = await res.json();
            setBlogs(data);
        }
        loadBlogs();
    }, [])
    return (
        <div className='blogs-container'>
            {
                blogs.map((blog) => <SingleBlog
                    key={blog._id}
                    blog={blog}
                    handleSpentTime={handleSpentTime}
                    handleBookmark={handleBookmark}
                ></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;