document.getElementById('submitButton').onclick = (event) => {
    event.preventDefault()


    let valueA = parseInt(document.getElementById('valueA').value)
    let valueB = parseInt(document.getElementById('valueB').value)
    let arithmeticOperator = document.getElementById('arithmeticOperator').value
    let output = document.getElementById('result')
    let result


    switch (arithmeticOperator) {
        case '+':
            result = valueA + valueB
            break
        case '-':
            result = valueA - valueB
            break
        case '*':
            result = valueA * valueB
            break
        case '/':
            if (valueB !== 0) {
                result = Math.trunc(valueA / valueB)
            } else {
                result = 'Do not divide by 0!'
            }
            break
        default:
            result = 'Error'

    }
    output.innerHTML = result
    return false
}