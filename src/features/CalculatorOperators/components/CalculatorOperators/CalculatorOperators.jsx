import React from 'react';
import './CalculatorOperators.scss'
import {initOperators} from "../../constants/constants";
import OutlinedButton from "../../../../shared/UI/OutlinedButton/OutlinedButton";

const CalculatorOperators = ({onClick}) => {
    const operators =[...initOperators]
    const handleClick = value => onClick(value)

    return (
        <div className={'calc-operators'}>
            {operators.map(operator=>{
                return(
                    <OutlinedButton
                        disabled={!onClick}
                        key={operator.value}
                        onClick={()=>handleClick(operator.value)}>
                        {operator.value}
                    </OutlinedButton>
                )
            })}
        </div>
    );
};

export default CalculatorOperators;