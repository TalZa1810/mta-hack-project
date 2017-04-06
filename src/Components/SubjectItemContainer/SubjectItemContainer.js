import SubjectItem from './SubjectItem';
import * as React from 'react';

class SubjectItemContainer extends React.Component {
    handleRaiseAQuestionClick() {
        alert('raise');
    };

    handleSubmitClick() {
        alert('submit');
    };

    state = {
        questionNumber: 1,
        points: 10,
        teacherRating: 4,
        title: "Exercise 1",
        style: {
            margin: 6
        }

    };

    render() {
        return (
            <div className="subject-container">
                <SubjectItem
                    handleRaiseAQuestionClick={this.handleRaiseAQuestionClick}
                    handleSubmitClick={this.handleSubmitClick}
                    title={this.state.title}
                    points={this.state.points}
                    teacherRating={this.state.teacherRating}
                />
            </div>
        )
    }
}

export default SubjectItemContainer;
