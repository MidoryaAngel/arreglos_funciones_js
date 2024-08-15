function crearCajas() {
    let numCajas = prompt("Ingrese el número de cajas:");
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    for (let i = 0; i < numCajas; i++) {
        let caja = document.createElement('div');
        caja.className = numCajas > 5 ? 'caja caja-grande' : 'caja';
        caja.textContent = i + 1;
        resultado.appendChild(caja);
    }
}

function registrarVoto() {
    let zona = document.getElementById('zonas').value;
    let candidato = document.querySelector('input[name="candidato"]:checked');
    
    if (!zona || !candidato) {
        alert("Por favor, seleccione una zona y un candidato.");
        return;
    }
    
    let resultadoVotaciones = document.getElementById('resultadoVotaciones');
    resultadoVotaciones.textContent = `Zona: ${zona}, Candidato: ${candidato.value}`;
}

function sumarNumeros() {
    let suma = 0;
    let datos = "";
    let numero;
    
    while ((numero = parseInt(prompt("Ingrese un número positivo (0 para terminar):"))) > 0) {
        suma += numero;
        datos += `${numero} `;
    }
    
    document.getElementById('resultadoSumatoria').textContent = `Suma total: ${suma}, Números ingresados: ${datos}`;
}

//continua 2da parte de funciones

function sumarImpares() {
    let suma = 0;
    let resultado = '';
    
    for (let i = 1; i < 100; i += 2) {
        suma += i;
        resultado += `${i} `;
    }

    document.getElementById('resultadoImpares').textContent = `Suma de impares: ${suma}, Números: ${resultado}`;
}

function dibujarAsteriscos() {
    let numAsteriscos = parseInt(document.getElementById('numAsteriscos').value);
    let resultado = '';
    let i = 0;

    while (i < numAsteriscos) {
        resultado += '*';
        i++;
    }

    document.getElementById('resultadoAsteriscos').textContent = resultado;
}

function mostrarTablas() {
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += '\n';
    }

    document.getElementById('resultadoTablas').textContent = resultado;
}

//tercea parte funciones

let arreglo = [1, 2, 3, 4, 5];
let arreglo2 = [6, 7, 8, 9, 10];

function ejecutarOperacion() {
    let operacion = document.getElementById('operacion').value;
    let resultado = '';
    
    switch (operacion) {
        case 'pop':
            arreglo.pop();
            resultado = arreglo;
            break;
        case 'shift':
            arreglo.shift();
            resultado = arreglo;
            break;
        case 'push':
            let nuevoElemento = prompt("Ingrese un nuevo elemento:");
            arreglo.push(nuevoElemento);
            resultado = arreglo;
            break;
        case 'unshift':
            let nuevoElementoInicio = prompt("Ingrese un nuevo elemento:");
            arreglo.unshift(nuevoElementoInicio);
            resultado = arreglo;
            break;
        case 'splice':
            let posicion = parseInt(prompt("Ingrese la posición:"));
            if (posicion >= 0 && posicion < arreglo.length) {
                let elemento = prompt("Ingrese el elemento:");
                let accion = prompt("¿Desea agregar (A) o reemplazar (R)?");
                if (accion === 'R') {
                    arreglo.splice(posicion, 1, elemento);
                } else {
                    arreglo.splice(posicion, 0, elemento);
                }
                resultado = arreglo;
            } else {
                resultado = "Posición inválida.";
            }
            break;
        case 'delete':
            let pos = parseInt(prompt("Ingrese la posición a eliminar:"));
            if (pos >= 0 && pos < arreglo.length) {
                delete arreglo[pos];
                resultado = arreglo;
            } else {
                resultado = "Posición inválida.";
            }
            break;
        case 'reverse':
            arreglo.reverse();
            resultado = arreglo;
            break;
        case 'sort':
            arreglo.sort();
            resultado = arreglo;
            break;
        case 'concat':
            let nuevoArreglo = arreglo.concat(arreglo2);
            resultado = nuevoArreglo;
            break;
        case 'join':
            resultado = arreglo.join('');
            break;
        case 'length':
            resultado = `Longitud del arreglo: ${arreglo.length}`;
            break;
        default:
            resultado = "Operación no válida.";
    }

    document.getElementById('resultadoArreglos').textContent = resultado;
}

