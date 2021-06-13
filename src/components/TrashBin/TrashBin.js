import React, { useState } from 'react';
import Postit from '../Postit/Postit';
import '../TrashBin/TrashBin.css';

const TrashBin = () => {

    const postitIds = () => {
        let ids = { ...localStorage };
        return Object.keys(ids).filter(s => s.includes('removed'));
    }

    const [ postits, savePostits ] = useState(postitIds);

    const movePostit = (postitId) => {
        let postit = JSON.parse(localStorage.getItem(postitId));
        localStorage.removeItem(postitId);
        localStorage.setItem('active-' + postit.id, JSON.stringify(postit));

        savePostits(postitIds);
    }
    
    const deletePostit = (postitId) => {
        localStorage.removeItem(postitId);

        savePostits(postitIds);
    }

    return (
        <div>
            <div className="container">
                { postits.map(postitId => (
                    <Postit
                        key={ postitId }
                        postitId={ postitId }
                        movePostit={ movePostit }
                        deletePostit={ deletePostit }
                    />
                ))}
            </div>       
        </div>
    )
}

export default TrashBin;
