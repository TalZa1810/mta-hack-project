import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentProfile from "../StudentProfile/StudentProfile.js";




class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            onOpenDialog: false
        }
    }

    openDialog = () => {
        this.setState({onOpenDialog: true})
    }

    render() {
        const { onOpenDialog } = this.state;
        return (
            <MuiThemeProvider>
                <div className="App">
                    <StudentProfile onOpenDialog = {this.openDialog}> </StudentProfile>
                 </div>
            </MuiThemeProvider>

        )
    }
}

export default App;
