let number = +prompt("Введите число")
let squared = +prompt("Введите степень")
let result = 1


if (isNaN(number) ) {
    alert("Это не число")
} else {
    if (!isNaN(squared)) {
        for (let i = 1; i < squared; i++) {
            result = number ** squared
        }
        alert(result)
    }
}


let amount     = +prompt("Введите количество ступенек")
let firstSign  = prompt("Введите первый символ")
let lastSign = prompt("Введите второй символ")
let str = ""

if (amount = amount == NaN || amount == 0 ? 5 : amount) {
    for (let i = amount; i != 0; i--) {
        console.log(str + lastSign)
        str = str + firstSign
        
    }
}