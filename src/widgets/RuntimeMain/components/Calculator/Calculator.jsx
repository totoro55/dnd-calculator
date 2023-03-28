import React, {useEffect, useMemo, useState} from 'react';
import './Calculator.scss'
import CalculatorDisplay from "../../../../features/CalculatorDisplay/components/CalculatorDisplay/CalculatorDisplay";
import CalculatorOperators
    from "../../../../features/CalculatorOperators/components/CalculatorOperators/CalculatorOperators";
import CalculatorDigits from "../../../../features/CalculatorDigits/components/CalculatorDigits/CalculatorDigits";
import CalculatorTotal from "../../../../features/CalculatorTotal/components/CalculatorTotal/CalculatorTotal";
import {initOperators} from "../../constants/constants";
import {calculatorOperation, formatToLocaleString} from "../../helpers/calculatorOperations";

const Calculator = ({data}) => {

    const maxLength = 15
    const operators = initOperators

    const [calculator, setCalculator] = useState({
        result: '',
        prevNumber: '',
        currNumber: '',
        operator: '',
    })



    // Operators buttons logic_____________________________________________________________________________________

    const handleOperatorClick = (value) => {
        if (calculator.result){
            setCalculator({...calculator,
                prevNumber: calculator.result,
                currNumber: '',
                operator: value,
            })
            return
        }

        if (calculator.operator && calculator.currNumber && calculator.prevNumber){
            setCalculator({...calculator,
                result: calculatorOperation(calculator.prevNumber, calculator.currNumber, calculator.operator).toString(),
                prevNumber: calculatorOperation(calculator.prevNumber, calculator.currNumber, calculator.operator).toString(),
                currNumber: '',
                operator: value,
            })
            return
        }


        setCalculator({...calculator,
            prevNumber: calculator.currNumber ?calculator.currNumber : calculator.prevNumber,
            currNumber: '',
            operator: value,
        })
    }

    // Total button logic_____________________________________________________________________________________

    const handleTotalClick = () => {
        if (!calculator.currNumber){
            setCalculator({...calculator,
                result: calculatorOperation(calculator.prevNumber, calculator.prevNumber, calculator.operator).toString(),
                prevNumber: calculatorOperation(calculator.prevNumber, calculator.currNumber, calculator.operator).toString(),
                currNumber: '',
                operator: '',
            })
            return
        }
        setCalculator({...calculator,
            result: calculatorOperation(calculator.prevNumber, calculator.currNumber, calculator.operator).toString(),
            prevNumber: calculatorOperation(calculator.prevNumber, calculator.currNumber, calculator.operator).toString(),
            currNumber: '',
            operator: '',
        })
    }

    // Digits buttons logic_____________________________________________________________________________________

    const handleDigitClick = (value) => {

        if (calculator.currNumber.length >= maxLength) return
        if (value === ',' && calculator.currNumber.includes(',')) return


        if (calculator.result){
            setCalculator({...calculator,
                result: '',
                currNumber: calculator.currNumber+value.toString()
            })
            return;
        }

        if (value === ',' && calculator.currNumber===''){
            setCalculator({...calculator,
                currNumber: '0,',
            })
            return;
        }
        if (value === 0 && calculator.currNumber.includes(',')){
            setCalculator({...calculator,
                currNumber: calculator.currNumber.concat('0'),
            })
            return
        }

        setCalculator({...calculator,
            currNumber: calculator.currNumber+value.toString()
        })

    }

    const displayValue = () => {
        const res = calculator.result.toString()
        const current = calculator.currNumber.toString()
        const previous = calculator.prevNumber.toString()

        if (!current && !previous && !res) return '0'

        if (res === 'Не определено.') return res

        if (current.indexOf(',') === current.length-1 && current.length!==0){
            let resStr = formatToLocaleString(current, maxLength).slice(0, current.indexOf(',')+1)
            return resStr.concat(',')
        }

        if (current.includes(',') && current.endsWith('0')){
            let resStrBefore = formatToLocaleString(current, maxLength).slice(0, current.indexOf(','))
            let resStrAfter = current.slice(current.indexOf(','))
            console.log(resStrBefore,resStrAfter)
            return resStrBefore.concat(resStrAfter)
        }

        if (res) return formatToLocaleString(res, maxLength)
        if (!current && previous) return formatToLocaleString(previous, maxLength)

        return formatToLocaleString(current, maxLength)
    }

    const initComponents = [
        {name: 'display', element: (<CalculatorDisplay value={displayValue()}/>)},
        {name: 'operators', element: (<CalculatorOperators onClick={handleOperatorClick} />)},
        {name: 'digits', element: (<CalculatorDigits onClick={handleDigitClick}/>)},
        {name: 'total', element: (<CalculatorTotal onClick={handleTotalClick}/>)},
    ]

    const sortedComponents = data.map(aItem => initComponents.find(bItem => aItem === bItem.name))


    return (
        <div className={'calculator'}>
            {sortedComponents.map(item => {
                return (
                    <div key={item.name}>
                        {item.element}
                    </div>)
            })}
        </div>
    );
};

export default Calculator;