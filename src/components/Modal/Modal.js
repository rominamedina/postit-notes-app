import React from 'react';
import CreatePostit from '../CreatePostit/CreatePostit';
import CloseIcon from '@material-ui/icons/Close';
import '../Modal/Modal.css';

const Modal = ({ show, onClose, createPostit }) => {


    return show ? 
        (<div className="modal">
            <div className="modal-content">
            <button className="button" onClick={ onClose }><CloseIcon/></button>
            <CreatePostit
                createPostit={ createPostit }
            />
              
            </div>   
        </div>)
        :
        null;
}

export default Modal;
