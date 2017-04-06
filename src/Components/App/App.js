import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentProfile from "../StudentProfile/StudentProfile.js";



class App extends Component {
    render() {
        let style = {
            margin: 12,
        };

        return (
            <MuiThemeProvider>
                <div className="App">
                    <RaisedButton label="Default" style={style}/>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Hello World!</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/Components/App/App.js</code> and save to reload.<br/>
                        The file watcher is still in beta so it may not work perfectly

                    </p>
                    <StudentProfile> </StudentProfile>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
