import React from 'react'
import ReactDOM from 'react-dom'
import asabeneh from './Images/asabeneh.jpg'


const Header = () => {
    const title = 'Hexacolor Generator'
    const headerWrapper = {
        textAlign: 'center',
        fontFamily: 'monospace',
    }
    return (
        <header>
            <div>
                <h1 style={headerWrapper}>{title}</h1>
            </div>
        </header>

    )
}


const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

//best practice: using backticks (``) hard codes the first hex color and ignores the rest
//naming a variable and assigning it the hex function is what works (see below)
const HexaColor = () => {
    const bgColor = hexaColor();
    const divStyle = {
        //do not use this -> background: `${hexaColor()}`
        background: bgColor,
        padding: '10px',
        margin: '2px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: 'white',
    }
    return (
        <div style={divStyle}>
            <h2>{bgColor}</h2>
        </div>
    )
}

const Container = () => {
    const skillSet = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node',
        'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis',
        'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

    //stopped here -> formatting the list items and making them look pretty etc.
    const skillStyles = {
        background: 'purple',
    }
    const skillsFormat = skillSet.map((skill) => <li key={skill} style={skillStyles}>{skill}</li>)
    return skillsFormat
}


const Image = () => {

    const divStyle = {
        fontFamily: 'arial',
    }
    const imageStyle = {
        borderRadius: '400px',
        width: '25%',
    }
    return (
        <div style={divStyle}>
            <img src={asabeneh} style={imageStyle} />
            <h3>Asabeneh Yetayeh</h3>
            <p>Senior Developr, Finland</p>
            <h4>Skills</h4>

        </div>
    )
}

const Exercise2 = () => {

    return (
        <div>
            <Image />
            <Container />
        </div>
    )
}


const App = () => (
    <div>
        <Header />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <Exercise2 />
    </div>

)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)