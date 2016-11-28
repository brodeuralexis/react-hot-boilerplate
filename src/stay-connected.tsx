import * as React from 'react';

interface ConnectedProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function Connected(props: ConnectedProps): JSX.Element {
    function handleChange(e) {
        props.onChange(e.target.checked);
    }

    return (
        <div>
            <input type="checkbox" checked={ props.checked } onChange={ handleChange } />
        </div>
    )
}
