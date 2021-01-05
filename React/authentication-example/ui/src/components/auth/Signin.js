import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signIn } from '../../actions';

class Signin extends Component {

    onSubmit = (formProps) => {
        this.props.signIn(formProps, () => {
            this.props.history.push('/feature');
        });
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
                <div>
                    {this.props.errorMessage}
                </div>
                <button>Sign In</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    };
};

export default compose(
    connect(mapStateToProps, { signIn }),
    reduxForm({ form: 'signin' })
)(Signin);