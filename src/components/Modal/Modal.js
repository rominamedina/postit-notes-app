import React from 'react';
import CreatePostit from '../CreatePostit/CreatePostit';
import '../Modal/Modal.css';

const Modal = ({ show, onClose, createPostit }) => {


    return show ? 
        (<div className="modal">
            <div className="modal-content">
            <button className="button" onClick={ onClose }>&times;</button>
            <CreatePostit
                createPostit={ createPostit }
            />    
            </div>   
        </div>)
        :
        null;
}

export default Modal;
