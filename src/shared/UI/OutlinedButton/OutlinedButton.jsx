import React from 'react';
import './OutlinedButton.scss'

const PrimaryButton = ({children, ...props}) => {


    return (
        <button
            className={'button-outlined'}
            {...props}>
            {children}
        </button>
    );
};

export default PrimaryButton;