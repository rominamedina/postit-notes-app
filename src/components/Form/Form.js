import React, {Fragment} from "react";

const Form = ( props ) => {

    return (
        <Fragment>
            <form onSubmit={ props.submitPostit }>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={ props.updateState }
                    value={ props.title }>
                </input>

                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    onChange={ props.updateState }
                    value={ props.date }>
                </input>

                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    onChange={ props.updateState }
                    value={ props.description }>
                </textarea>

                <button
                    type="submit"
                >Submit</button>
            </form>
        </Fragment>
    )
}

export default Form;
