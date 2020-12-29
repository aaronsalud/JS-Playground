import React, { Component } from 'react';

class CommentBox extends Component {

    state = { comment: '' };

    render() {
        return (
            <form action="">
                <h4>Add a comment</h4>
                <textarea name="" id="" cols="30" rows="10" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })}></textarea>
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;