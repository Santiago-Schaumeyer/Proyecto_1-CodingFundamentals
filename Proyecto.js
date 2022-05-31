//100 de vida y hacen 20 de daño sin arma
let vida = 300
let damage = 20 //Puñetazo

//Armas
let espada = 20 
let martillo = 35  //Te hace mas lento
let lanza = 30  //Solo sirve una vez

//Escudo
let escudoLigero = 20
let escudoPesado = 40



//Enemigo
let lifeEnemy = 300
let damageEnemy = 10

let espadaMadera = 10 

//Menu de ingreso

let username = prompt("¡Bienvenido gladiador!\n¿Como te llamas?")

alert("Hola " + username + " debes luchar tu primera batalla para demostrar que eres el legitimo heredero de roma")

console.log("Gladiador: " + username)


let dificultad = prompt("Elige el nivel de dificultad \n A: Facil \n B: Medio \n C: Dificil \n D: IMPOSIBLE")

switch (dificultad) {
    case "a":
        lifeEnemy -= 200
        console.log("Dificultad: Facil")
        break
    case "b":
        lifeEnemy -= 100
        console.log("Dificultad: Medio")
        break
    case "c":
        lifeEnemy = lifeEnemy
        console.log("Dificultad: Dificil")
        break
    case "d":
        console.log("Dificultad: Imposible")
        lifeEnemy += 1500
        damageEnemy += 300
        break
    default:
        let dificultad = prompt("Elige el nivel de dificultad \n A: Facil \n B: Medio \n C: Dificil \n D: IMPOSIBLE")
        break
}




let arma = prompt("Debes elegir un arma: \n A: Espada +20 daño \n B: Martillo +35 daño \n C: Lanza +30 daño")


switch (arma) {
    case "a":
        damage+=espada
        console.log("Arma: Espada")
        break
    case "b":
        damage+=martillo
        console.log("Arma: martillo")
        break
    case "c":
        damage+=lanza
        console.log("Arma: Lanza")
        break
}


let escudo = prompt("Ahora debes seleccionar tu defensa \n A: Escudo ligero \n B: Escudo pesado")

switch (escudo) {
    case "a":
        vida+=escudoLigero
        console.log("Defensa: Escudo ligero")
        break
    case "b":
        vida+=escudoPesado
        console.log("Defensa: Escudo pesado")
        break
}

console.log("Vida: " + vida )
console.log("Daño: " + damage)

//Enemigo

console.log("Enemigo: ")
console.log("Vida: " + lifeEnemy)
console.log("Daño: " + damageEnemy)


//Batalla

alert("¡Se da por comenzada la batalla! \n ¿Estas listo?")

function batalla(vida, damage, lifeEnemy, damageEnemy) {
    for (i = 0; i <= lifeEnemy; i++){
        console.log("turno de: ", username)
        lifeEnemy -= damage
        if (lifeEnemy <= 0) {
            
            console.log("Golpe: "+(i+1) + "_____Vida enemigo: " + lifeEnemy + "¡Victoria!")
            break
        } else {
            alert("Presiona")
            console.log("Golpe: "+(i+1)+ "_____Vida enemigo = "+lifeEnemy)
        }
        console.log("turno del enemigo")
        vida -= damageEnemy
        if (vida <= 0) {
            console.log("Vida : " + vida + " Perdiste, recarga la página y vuelve a intentarlo")
            break
        } else {
            alert("Presiona")
            console.log("Golpe: " + (i+1) + "_____Vida: " + vida)
        }
    }
}

batalla(vida, damage, lifeEnemy, damageEnemy)