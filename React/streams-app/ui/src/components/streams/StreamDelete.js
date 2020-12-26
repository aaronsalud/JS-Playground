import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStream, clearSelectedStream } from '../../actions';
import Modal from '../Modal';

class StreamDelete extends Component {

    modalTitle = 'Delete Stream';

    renderModalActions = () => {
        return (
            <Fragment>
                <button className="ui negative button">Delete</button>
                <button className="ui button">Cancel</button>
            </Fragment>
        );
    }

    renderModalContent() {
        if (this.props.stream) {
            return (
                <Fragment>
                    Are you sure you want to delete this stream with title:  
                    <b> {this.props.stream.title}</b>?
                </Fragment>
            );
        }

        return 'Are you sure you want to delete this stream?';
    }

    onDismiss = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        const streamId = this.props.match.params.id;
        this.props.fetchStream(streamId);
    }

    componentWillUnmount() {
        this.props.clearSelectedStream();
    }

    render() {
        return <Modal title={this.modalTitle} content={this.renderModalContent()} actions={this.renderModalActions()} onDismiss={this.onDismiss} />;
    }
}

const mapStateToProps = state => {
    return {
        stream: state.selectedStream
    }
}

export default connect(mapStateToProps, { fetchStream, clearSelectedStream })(StreamDelete);