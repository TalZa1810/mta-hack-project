import SubjectItem from './SubjectItem';
import * as React from 'react';

class SubjectItemContainer extends React.Component {
    handleRaiseAQuestionClick() {
        alert('raise');
    };

    handleSubmitClick() {
        alert('submit');
    };

    handleExerciseClick(event, parm) {

    };

    state = {
        style: {
            margin: 6
        },
        subjectItems: [{
            questionNumber: 1,
            questionText:'What is the sqaure root of 25?',
            points: 10,
            teacherRating: 4,
            title: "Exercise 1",
        }, {
            questionNumber: 2,
            questionText:'What is the capital of Norway?',
            points: 7,
            teacherRating: 2,
            title: "Exercise 2",
        }, {
            questionNumber: 3,
            questionText:'What is the complexity runtime of D\'jakstra over an non-cyclical graph?',
            points: 10,
            teacherRating: 4,
            title: "Exercise 3",
        }
        ]
    };

    render() {
        return (
            <div className="subject-container">
                {this.state.subjectItems.map((item, index)=> {
                    return <SubjectItem
                        key={item.questionNumber}
                        handleRaiseAQuestionClick={this.handleRaiseAQuestionClick}
                        handleSubmitClick={this.handleSubmitClick}
                        handleExerciseClick={this.handleExerciseClick}
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
