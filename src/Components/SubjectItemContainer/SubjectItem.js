import './SubjectItem.css';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';

class SubjectItem extends React.Component {

    render() {
        let style = {
            margin: 6
        };


        return (
            <div>
                {/*<RaisedButton*/}
                {/*style={style}*/}
                {/*className="subject-item"*/}
                {/*primary={false}*/}
                {/*label="Raise a Question"*/}
                {/*onClick={this.props.handleRaiseAQuestionClick}*/}
                {/*/>*/}

                <RaisedButton
                    style={style}
                    primary={true}
                    label="Submit an answer"
                    onClick={this.props.handleSubmitClick}
                />

                <RaisedButton
                    style={style}
                    label={this.props.title}
                    onClick={()=> {
                        this.props.handleExerciseClick(event,4);
                    }}
                />

                <FlatButton style={style} label={this.props.points} disabled={true}></FlatButton>
                <FlatButton style={style} label={this.props.teacherRating} disabled={true}></FlatButton>
            </div>
        )

    }
}

export default SubjectItem;
