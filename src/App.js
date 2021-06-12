import React, { useState } from "react";
import Workspace from "./components/Workspace/Workspace";
import TrashBin from "./components/TrashBin/TrashBin";

function App() {

  const [ showcomponent, showComponent ] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Post-it Notes App</h1>
      </header>
        {showcomponent ? 
          (<Workspace showComponent={ showComponent }/>)
          :
          (<TrashBin showComponent={ showComponent }/>)}
    </div>
  );
}

export default App;
