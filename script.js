console.log('Hello, world!')

var a = 2
var b = 3
var c = 4
console.log("suma: " + (a + b + c))
console.log("suma: ", a + b + c)

let today = new Date()
console.log(today)

let month = today.getMonth() + 1
console.log(month)

let day = today.getDate()
console.log(day)

let year = today.getFullYear()
console.log(year)

console.log(`${day}/${month}/${year}`)

function sum(a, b) {

    //== compara igual valor, === compara igual valor y tipo de dato
    if (a == b) {
        return a + b * 3 + " son iguales"
    }
    else {
        return a + b
    }
}

console.log(sum(2, 2))


//formas de escribir una funcion
function sum2(a, b) {
    return a + b
}

sum3 = function (a, b) {
    return a + b
}

sum4 = (a, b) => {
    return a + b
}

console.log(sum2(2, 3), sum3(2, 3), sum4(2, 3))

//ejemplo5

const color = "rojo"
function imprimirColor(valor) {
    switch (valor) {
        case "rojo":
            return "Rojo"
            
        case "azul":
            return "Azul"
        default:
            return "No es un color valido"
    }
}

console.log("llamo a la funcion:", imprimirColor(color))