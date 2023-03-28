import React from 'react';
import './CalculatorDigits.scss'
import {initDigits} from "../../constants/constants";
import OutlinedButton from "../../../../shared/UI/OutlinedButton/OutlinedButton";

const CalculatorDigits = ({onClick}) => {
    const digits = [...initDigits]
    const handleClick = value => onClick(value)


    return (
        <div className={'calc-digits'}>
            {
                digits.map(digit=>{
                    return(
                        <OutlinedButton
                            key={digit.value}
                            disabled={!onClick}
                            onClick={()=>handleClick(digit.value)}>
                            {digit.value}
                        </OutlinedButton>
                    )})
            }
        </div>
    );
};

export default CalculatorDigits;