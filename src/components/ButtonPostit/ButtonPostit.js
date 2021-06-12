import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import ArchiveIcon from '@material-ui/icons/Archive';


const ButtonPostit = ({ movePostit, postitId, showComponent }) => {

    const [visible, setVisible] = useState(false);

    return (
        <div>
        {showComponent ?
            (<ArchiveIcon onClick={ () => movePostit(postitId) } />)                   
            :
            (<RestoreFromTrashIcon onClick={ () => movePostit(postitId) } />)}

        {showComponent ?
            (<EditIcon
                id="boton"
                className='icon-button'
            />)
            :
            (<DeleteIcon 
                variant="contained"
                type="button"
                id="boton"
                className='icon-button'
            />)}

            {visible ? 
                (<Modal 
                    show={visible}
                    onClose={() => setVisible(false)}
                />) 
                : null}    
        </div>
    )
}

export default ButtonPostit
