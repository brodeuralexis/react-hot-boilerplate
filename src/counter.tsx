import * as React from 'react';

export interface CounterProps {
    /**
     * Test
     */
    initialCount?: number;
}

export interface CounterState {
    count: number;
    interval: number | null;
}

export default class Counter extends React.Component<CounterProps, CounterState> {

    get stopped(): boolean {
        return this.state.interval == null;
    }

    public state = {
        count: this.props.initialCount || 0,
        interval: null
    };

    public componentDidMount() {
        this.start();
    }

    public componentWillUnmount() {
        this.stop();
    }

    private stop = () => {
        if (this.stopped) {
            return;
        }

        window.clearInterval(this.state.interval!);
        this.setState({
            interval: null
        } as CounterState);
    }

    private start = () => {
        if (!this.stopped) {
            return;
        }

        this.setState({
            interval: window.setInterval(() => {
                this.setState(state => {
                    return {
                        count: state.count + 1
                    } as CounterState;
                });
            }, 1000)
        } as CounterState);
    }

    public render() {
        return (
            <div>
                <h1>Counter: { this.state.count }</h1>
                { this.stopped ? (
                    <button onClick={ this.start }>
                        Start
                    </button>
                ) : (
                    <button onClick={ this.stop }>
                        Stop
                    </button>
                ) }
            </div>
        )
    }

}
