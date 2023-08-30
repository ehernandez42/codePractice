import React from 'react'
import ReactDOM from 'react-dom'
//exercise 1 of day 6

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26', '27', '28', '29', '30', '31']
//stopped here; have to figure out how how to sort numbers into prime, odd, or even numbers
const NumberGenerator = () => {

    return (
        <div>

        </div>

    )
}


const App = () => {
    return (
        <div>
            <h1>30 DAYS OF REACT</h1>
            <h2>NUMBER GENERATOR</h2>
            <NumberGenerator />
        </div>
    )
}

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)