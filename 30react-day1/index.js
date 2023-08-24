// index.js
import React from 'react'
import ReactDOM from 'react-dom'


const title = 'Hexacolor Generator'
const Header = () => (
    <header>
        <div className={'header-wrapper'}>
            <h1>{title}</h1>
        </div>
    </header>
)

const buttonStyles = {
    background: 'black',
    color: 'white',
}

const Button = () => <button style={buttonStyles}> action </button>

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}


const divStyle = {
    background: `${hexaColor()}`,
    padding: '10px',
    margin: '2px',
    border: 'none',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
}

const HexaColor = () => (
    <div>
        <div style={divStyle}>
            {hexaColor()}
        </div>
        <div style={divStyle}>
            {hexaColor()}
        </div>
    </div>
    )
//this is where I left off: trying to separate the different divs so that they
//can have their own background colors
const hexaSectionsFormatted = HexaColor.map((hexaColor) => <div>{HexaColor}</div>)

const App = () => (
    <div>
        <Header />
        <HexaColor />
        <p>{hexaSectionsFormatted}</p>
        <Button />
    </div>

)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)