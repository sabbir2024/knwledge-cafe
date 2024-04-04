import React from 'react';

const Bookmark = ({ bookmark }) => {
    return (
        <div>
            <ol>
                <li className="text-2xl font-bold p-3">{bookmark.title}</li>
            </ol>
        </div>
    );
};

export default Bookmark;