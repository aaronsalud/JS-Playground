import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from 'actions';

class CommentBox extends Component {

    state = { comment: '' };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea name="" id="" cols="30" rows="10" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })}></textarea>
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, { addComment })(CommentBox);