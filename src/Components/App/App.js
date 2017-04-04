import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hello World!</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/Components/App/App.js</code> and save to reload.<br/>
                    The file watcher is still in beta so it may not work perfectly

                </p>
            </div>
        );
    }
}

export default App;
