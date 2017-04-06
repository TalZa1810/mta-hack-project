import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PictureGrid from './PictureGrid';


export default class StoreDialog extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton className="avatar-store-btn" label="Go to Avatar Store" onClick={this.handleOpen} />
                <Dialog
                    title="Avatar Store"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <PictureGrid > </PictureGrid >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}
