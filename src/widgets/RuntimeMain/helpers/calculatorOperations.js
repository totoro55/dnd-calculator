const strToNum = (a) => {
    const str = a.toString()
    const replCommaStr = str.replace(',', '.');
    const replSpaceStr = replCommaStr.replace('&nbsp;', '');
    return Number(replSpaceStr)
}

const sum = (a, b) => Number(a) + Number(b)
const subtraction = (a, b) => Number(a) - Number(b)
const division = (a, b) => Number(a) / Number(b)
const multiplication = (a, b) => Number(a) * Number(b)

const calcFraction = (a, max) => {
    const aString = a.toString()

    if (max > aString.length && !aString.includes('.')) {
        return 0
    }
    if (max > aString.indexOf('.') && aString.includes('.')) {
        return max - aString.indexOf('.')
    }
    if (max < aString.indexOf('.') && aString.includes('.')) {
        return 0
    }
}

export const formatToLocaleString = (num, maxLength) => {
    const formatNumber = strToNum(num)

    const fraction = calcFraction(formatNumber, maxLength)
    const format = new Intl.NumberFormat("ru-Ru", {
        notation: formatNumber > 10000000000000000 ? 'compact' : 'standard',
        style: "decimal",
        signDisplay: 'negative',
        maximumFractionDigits: formatNumber > 10000000000000000 ? 0 : fraction,
    });
    return format.format(formatNumber)
}

export const calculatorOperation = (prevValue, currentValue, operator) => {
    const prevNum = strToNum(prevValue) || 0
    const currNum = strToNum(currentValue) || 0

    let res = 0
    switch (operator) {

        case '+':
            res = sum(prevNum, currNum)
            break
        case '-':
            res = subtraction(prevNum, currNum)
            break
        case '/':
            res = division(prevNum, currNum)
            break
        case 'x':
            res = multiplication(prevNum, currNum)
            break
    }

    if (!isFinite(res) || isNaN(res)) {
        return "Не определено."
    }

    return res
}