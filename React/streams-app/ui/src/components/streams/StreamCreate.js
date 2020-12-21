import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderInput({ input, label }) {
        return (
            <div className="field">
                <label htmlFor="">{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" label="Title" component={this.renderInput} />
                <Field name="description" label="Description" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }

};

export default reduxForm({
    form: 'createStream'
})(StreamCreate);