

const Blog = ({ blog, handelMarkAsRead, handleBookmarks }) => {
    // console.log(Object.keys(blog))

    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="py-6">
            <img className="w-full" src={cover} alt="cover" />
            <div>
                <div className="flex gap-3 justify-between items-center">
                    <div className="flex space-x-3 py-4">
                        <img className="size-[60px] bg-slate-500 object-cover rounded-full" src={author_img} alt="author_img" />
                        <div >
                            <h1 className="text-lg font-bold">{author}</h1>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <h1 >{reading_time} min read
                        <span className="cursor-cell" onClick={() => handleBookmarks(blog)}>🧾</span></h1>
                </div>
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex space-x-2">
                <p>#{hashtags[0]}</p>
                <p>#{hashtags[1]}</p>
            </div>
            <button className="text-amber-800 w-1/3 border-b-2" onClick={() => handelMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};

export default Blog;