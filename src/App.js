import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  // 3 parameters for react.createelement,
  // 1st what type of element,
  // 2nd any attributes to the component,
  // 3rd whatever children you want to pass to the element

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams  />
    </div>
  )
};

// render to the DOM
render(<App />, document.getElementById("root"));
