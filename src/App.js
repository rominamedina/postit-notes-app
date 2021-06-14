import React  from 'react';
import Routes from './components/Routes/Routes';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  return (
    <BrowserRouter>
    <div className="app-container">
      <div className="app-container__inner">
        <Switch>
          <Route exact path={`${Routes.HOME}`} component={Home} />
          <Route render={() => <h1>404 - not found</h1>} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
