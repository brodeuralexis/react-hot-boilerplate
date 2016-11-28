import * as React from 'react'

export interface AppProps {
    name?: string;
}

export default class App extends React.PureComponent<AppProps, void> {

    render() {
        return (
            <div>
                { this.props.name == null ? (
                    <h1>Hello World!</h1>
                ) : (
                    <h1>Hello { this.props.name }</h1>
                ) }
            </div>
        )
    }

}
