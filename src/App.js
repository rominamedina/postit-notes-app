import React, { useState } from "react";
import Workspace from "./components/Workspace/Workspace";
import TrashBin from "./components/TrashBin/TrashBin";

function App() {

  const [ changeboard, changeBoard ] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Post-it Notes App</h1>
      </header>
      {changeboard ? 
      (<Workspace changeBoard={ changeBoard }/>)
      :
      (<TrashBin changeBoard={ changeBoard }/>)}
    </div>
  );
}

export default App;
