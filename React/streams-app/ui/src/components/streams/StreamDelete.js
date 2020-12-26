import React, { Fragment } from 'react';
import Modal from '../Modal';

const StreamDelete = props => {

    const modalTitle = 'Delete Stream';
    const modalDescription = 'Are you sure you want to delete this stream?';

    const modalActions = (
        <Fragment>
            <button className="ui negative button">Delete</button>
            <button className="ui button">Cancel</button>
        </Fragment>
    );

    const onDismiss = () => {
        props.history.push('/');
    }

    return (
        <Modal title={modalTitle} description={modalDescription} actions={modalActions} onDismiss={onDismiss} />
    );
};

export default StreamDelete;