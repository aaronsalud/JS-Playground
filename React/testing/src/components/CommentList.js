import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments() {
        console.log(this.props.comments);
        return this.props.comments.map((comment, index) => {
            return <li key={index}>{comment}</li>
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps, null)(CommentList);