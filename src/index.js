module.exports = function toReadable (number) {

    // Установка переменных и справочников
    let arr = ("" + number).split("")
    let result = ""
    let units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",]
    let secondTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    // Проверка первого разряда (единицы)
    if (arr.at(-1)) {

        result += units[arr.at(-1)]

    }
    // Проверка второго рязряда (десятки)
    if (arr.at(-2)) {
        if (arr.at(-2) === "1") {

            result = secondTen[arr.at(-1)]

        } else if (arr.at(-2) === "0") {

            result = result

        } else if (arr.at(-1) === "0") {

            result = tens[arr.at(-2) - 2]

        } else {

            result = `${tens[arr.at(-2) - 2]} ${result}`

        }

    }
    // Проверка третьего разряда (сотни)
    if (arr.at(-3)) {

        if ((arr.at(-1) === "0") && (arr.at(-2) === "0")) {

            result = `${units[arr.at(-3)]} hundred`

        } else {

            result = `${units[arr.at(-3)]} hundred ${result}`

        }

    }
    // Вывод результата
    return result
}
