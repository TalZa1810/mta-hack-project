import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentProfile from "../StudentProfile/StudentProfile.js";



class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                      <StudentProfile> </StudentProfile>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
