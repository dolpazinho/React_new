import './App.css';
import React from 'react';
import './components/App.css'
import 'normalize.css'
import Counter from './components/Counter'

/*import FunctionalButton from './components/FunctionalButton'
import ClassButton from './components/ClassButton'*/


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I will learn <code>React</code> because it is an amazing language :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Header = props => <h1>JSX expression Test</h1>

const agree = true;

const App = (props) => {
    return(
        <div>
            <FunctionalButton/>
        </div>
    )
}

 */


/*
class App extends Component {
    state = {
        times: 0
    }

    handleClick = (buttonName) => () => {
        console.log('Clicked Inside the <App />, button was', buttonName)
        this.setState({ times: this.state.times + 1})
    }
    render() {
        return (
            <div className="App">
                <FunctionalButton
                times = {this.state.times }
                onButtonClick={this.handleClick}
                />

                <ClassButton
                times = {this.state.times }
                onButtonClick={this.handleClick}
                />
            </div>
        )
    }
}
*/


/*
class App extends Component {
    state = {
        count:0
    }


    handleIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrease = () =>
        this.setState({
            count: this.state.count - 1
        })



    render() {
        return(
        <div className='App'>
            <h1>Current Count: {this.state.count}</h1>
            <button onClick={this.handleIncrease}>Increase</button>
            <button onClick={this.handleDecrease}>Decrease</button>
        </div>
        )
    }
}
*/



/*const App = props =>  <div>Inside App></div>*/


/*
const App = (props) => (
    <div>
        <FunctionalButton test='123' />
        <ClassButton />
    </div>
)
*/


/*function App (props) {
    return(
        <div>Inside App</div>
    )
}*/

/*return agree ? <h1>Agree</h1> : <h1>Disagree</h1>

if (agree) {
    return <h1>Agree</h1>
} else{
    return <h1>Disagree</h1>
}
}*/



const App = () => <Counter />

export default App
