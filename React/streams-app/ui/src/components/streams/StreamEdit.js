import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, clearSelectedStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

    onSubmit = (formValues) => {
        const streamId = this.props.match.params.id;
        this.props.editStream(streamId, _.pick(formValues, 'title', 'description'));
    }

    componentDidMount() {
        const streamId = this.props.match.params.id;
        this.props.fetchStream(streamId);
    }

    render() {
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
            </div>
        );
    }

    componentWillUnmount() {
        this.props.clearSelectedStream();
    }
};

const mapStateToProps = state => {
    return {
        stream: state.selectedStream
    }
}

export default connect(mapStateToProps, { fetchStream, clearSelectedStream, editStream })(StreamEdit);