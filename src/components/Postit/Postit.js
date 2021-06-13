import React from 'react';
import ButtonPostit from '../ButtonPostit/ButtonPostit';
import './Postit.css'

const Postit = ({ postitId, movePostit, showComponent, deletePostit }) => {

    let postit = JSON.parse(localStorage.getItem(postitId))

    return (
        <div className="square">
            <p className="title"><span>{ postit.title }</span></p>
            <p className="text"><span>{ postit.date }</span></p>
            <p className="text"><span>{ postit.description }</span></p>

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
