import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Postit from '../Postit/Postit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import '../Workspace/Workspace.css';

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

    //Editar un post-it:
    // const editPostit = (postitId) => {
    //     let postit = JSON.parse(localStorage.getItem(postitId))
    //     localStorage.setItem(postitId, JSON.stringify(postit));
    //     console.log(postitId)
    //     console.log(postit)

    //     guardarAllPostIts(postitIds);
    // }


    const checkIfEmpty = () => {
        let ids = { ...localStorage };
        let removedIds = Object.keys(ids).filter(s => s.includes('removed'));
        return removedIds.length > 0;
    }

    const [ visible, setVisible ] = useState(false);

    return (
        <div>

            <Modal
                show={ visible }
                onClose={ () => setVisible(false) }
                createPostit={ createPostit }
            />
            <div className="container">
                { postits.map(postitId => (
                    <Postit
                        key={ postitId }
                        postitId={ postitId }
                        movePostit={ movePostit }
                        showComponent={ showComponent }
                        editPostit={ postitId }
                    />
                )) }

                {checkIfEmpty() ?
                (<button className="circle-trash">
                    <DeleteIcon className="delete-icon"/>
                </button>)
                :
                (<button className="circle-trash">
                    <DeleteOutlineIcon className="delete-icon"/>
                </button>)}

                <button
                    className="circle-addpostit"
                    onClick={ () => setVisible(true) }
                    ><img 
                    className="circle-img"
                    src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png" alt="" />
                </button>
            </div>     
        </div>
    )
}

export default Workspace;
