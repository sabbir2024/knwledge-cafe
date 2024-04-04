
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Headers from './components/headers/Headers'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTimes, setReadingTimes] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    // console.log('bookmarks', blog)
    setBookmarks(newBookmarks);
  }

  const handelMarkAsRead = (id, time) => {
    // console.log("Mark as read clicked", id, time)
    const newReadingTime = readingTimes + time;
    setReadingTimes(newReadingTime);

  }
  // console.log(readingTimes);

  return (
    <div className='px-4 mx-auto '>
      <Headers></Headers>
      <div className='md:flex space-x-2'>
        <Blogs
          handelMarkAsRead={handelMarkAsRead}
          handleBookmarks={handleBookmarks}
        ></Blogs>
        <Bookmarks
          readingTimes={readingTimes}
          bookmarks={bookmarks}
        ></Bookmarks>
      </div>
    </div>
  )
}

export default App
