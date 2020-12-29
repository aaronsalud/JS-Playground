import React, { Component } from 'react';

class CommentBox extends Component {

    render() {
        return (
            <form action="">
                <h4>Add a comment</h4>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;