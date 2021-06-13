import React from 'react';
import ButtonPostit from '../ButtonPostit/ButtonPostit';

const Postit = ({ postitId, movePostit, showComponent, deletePostit }) => {

    let postit = JSON.parse(localStorage.getItem(postitId))

    return (
        <div>
            <p>Title: <span>{ postit.title }</span></p>
            <p>Date: <span>{ postit.date }</span></p>
            <p>Description: <span>{ postit.description }</span></p>

            <ButtonPostit
                postitId={ postitId }
                movePostit={ movePostit }
                showComponent={ showComponent }
                deletePostit={ deletePostit }
            />   
        </div>
    )
}

export default Postit;
