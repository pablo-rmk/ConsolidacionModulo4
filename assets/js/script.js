const indexUno = document.getElementById('index1');
const indexDos = document.getElementById('index2');
const indexTres = document.getElementById('index3');

var contador = 1;

indiceUno.addEventListener('mouseover', () => {
    fetch(`https://swapi.dev/api/people/${contador}`)
        .then(response => response.json())
        .then(data => obtenerPersonaje(data, 6, 'bloqueUno', 'salmon'))
        .catch(e => console.log('Se ha producido un error', e));
});

indiceDos.addEventListener('mouseover', () => {
    fetch(`https://swapi.dev/api/people/${contador}`)
        .then(response => response.json())
        .then(data => obtenerPersonaje(data, 11, 'bloqueDos', 'verde'))
        .catch(e => console.log('Se ha producido un error', e));
});

indiceTres.addEventListener('mouseover', () => {
    fetch(`https://swapi.dev/api/people/${contador}`)
        .then(response => response.json())
        .then(data => obtenerPersonaje(data, 16,'bloqueTres', 'celeste'))
        .catch(e => console.log('Se ha producido un error', e));
});

function obtenerPersonaje(data, max, id, color) {
    let bloque = document.getElementById(id);
    if (contador >= (max-5) && contador < max){
        let nombre = data.name;
        let peso = data.mass;
        if(peso === 'unknown'){
            peso = 'N/D'
        };
        let estatura = data.height;
        bloque.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                    <div class="circle">
                                        <img src="./assets/img/${color}.png" alt="">
                                    </div>
                                    <div class="timeline-text">
                                        <h6>${nombre}</h6>
                                        <p>Estatura: ${estatura} cm. Peso: ${peso} kg.</p>
                                    </div>
                                </div>
                            </div>`;
        contador += 1;
    }
};