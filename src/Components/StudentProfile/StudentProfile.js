import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import StudentProgress from './StudentProgress';


const StudentProfile = () => (

    <div className="header">

        <div className="header-profile">
            <Avatar className="student-avatar"> </Avatar>
            <h1 className="student-name">Welcome Tal Zaidman </h1>
        </div>
        <div className="header-status">
            <div className="progress-row">
                <h3 className="level-number">Level 5</h3>
                <StudentProgress className="level-progress"> </StudentProgress >
            </div>

            <div className="progress-row">
                <h4 className="points-next-level"> XP 2 next lvl </h4>
                <StudentProgress className="student-progress"> </StudentProgress >

            </div>
        </div>

        <RaisedButton className="avatar-store-btn" label="Go to Avatar Store" OnClick />



    </div>
);

export default StudentProfile;