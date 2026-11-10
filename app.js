// 1. Guardamos en variables los elementos de la página que vamos a usar.
//    Los buscamos por su id, el mismo que pusimos en index.html.
const campo = document.getElementById("celsius");
const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");

// 2. Esta función hace la conversión.
function convertir() {
  // Leemos lo que hay escrito en el campo. Llega como texto,
  // así que lo pasamos a número con Number().
  const texto = campo.value;
  const celsius = Number(texto);

  // Si el campo está vacío o no es un número válido, avisamos y paramos.
  if (texto === "" || isNaN(celsius)) {
    resultado.textContent = "Escribe un número válido.";
    return;
  }

  // Fórmula: Fahrenheit = Celsius x 9/5 + 32
  const fahrenheit = celsius * 9 / 5 + 32;

  // Mostramos el resultado. Math.round(x * 100) / 100 deja 2 decimales como máximo.
  const redondeado = Math.round(fahrenheit * 100) / 100;
  resultado.textContent = celsius + " ºC = " + redondeado + " ºF";
}

// 3. Le decimos al botón: "cuando te hagan clic, ejecuta la función convertir".
boton.addEventListener("click", convertir);