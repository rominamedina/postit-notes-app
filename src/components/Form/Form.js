import React, { Fragment } from "react";
import NearMeIcon from '@material-ui/icons/NearMe';
import './Form.css';

const Form = ( props ) => {

    return (
        <Fragment>
            <form className="form" onSubmit={ props.submitPostit }>
                <label className="label">Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={ props.updateState }
                    value={ props.title }
                    className="input">
                </input>

                <label className="label">Date</label>
                <input
                    type="date"
                    name="date"
                    onChange={ props.updateState }
                    value={ props.date }
                    className="input">
                </input>

                <label className="label">Description</label>
                <textarea
                    type="text"
                    name="description"
                    onChange={ props.updateState }
                    value={ props.description }
                    className="input">
                </textarea>

                <button
                    type="submit"
                    className="buttonsubmit"
                ><NearMeIcon/>
                </button>
            </form>
        </Fragment>
    )
}

export default Form;
