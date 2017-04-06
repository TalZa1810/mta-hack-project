import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentProfile from "../StudentProfile/StudentProfile.js";
import Store from "../Store/Store";



class App extends Component {
    render() {
        return (<MuiThemeProvider>
        <div className="App">
            <StudentProfile> </StudentProfile>
            <Store></Store>
            </div>
            </MuiThemeProvider>);
    }
}

export default App;
