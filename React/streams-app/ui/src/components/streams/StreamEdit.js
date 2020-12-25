import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, clearSelectedStream } from '../../actions';

class StreamEdit extends Component {

    componentDidMount() {
        const streamId = this.props.match.params.id;
        this.props.fetchStream(streamId);
    }

    render() {
        return (
            <div>StreamEdit</div>
        );
    }

    componentWillUnmount() {
        this.props.clearSelectedStream();
    }
};

const mapStateToProps = (state) => {
    return {
        stream: state.selectedStream
    }
}

export default connect(mapStateToProps, { fetchStream, clearSelectedStream })(StreamEdit);