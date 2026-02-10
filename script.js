function abrirCarta() {
  document.getElementById("carta").style.display = "block";
}

function toggleTexto(id) {
  const elemento = document.getElementById(id);

  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}
function abrirUniversos() {
  const uni = document.getElementById("universos");

  if (uni.style.display === "none") {
    uni.style.display = "block";
  } else {
    uni.style.display = "none";
  }
}

function abrirCancion() {
  const cancion = document.getElementById("cancion");

  if (cancion.style.display === "none") {
    cancion.style.display = "block";
  } else {
    cancion.style.display = "none";
  }
}
function abrirSentimientos() {
  const caja = document.getElementById("sentimientos");
  caja.style.display = "block";
}

function abrirSentimientos() {
  const caja = document.getElementById("sentimientos");
  caja.style.display = "block";
}

function respuesta(opcion) {
  const resultado = document.getElementById("resultado");

  if (opcion === "feliz") {
    resultado.innerText =
    "Mi amorcito bello, si elegiste esto no sabes cuánto me alegra de verdad. " +
    "Verte feliz es uno de mis lugares favoritos en el mundo. " +
    "Eres ese chico que siempre termina iluminando mi vida, incluso sin darse cuenta. " +
    "Recuerda que siempre estaré aquí para acompañarte en tu felicidad, " +
    "en cada risa y en cada momento, porque mi amor por ti no depende del tiempo ni de las circunstancias.";
  }

  if (opcion === "triste") {
    resultado.innerText =
    "Mi niño lindo, si hoy estás triste recuerda que no estás solo. " +
    "Siempre tendrás en mí un lugar seguro donde apoyarte, donde hablar y donde descansar. " +
    "Estoy aquí para escucharte y amarte como mereces, para recordarte que tus sentimientos importan. " +
    "No olvides que eres capaz de lograr todo lo que te propongas y que siempre serás suficiente, " +
    "sin importar lo que otros digan.";
  }

  if (opcion === "extrano") {
    resultado.innerText =
    "Si me extrañas, amor, recuerda que cada amanecer y cada atardecer llevan un “te amo” mío. " +
    "Aunque no siempre pueda tomarle una foto a lo que pienso, estás presente en cada cosa bonita que veo. " +
    "Créeme, es muy probable que mientras leas esto también estés en mi mente. " +
    "Te amo, mi hermoso príncipe.";
  }

  if (opcion === "confundido") {
    resultado.innerText =
    "Lindo, si algún día todo se siente confuso y tus emociones no están en orden, está bien. Respira. " +
    "No te obligues a entenderlo todo ni a ser fuerte todo el tiempo. " +
    "Eres humano, y tienes derecho a sentir, incluso cuando no sabes qué sentir. " +
    "Recuerda que después de cualquier camino difícil siempre llega otro donde todo empieza a tener sentido, " +
    "incluso aquello que dolió o confundió antes.";
  }
}
