import React from 'react';

const Postit = ({ postitId }) => {

    let postit = JSON.parse(localStorage.getItem(postitId))

    return (
        <div>
            <p>Title: <span>{postit.title}</span></p>
            <p>Date: <span>{postit.date}</span></p>
            <p>Description: <span>{postit.description}</span></p>    
        </div>
    )
}

export default Postit;
