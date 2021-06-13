import React, { useState } from "react";
import Workspace from "./components/Workspace/Workspace";
import TrashBin from "./components/TrashBin/TrashBin";
import Nav from "./components/Nav/Nav";
import './App.css';

function App() {

  const [ showcomponent, showComponent ] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div className="border"></div>
        <h1>Post-it Notes App</h1>
        <img className="underline" src="//d17dednewomw88.cloudfront.net/assets/dist/fonts/underline.svg"></img>  
      </header>
      <Nav
        showComponent={ showComponent }
      />      
        {showcomponent ? 
          (<Workspace showComponent={ showComponent }/>)
          :
          (<TrashBin showComponent={ showComponent }/>)}
    </div>
  );
}

export default App;
