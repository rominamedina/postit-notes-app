import React from 'react';

const Workspace = ({ changeBoard }) => {
    return (
        <div>
            <button
                type="button"
                onClick = { () => changeBoard(false)}
            >Trash Bin</button>            
        </div>
    )
}

export default Workspace;
