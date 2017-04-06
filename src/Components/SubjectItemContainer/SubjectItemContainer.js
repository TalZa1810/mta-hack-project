import SubjectItem from './SubjectItem';
import * as React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class SubjectItemContainer extends React.Component {
    handleRaiseAQuestionClick() {
        alert('raise');
    };

    handleSubmitClick() {
        alert('submit');
    };

    handleExerciseClick(event, parm) {
        console.log(parm);
    };

    handleOnAnswerSubmit(questionSubmitted) {
        this.state.subjectItems[questionSubmitted].points = Math.round(Math.random() * 10);

        this.setState(this.state);

        setTimeout(()=> {
            this.state.subjectItems[questionSubmitted].teacherRating = Math.round(Math.random() * 10);

            this.setState(this.state);
        }, 5000);
    }

    state = {
        style: {
            margin: 6
        },
        subjectItems: [{
            questionNumber: 0,
            questionText: 'What is the square root of 25?',
            points: "Not Graded",
            teacherRating: "Not Rated",
            title: "Exercise 1",
        }, {
            questionNumber: 1,
            questionText: 'What is the capital of Norway?',
            points: "Not Graded",
            teacherRating: "Not Rated",
            title: "Exercise 2",
        }, {
            questionNumber: 2,
            questionText: 'What is the complexity runtime of D\'jakstra over an non-cyclical graph?',
            points: "Not Graded",
            teacherRating: "Not Rated",
            title: "Exercise 3",
        }]
    };

    render() {
        return (
            <div className="subject-container">
                <br/>
                {this.state.subjectItems.map((item, index)=> {
                    return <SubjectItem
                        questionNumber={item.questionNumber}
                        key={item.questionNumber}
                        handleRaiseAQuestionClick={this.handleRaiseAQuestionClick}
                        handleSubmitClick={this.handleSubmitClick}
                        handleExerciseClick={this.handleExerciseClick}
                        handleOnAnswerSubmit={this.handleOnAnswerSubmit.bind(this)}
                        questionText={item.questionText}
                        title={item.title}
                        points={item.points}
                        teacherRating={item.teacherRating}
                    />
                })}


            </div>
        )
    }
}

export default SubjectItemContainer;
