import React, { Fragment } from 'react';
import Form from '../Form/Form';

const EditPostit = ({ postitId }) => {

    let postit = JSON.parse(localStorage.getItem(postitId));
 
    const [ postit, updatePostit ] = useState(JSON.parse(localStorage.getItem(postitId)))

    const [ error, showError ] = useState(false)

    const updateState = (evento) => {
        updatePostit({
            ...postit,
            [evento.target.name] : evento.target.value
        })
    }

    const { title, date, description } = postit;

    const submitPostit = (e) => {
        e.preventDefault();

        if(title.trim() === '' || date.trim() === '' || description.trim() === '') {
            showError(true)
            return;
        }

        showError(false)

        //postit.id=uuid();

        updatePostit(postit);

        actualizarPostIt({
            title: '',
            date: '',
            description: ''
        })
    }


    return (
        <Fragment>

        { error ? <p className="alertError">All fields are required</p> : null }
           <Form
               id={id}
               postit={ postit }
               updateState={ updateState }
               submitPostit={ submitPostit }
               updatePostitt={ updatePostit }
           />
       </Fragment>

    )
}

export default EditPostit
