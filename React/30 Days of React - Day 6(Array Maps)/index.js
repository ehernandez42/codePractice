import React from 'react'
import ReactDOM from 'react-dom'
//exercise 1 of day 6; trying to get the different colors to changed based off of the parameters


const whatColorDoesItGet = ({ numbers }) => {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 0) {
            //this is where I was thinking of going through each
            //array item and then assign them a color based off
            //the if statement above
        }
    }

}


const Numbers = ({ numbers }) => {
    const sectionStyle = {
        display: 'inline-block',
        alignItems: 'center',
        listStyleType: 'none',
        height: '55px',
        width: '55px',
        padding: '50px',
        margin: 'auto',
        textAlign: "center",
        fontSize: '60px',
        border: '1px solid black',
    }

    // modifying array to array of li JSX
    const list = numbers.map((number) => {
        return (
            <div style={sectionStyle}>
            <li>{number}</li>
            </div>
            )
    })
    return list
}

const App = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31]

    const headingStyles = {
        textAlign: 'center',
    }

    return (
    <div>
        <h1 style={headingStyles}>30 DAYS OF REACT</h1>
        <h2 style={headingStyles}>NUMBER GENERATOR</h2>
        <Numbers numbers={numbers} />
    </div>
    )
}

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
