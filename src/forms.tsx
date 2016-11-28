import * as React from 'react';

import StayConnected from './stay-connected';

export interface LoginFormState {
    username: string;
    password: string;
    stayConnected: boolean;
}

interface UsernamePasswordProps {
    value: string;
    onChange: (value: string) => void;
}

function getChangeHandler(onChange) {
    return e => {
        onChange(e.target.value);
    };
}

function Username(props: UsernamePasswordProps): JSX.Element {
    return (
        <div>
            <input type="text" value={ props.value } onChange={ getChangeHandler(props.onChange) } />
        </div>
    )
}

function Password(props: UsernamePasswordProps): JSX.Element {
   return (
        <div>
            <input type="password" value={ props.value } onChange={ getChangeHandler(props.onChange) } />
        </div>
    )
}

export interface LoginFormProps {
    onSubmit: (data: LoginFormState) => void;
}

export default class LoginForm extends React.PureComponent<LoginFormProps, LoginFormState> {

    public state = {
        username: "",
        password: "",
        stayConnected: false
    }

    public handleChange(key: string, isCheckbox: boolean = false) {
        return value => {
            this.setState({
                [key]: value
            } as LoginFormState);
        };
    }

    public handleSubmit() {
        this.props.onSubmit(this.state);
    }

    public renderSubmitButton() {
        return (
            <button onClick={ this.handleSubmit.bind(this) }>Login</button>
        )
    }

    render() {
        console.dir(this.state);
        return (
            <div>
                <Username value={ this.state.username } onChange={ this.handleChange("username") }></Username>
                <Password value={ this.state.password } onChange={ this.handleChange("password") }></Password>
                <StayConnected checked={ this.state.stayConnected } onChange={ this.handleChange("stayConnected", true) }></StayConnected>
                { this.renderSubmitButton() }
            </div>
        )
    }

}
