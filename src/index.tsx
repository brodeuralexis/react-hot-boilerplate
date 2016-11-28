import * as React from 'react';
import * as ReactDOM from 'react-dom';

import routes from './routes';

const rootEl = document.getElementById('root');

if (rootEl == null) {
    throw new TypeError(`Expected to have an element with the id: root`);
}

// const jsxHello = (
//     <div className="col-xs-12">
//         <h1>Hello</h1>
//     </div>
// );

// const jsHello = (
//     React.createElement("div", {},
//         React.createElement("h1", {}, "Hello")
//     )
// );

ReactDOM.render(
    routes,
    rootEl
)

