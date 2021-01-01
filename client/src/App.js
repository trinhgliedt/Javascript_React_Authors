import React from 'react';
import './App.css';
import { Link, Redirect, Router } from "@reach/router";


import NewAuthor from "./views/NewAuthor";
import Authors from "./views/Authors";
// import SingleAuthor from "./views/SingleAuthor";
import EditAuthor from "./views/EditAuthor";


function App() {
  return (
    <div className="App">
     <Router>
          <NewAuthor path="/authors/new" />
          <Redirect from="/" to="/authors" noThrow="true" />
          <Authors path="/authors" />
          {/* <SingleAuthor path="/authors/:id" /> */}
          <EditAuthor path="/authors/:id/edit" />
        </Router>

    </div>
  );
}

export default App;
