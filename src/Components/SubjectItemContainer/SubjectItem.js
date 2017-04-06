import './SubjectItem.css';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ShowExerciseDialog from './ShowExerciseDialog';

class SubjectItem extends React.Component {

    render() {
        let style = {
            margin: 6
        };


        return (
            <div>
                <FlatButton style={style} label={this.props.questionText} disabled={true}></FlatButton>
                <ShowExerciseDialog
                    questionNumber={this.props.questionNumber}
                    questionText={this.props.questionText}
                    title={this.props.title}
                    handleOnAnswerSubmit={this.props.handleOnAnswerSubmit}
                />

                <FlatButton style={style} label={this.props.points} disabled={true}></FlatButton>
                <FlatButton style={style} label={this.props.teacherRating} disabled={true}></FlatButton>
                <hr/>
            </div>
        )

    }
}

export default SubjectItem;
