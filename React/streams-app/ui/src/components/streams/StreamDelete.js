import React, { Component, Fragment } from 'react';
import Modal from '../Modal';

class StreamDelete extends Component {

    modalTitle = 'Delete Stream';
    modalDescription = 'Are you sure you want to delete this stream?';

    renderModalActions = () => {
        return (
            <Fragment>
                <button className="ui negative button">Delete</button>
                <button className="ui button">Cancel</button>
            </Fragment>
        );
    }

    onDismiss = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <Modal title={this.modalTitle} description={this.modalDescription} actions={this.renderModalActions()} onDismiss={this.onDismiss} />
        );
    }

}

export default StreamDelete;