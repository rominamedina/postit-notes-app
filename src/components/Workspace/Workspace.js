import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Postit from '../Postit/Postit';

const Workspace = ({ showComponent }) => {

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

    const movePostit = (postitId) => {
        let postit = JSON.parse(localStorage.getItem(postitId));
        localStorage.removeItem(postitId);
        localStorage.setItem('removed-' + postit.id, JSON.stringify(postit));

        savePostits(postitIds);
    }

    const [ visible, setVisible ] = useState(false);

    return (
        <div>
            <button
                onClick={ () => setVisible(true) }
            >Create Post-it Note</button>
            <Modal
                show={ visible }
                onClose={ () => setVisible(false) }
                createPostit={ createPostit }
            />
            <div>
                { postits.map(postitId => (
                    <Postit
                        key={ postitId }
                        postitId={ postitId}
                        movePostit={ movePostit }
                        showComponent={ showComponent }
                    />
                )) }
            </div>
            <button
                type="button"
                onClick = { () => showComponent(false) }
            >Trash Bin</button>            
        </div>
    )
}

export default Workspace;
