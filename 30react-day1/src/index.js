import React from 'react';
import ReactDOM from 'react-dom';
import CSSimg from "./images/css_logo.png";
import HTMLimg from "./images/html_logo.png"
import ReactImg from "./images/react_logo.png"


const header = (
    <header>
        <div className='header-wrapper'>
        <h1>Welcome to 30 days of react</h1>
        <h2>Getting Started React</h2>
        <h3>Javascript Library</h3>
        <p>Eleazar Hernandez</p>
        </div>
    </header>
)

const main = (
    <main>
        <p>Pre-requisites to get started {' '}
        <strong>
            <em>react.js</em>
        </strong>
        </p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>
    </main>
)

const footer = (
    <footer>
        <div className='footer-wrapper'>
        <p>Copyright 2023</p>
        </div>
    </footer>
)

const technologies = (
    <main>
    <h2 className={"tech-title"}>Front End Technologies</h2>
    <div className="technologies-section">
        <img src={CSSimg}  alt={"css"}/>
        <img src={HTMLimg} alt={"html"} />
        <img src={ReactImg} alt="react img" />
    </div>
    </main>
)

const app = (
    <div>
        {header}
        {main}
        {technologies}
        {footer}
    </div>
)

    const rootElement = document.getElementById('root')
    ReactDOM.render(app, rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

