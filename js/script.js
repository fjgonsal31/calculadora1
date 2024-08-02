// calculadora 1
let nombre = "Francisco Javier";
let apellido = "González Salcedo";
let edad = 33;

function calcularEdad() {
    let nombre = document.getElementById("nombre").value;
    let edad = Number(document.getElementById("edad").value);
    let edadHumana = edad * 7;
    let mensaje = `Mi mascota se llama ${nombre} y tiene ${edad} años, que equivale a ${edadHumana} años en edad humana.`;

    if (edad <= 0 || edad > 50) {
        console.log("Introduce una edad correcta.");
        document.getElementById("resultado").textContent = "Introduce una edad correcta.";
    } else {
        // document.getElementById("resultado").innerHTML = mensaje;
        console.log(mensaje);
        document.getElementById("resultado").textContent = mensaje;
    }
}