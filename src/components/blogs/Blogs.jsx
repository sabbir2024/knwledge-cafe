import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({ handelMarkAsRead, handleBookmarks }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json()
                .then(data => setBlogs(data))
            )
    }, []);
    // console.log(Object.values(blogs))
    return (
        <div className="md:w-2/3">
            <div >
                {
                    blogs?.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handelMarkAsRead={handelMarkAsRead}
                        handleBookmarks={handleBookmarks}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;