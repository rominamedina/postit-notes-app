import React, { useState } from 'react';
import Postit from '../Postit/Postit';

const TrashBin = ({ showComponent }) => {

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
            <button
                type="button"
                onClick = { () => showComponent(true) }
            >Workspace</button>  
            { postits.map(postitId => (
                <Postit
                    key={ postitId }
                    postitId={ postitId }
                    movePostit={ movePostit }
                    deletePostit={ deletePostit }
                />
            ))}        
        </div>
    )
}

export default TrashBin;
