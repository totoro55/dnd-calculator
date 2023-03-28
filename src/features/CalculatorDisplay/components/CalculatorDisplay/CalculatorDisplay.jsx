import React from 'react';
import './CalculatorDisplay.scss'

const CalculatorDisplay = ({value}) => {

    const valueSize = (value) => {
        if (!value){
            return 'text-bg'
        }

        if (value.length>=9){
            return 'text-md'
        }

        return 'text-bg'
    }

    return (
        <div className={'calc-display'}>
            <div className={'calc-display_result'}>
                <p className={valueSize(value)}>
                    {value ? value : 0}
                </p>
            </div>
        </div>
    );
};

export default CalculatorDisplay;