import React from 'react';
import './CalculatorTotal.scss'
import PrimaryButton from "../../../../shared/UI/PrimaryButton/PrimaryButton";

const CalculatorTotal = ({onClick}) => {
    const handleClick = value => onClick(value)


    return (
        <div className={'calc-total'}>
            <PrimaryButton
                disabled={!onClick}
                onClick={()=>handleClick('=')}>
                =
            </PrimaryButton>
        </div>
    );
};

export default CalculatorTotal;