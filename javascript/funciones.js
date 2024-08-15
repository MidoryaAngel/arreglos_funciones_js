function crearCajas() {//crear cajas
    let numeroDeCajas = prompt("¿Cuántas cajas quieres crear?");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < numeroDeCajas; i++) {
        let caja = document.createElement("div");
        caja.className = "caja";
        if (numeroDeCajas <= 5) {
            caja.classList.add("pequeno");
        } else if (numeroDeCajas <= 10) {
            caja.classList.add("mediano");
        } else {
            caja.classList.add("grande");
        }
        resultado.appendChild(caja);
    }
}

//if else

function ordenarNumeros() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let resultado = document.getElementById("resultado");

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            resultado.textContent = `${num1}, ${num2}, ${num3}`;
        } else {
            resultado.textContent = `${num1}, ${num3}, ${num2}`;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            resultado.textContent = `${num2}, ${num1}, ${num3}`;
        } else {
            resultado.textContent = `${num2}, ${num3}, ${num1}`;
        }
    } else {
        if (num1 >= num2) {
            resultado.textContent = `${num3}, ${num1}, ${num2}`;
        } else {
            resultado.textContent = `${num3}, ${num2}, ${num1}`;
        }
    }
}

//while for

function sumarImpares() {
    let suma = 0;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 1; i <= 100; i += 2) {
        suma += i;
        resultado.innerHTML += i + " ";
    }
    resultado.innerHTML += "<br>Suma total: " + suma;
}

//arreglos

let arreglo = ["Elemento1", "Elemento2", "Elemento3"];

function operarArreglo() {
    let accion = document.getElementById("accion").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    switch (accion) {
        case "pop":
            arreglo.pop();
            break;
        case "shift":
            arreglo.shift();
            break;
        case "push":
            let nuevoElementoPush = prompt("Ingrese un nuevo elemento para añadir al final:");
            arreglo.push(nuevoElementoPush);
            break;
        case "unshift":
            let nuevoElementoUnshift = prompt("Ingrese un nuevo elemento para añadir al inicio:");
            arreglo.unshift(nuevoElementoUnshift);
            break;
        case "splice":
            let posicion = parseInt(prompt("Ingrese la posición para insertar/reemplazar:"));
            if (posicion >= 0 && posicion <= arreglo.length) {
                let nuevoElementoSplice = prompt("Ingrese el elemento a insertar/reemplazar:");
                let accionSplice = prompt("¿Desea (R)emplazar o (A)gregar?");
                if (accionSplice.toUpperCase() === "R") {
                    arreglo.splice(posicion, 1, nuevoElementoSplice);
                } else if (accionSplice.toUpperCase() === "A") {
                    arreglo.splice(posicion, 0, nuevoElementoSplice);
                } else {
                    resultado.innerHTML = "Acción no válida.";
                }
            } else {
                resultado.innerHTML = "Posición no válida.";
            }
            break;
        case "delete":
            let posicionDelete = parseInt(prompt("Ingrese la posición del elemento a eliminar:"));
            if (posicionDelete >= 0 && posicionDelete < arreglo.length) {
                delete arreglo[posicionDelete];
            } else {
                resultado.innerHTML = "Posición no válida.";
            }
            break;
        case "reverse":
            arreglo.reverse();
            break;
        case "sort":
            arreglo.sort();
            break;
        case "concat":
            let nuevoArreglo = ["Nuevo1", "Nuevo2"];
            arreglo = arreglo.concat(nuevoArreglo);
            break;
        case "join":
            resultado.innerHTML = arreglo.join('');
            return;
        case "length":
            resultado.innerHTML = "Longitud del arreglo: " + arreglo.length;
            return;
    }
    resultado.innerHTML = arreglo.join(', ');
}

