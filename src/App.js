import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  // 3 parameters for react.createelement,
  // 1st what type of element,
  // 2nd any attributes to the component,
  // 3rd whatever children you want to pass to the element

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// render to the DOM
render(<App />, document.getElementById("root"));
