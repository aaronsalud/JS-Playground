import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signUp } from '../../actions';

class Signup extends Component {

    onSubmit = (formProps) => {
        this.props.signUp(formProps);
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label htmlFor="">Email</label>
                    <Field name="email" type="text" component="input" autoComplete="none" />
                </fieldset>
                <fieldset>
                    <label htmlFor="">Password</label>
                    <Field name="password" type="password" component="input" autoComplete="none" />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        );
    }
}

export default compose(
    connect(null, { signUp }),
    reduxForm({ form: 'signup' })
)(Signup);