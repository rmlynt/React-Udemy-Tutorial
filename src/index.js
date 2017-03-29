// Import prerequisite libaries from node modules

import React from 'react';
import ReactDOM from 'react-dom';

// Set API key constant from google apis

conts API_KEY = 'AIzaSyDEft832UAluWsImVp_6u3uBPirapPqNbs';

// Create a new component. This component will produce some HTML
// Utilizes 'fat arrow' function definition
// Rule: Only create one component per file.

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// JSX allows you to use < /> for self closing tags.
// Second argument is the container div from index.html

ReactDom.render(<App />, document.querySelector('.container'));
