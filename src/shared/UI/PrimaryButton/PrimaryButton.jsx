import React from 'react';
import './PrimaryButton.scss'

const PrimaryButton = ({children, ...props}) => {


    return (
        <button
            className={'button-primary'}
            {...props}>
            {children}
        </button>
    );
};

export default PrimaryButton;