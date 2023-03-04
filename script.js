
const cambiarTemaAClaro = document.getElementById("tema-color-claro");
const encabezado = document.querySelector("header");
const seccion1 = document.getElementById("seccion1");
const seccion2 = document.getElementById("seccion2");
const cuentas = document.getElementById("cuentas-calorias");
const contadorcalorias = document.getElementById("numero-calorias")
const plato1 = document.getElementById("Plato-1");
const plato2 = document.getElementById("Plato-2");
const plato3 = document.getElementById("Plato-3");
const plato4 = document.getElementById("Plato-4");
let contadorprincipal = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
const caloriasPizza = 260;
const caloriasTacos = 310;
const caloriasHelado = 420;
const caloriasHamburguesa = 577;

contadorcalorias.innerText = contadorprincipal;

cambiarTemaAClaro.addEventListener("click", function () {

cambiarTemaAClaro.classList.toggle("cambio-C");
    encabezado.classList.toggle("dark-mode-nav");
    seccion1.classList.toggle("platos-comida-dark")
    seccion2.classList.toggle("cuenta-calorias-dark")
    cambiarTemaAClaro.classList.toggle("tema-color-claro-select")
    cuentas.classList.toggle("cuentas-dark")

})

plato1.addEventListener("click", function () {

    plato1.classList.toggle("color")
    ++contador1;
    if (contador1 % 2 == 0) {
        contadorcalorias.innerText = contadorprincipal -= caloriasPizza;
    } else {
        contadorcalorias.innerText = contadorprincipal += caloriasPizza;
    }

    if (contador1 == 11) {
        contador1 = 1;
    }

})

plato2.addEventListener("click", function () {

    plato2.classList.toggle("color")
    ++contador2;
    if (contador2 % 2 == 0) {
        contadorcalorias.innerText = contadorprincipal -= caloriasTacos;
    } else {
        contadorcalorias.innerText = contadorprincipal += caloriasTacos;
        if (contador2 == 11) {
            contador1 = 1;
        }
    }
})
plato3.addEventListener("click", function () {

    plato3.classList.toggle("color")
    ++contador3;
    if (contador3 % 2 == 0) {
        contadorcalorias.innerText = contadorprincipal -= caloriasHelado;
    } else {
        contadorcalorias.innerText = contadorprincipal += caloriasHelado;
    }

    if (contador3 == 11) {
        contador3 = 1;
    }

})
plato4.addEventListener("click", function () {

    ++contador4;
    plato4.classList.toggle("color")
    if (contador4 % 2 == 0) {
        contadorcalorias.innerText = contadorprincipal -= caloriasHamburguesa;
    } else {
        contadorcalorias.innerText = contadorprincipal += caloriasHamburguesa;
    }
    if (contador4 == 11) {
        contador4 = 1;
    }



})






