import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Counter from './counter';

const rootEl = document.getElementById('root');

if (rootEl == null) {
    throw new TypeError(`Expected to have an element with the id: root`);
}

ReactDOM.render(
    <Counter initialCount={ 1 } />,
    rootEl
)

