import React from 'react';

export default class InputEmail extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            confirmEmail: '',
            message: ''
        }
    }
    render() {
        return(
            <>
                <input
                    className='email'
                    type='text'
                    value={this.state.email}
                />
                <input
                    className='confirmEmail'
                    type='text'
                    value={this.state.confirmEmail}
                />
                <label>
                    {this.state.email === this.state.confirmEmail 
                    ? `Greate! Emails match` 
                    : `Oh! Emails do not match!`}
                </label>
            </>
        )
    }
}