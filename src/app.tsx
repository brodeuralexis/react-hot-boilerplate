import * as React from 'react'

export interface AppProps {
    name?: string;
}

export interface AppState {
    value: string;
}

export default class App extends React.Component<AppProps, AppState> {

    public state = {
        value: ""
    };

    public handleChange(e) {
        let value: string = e.target.value.trim();

        this.setState({
            value
        });
    }

    render() {
        console.dir(this.state)
        return (
            <div>
                <input type="text" value={ this.state.value } onChange={ this.handleChange.bind(this) } />
            </div>
        )
    }

}
