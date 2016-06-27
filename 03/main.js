// New import syntax with Babel
import React from 'react';
import ReactDOM from 'react-dom';

// No need to specify file extension, as we defined it in resolve config
import { Alert } from './components/alert';
import { Counter } from './components/counter';

// Functional component, no events
const Main = (props) => {
  return (
    <div className="app">
      <Alert />
      <Counter />
    </div>
  );
}

// Mount component on DOM load
document.addEventListener("DOMContentLoaded",(event) => {
  ReactDOM.render(
    <Main />, document.getElementById('app')
  );
});
