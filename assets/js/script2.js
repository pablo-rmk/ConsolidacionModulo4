const indiceUno = document.getElementById('indiceUno');
const indiceDos = document.getElementById('indiceDos');
const indiceTres = document.getElementById('indiceTres');



function obtenerPersonaje(id, color, contador) {
    
    var bloque = document.getElementById(id);

    fetch(`https://swapi.dev/api/people/${contador}`)
        .then(response => response.json())
        .then(data => bloque.innerHTML += ` <div class="col-12 col-md-6 col-lg-4">
                                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                                    <div class="circle">
                                                        <img src="./assets/img/${color}.png" alt="">
                                                    </div>
                                                    <div class="timeline-text">
                                                        <h6>${data.name}</h6>
                                                        <p>Estatura: ${data.height} cm. Peso: ${data.mass} kg.</p>
                                                    </div>
                                                </div>
                                            </div>`)
        .catch(e => console.log('Se ha producido un error', e));


};

function* generador(id, color, contador) {

    obtenerPersonaje(id, color, contador)
    yield;
    obtenerPersonaje(id, color, contador)
    yield;
    obtenerPersonaje(id, color, contador)
    yield;
    obtenerPersonaje(id, color, contador)
    yield;
    obtenerPersonaje(id, color, contador)
    yield;

    return 
}

let contador = 0;

indiceUno.addEventListener('mouseover', () => {
    if(contador < 5){
        contador +=1;
        let generador1 = generador('bloqueUno', 'salmon', contador);
        generador1.next();
    }   
});

let contador2 = 5
indiceDos.addEventListener('mouseover', () => {
    if(contador2 >= 5 && contador2 < 10){
        contador2 +=1;
        let generador2 = generador('bloqueDos', 'verde', contador2);
        generador2.next();
    }   
});

contador3 = 10
indiceTres.addEventListener('mouseover', () => {
    if(contador3 >= 10 && contador3 < 15){
        contador3 +=1;
        let generador3 = generador('bloqueTres', 'celeste', contador3);
        generador3.next();
    }   
});
