import React, { useState, Fragment } from 'react';
import { v4 as uuid } from "uuid";
import Form from '../Form/Form';

const CreatePostit = ({ createPostit }) => {

    const [ postit, updatePostit ] = useState({
        title: '',
        date: '',
        description: ''
    })

    const [ error, showError ] = useState(false)

    const updateState = (e) => {
        updatePostit({
            ...postit,
            [ e.target.name ] : e.target.value
        })
    }

    const { title, date, description } = postit;

    const submitPostit = (e) => {
        e.preventDefault();

        if(title.trim() === '' || date.trim() === '' || description.trim() === '') {
            showError(true)
            return;
        }

        showError(false);

        postit.id=uuid();

        createPostit(postit);

        updatePostit ({
            title: '',
            date: '',
            description: ''
        })
    }

    return (
        <Fragment>
            { error ? <p>All fields are required</p> : null }
            <Form
                updateState={ updateState }
                submitPostit={ submitPostit }
                error={ error }
            />    
        </Fragment>
    )
}

export default CreatePostit;
