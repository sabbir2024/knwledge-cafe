import Bookmark from "./Bookmark";


const Bookmarks = ({ readingTimes, bookmarks }) => {
    // console.log(Object.keys(bookmarks))
    return (
        <div className="md:w-1/3 bg-slate-400 m-3 rounded-lg p-4">
            <h3 className="text-2xl font-bold mx-auto">Spent time on read : {readingTimes} min</h3>
            <hr />
            {/* <h3 className="text-2xl font-bold"><li>{bookmarks.title}</li></h3> */}
            <div className="w-11/12 mx-auto">
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                }
            </div>

        </div>
    );
};

export default Bookmarks;