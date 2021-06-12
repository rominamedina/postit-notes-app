import React, { useState } from 'react';
import CreatePostit from '../CreatePostit/CreatePostit';
import Postit from '../Postit/Postit';

const Workspace = ({ changeBoard }) => {

    const postitIds = () => {
        let ids={ ...localStorage };
        return Object.keys(ids).filter(s => s.includes('active'));
    }

    const [ postits, savePostits ] = useState(postitIds)

    const createPostit = (postit) => {
        let postitId = 'active-' + postit.id;
        localStorage.setItem(postitId, JSON.stringify(postit));

        savePostits(postitIds);
    }

    return (
        <div>
            <CreatePostit
                createPostit={ createPostit }
            />
            <div>
                {postits.map(postitId => (
                    <Postit
                        key={ postitId }
                        postitId={ postitId}
                    />
                ))}
            </div>
            <button
                type="button"
                onClick = { () => changeBoard(false) }
            >Trash Bin</button>            
        </div>
    )
}

export default Workspace;
