let marcoPuntaje = document.querySelector('.puntaje'); //se selecciona el elemento con la clase puntakje
let puntajeActual = 0; 
let puntajeLimite = 5;

const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i)=>{  //se crear un array de longitud "5" y array.from convierte este array en un array iterable
                                                                   //se utiliza el metodo map para iterar sobre cada elemento del array 
    return `<div class="item item-${i}" data-pos="${i}"></div>`;   //se utiliza data-pos para almacenar la posicion del indice

});

marcoPuntaje.innerHTML = htmlMapa.join("");       //innerHTML se utiliza para establecer el contenido HTML del elemento  Join("")se utiliza para concatenar todos los elementos del array en una sola cadena de texto

document.querySelectorAll(".item").forEach(item =>{  //forEach itera sobre cada uno de los elementos de la clase "item"
    item.addEventListener("mouseover", e =>{  
 
        let posicion = item.getAttribute("data-pos"); //capturar la posicion de la estrella desde el atributo data-pos

        if(puntajeActual === parseInt(posicion) +1 ) {
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris =>{ //itera sobre los elementos y para cada iteracion el elemento actual se representa como cuadradito gris
            if (cuadraditoGris.classList.contains("select")){ //verifica si el elemento actual tiene la clase select

                cuadraditoGris.classList.remove("select");  //si si tiene la clase select esta linea de codigo lo elimina

            }

        });

        for (let i = 0; i<= posicion; i++){
            let cuadradito = document.querySelector(`.item-${i}`); //en cada iteracion se selecciona un elemento con la clase "item-{i}"
            //la variable cuadradito almacena el elemento actual en cada iteracion
            if (!cuadradito.classList.contains("select")){ //si cuadradito no contiene "select" agregar select al elemento actual
                cuadradito.classList.add("select");
            }
        }

        puntajeActual = parseInt(posicion) +1; //se actualiza puntaje actual con la posicion actual(posicion)
    });
    item.addEventListener("click", (e) =>{ //se agrega el evento click al item
        const posicion = item.getAttribute("data-pos");  //cuando el usuario hace click se obtiene la posicion de esa estrella
        puntajeActual = parseInt(posicion) +1; //puntaje actual se actualiza
        console.log(puntajeActual);
    });
});