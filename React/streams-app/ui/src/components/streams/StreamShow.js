import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, clearSelectedStream } from '../../actions';

class StreamShow extends Component {

    componentDidMount() {
        const streamId = this.props.match.params.id;
        this.props.fetchStream(streamId);
    }

    componentWillUnmount() {
        this.props.clearSelectedStream();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stream: state.selectedStream
    }
}

export default connect(mapStateToProps, { fetchStream, clearSelectedStream })(StreamShow);