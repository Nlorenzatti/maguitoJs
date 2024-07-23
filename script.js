function preguntar(){
    let pregunta = document.getElementById('entradaPregunta');
    let respuesta = document.getElementById('entradaRespuesta');

    let preguntaTexto = pregunta.value.trim();
    if(preguntaTexto.length === 0){
        alert("Ingrese una pregunta")
        return
    }

    let respuestas = [
        "Si. ",
        "No. ",
        "Probablemente",
        "Definitivamente si",
        "Definitivamente no",
        "Quizás"
    ]

    respuesta.textContent = "Estoy viendo el futuro.."

    setTimeout(function(){
        let randomIndex = Math.floor(Math.random() * respuestas.length)
        let randomRespuesta = respuestas[randomIndex]
        respuesta.textContent = randomRespuesta
        pregunta.focus()
    },1500)





}