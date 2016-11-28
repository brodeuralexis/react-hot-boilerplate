import * as React from 'react';

import { Router, Route, IndexRoute, hashHistory as history } from 'react-router';

function Inbox(props) {
    const hasChildren = props.children != null;
    return (
        <div>
            <div style={ hasChildren ? { color: 'red' } : {} }>
                <h1>Messages</h1>
                <ul>
                    <li>Message 1</li>
                </ul>
            </div>
            { props.children }
        </div>
    )
}

export function Message(props) {
    return (
        <div>
            <h1>{ props.params.message }</h1>
        </div>
    );
}

export default (
    <Router history={ history }>
        <Route path="/">
            <IndexRoute component={ () => <h1>Index</h1> } />
            <Route path="inbox" component={ Inbox }>
                <Route path="toto" component={ () => <h1>Page Toto</h1> } />
                <Route path=":message" component={ Message } />
            </Route>
            <Route path="*" component={ () => <h2>Not Found</h2> } />
        </Route>
    </Router>
)
