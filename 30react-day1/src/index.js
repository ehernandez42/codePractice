import React from 'react';
import ReactDOM from 'react-dom';

const jsxElement = <h1>This is a JSX element</h1>
const rootElement  = document.getElementById('root')
const title = <h2>Getting Started React</h2>

ReactDOM.render(jsxElement, rootElement)
ReactDOM.render(title, rootElement //stopped here at renedering the browser wioth an h2 element



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

