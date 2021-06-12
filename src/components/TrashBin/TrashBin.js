import React from 'react';

const TrashBin = ({ changeBoard }) => {
    return (
        <div>
            <button
                type="button"
                onClick = { () => changeBoard(true)}
            >Workspace</button>      
            
        </div>
    )
}

export default TrashBin;
