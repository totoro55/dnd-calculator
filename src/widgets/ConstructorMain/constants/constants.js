import CalculatorDisplay from "../../../features/CalculatorDisplay/components/CalculatorDisplay/CalculatorDisplay";
import CalculatorOperators
    from "../../../features/CalculatorOperators/components/CalculatorOperators/CalculatorOperators";
import CalculatorDigits from "../../../features/CalculatorDigits/components/CalculatorDigits/CalculatorDigits";
import CalculatorTotal from "../../../features/CalculatorTotal/components/CalculatorTotal/CalculatorTotal";

export const components = [
    {
        name: 'display',
        element: (<CalculatorDisplay />)
    },
    {
        name: 'operators',
        element: (<CalculatorOperators />)
    },
    {
        name: 'digits',
        element: (<CalculatorDigits />)
    },
    {
        name: 'total',
        element: (<CalculatorTotal />)
    },
]