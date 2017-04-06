import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentProfile from "../StudentProfile/StudentProfile.js";
import SubjectItemContainer from '../SubjectItemContainer/SubjectItemContainer'


class App extends Component {
    render() {
        let style = {
            margin: 12,
        };

        return (
            <MuiThemeProvider>
                <div className="App">
                    <StudentProfile/>
                    <SubjectItemContainer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
