let usuario = prompt("ingrese su nombre de usuario")
let dni = Number(prompt("ingrese su numero de dni"))

if (usuario == "alex") {
    if (dni == 45091) {
        alert("ahora puede jugar, tienes tres chances de adivinar cual de estos colores es: rojo, azul, amarillo, roza, negro, marron y naranja")
        for (let i = 1; i <= 3; i++) {
            let oportunidadc = prompt("ingrese el color")
            if (oportunidadc == "rojo") {
                alert("felicidades ganaste")
                break
            } else {
                alert("suerte la proxima")
            }
        }
        alert("ahora toca calcular, cuanto es 55x7?")
        let respuesta = Number(prompt("ingrese la respuesta 425, 385 o 375"))

        switch (respuesta) {
            case 425:
                alert("burro, suerte la proxima")
                break
            case 385:
                alert("bien, sos un crack")
                break
            case 375:
                alert("burro, suerte la proxima")
                break
            default:
                alert("esto no esta programado, finalizado el trbajo")
        }
    } else {
        alert("dni incorrecto")
    }
} else {
    alert("usuario incorrecto")
}


