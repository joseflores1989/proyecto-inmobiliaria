const fila =  document.querySelector('.contenedor-carrousel');
const casas = document.querySelectorAll('.casa');
//const capas = document.querySelectorAll('.capa');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// Event listener para flecha derecha. offsetwidth = 822
 
flechaDerecha.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;

    const controlActivo = document.querySelector('.controles .activo');
    if(controlActivo.nextSibling){
        controlActivo.nextSibling.classList.add('activo');
        controlActivo.classList.remove('activo');
    }
});

// Event listener para flecha izquierda. offsetwidth = 822

flechaIzquierda.addEventListener('click', ()=>{
    fila.scrollLeft -= fila.offsetWidth;
    const controlActivo = document.querySelector('.controles .activo');
    if(controlActivo.previousSibling){
        controlActivo.previousSibling.classList.add('activo');
        controlActivo.classList.remove('activo');
    }
});


//Paginación

const numeroPaginas = Math.ceil(casas.length / 3);
console.log(numeroPaginas);

for(let i = 0; i < numeroPaginas; i++){
    const control = document.createElement('button');

    if(i === 0){
        control.classList.add('activo');
    }

    document.querySelector('.controles').appendChild(control);
    control.addEventListener('click', (e)=>{
        fila.scrollLeft = i *fila.offsetWidth;
        
        document.querySelector('.controles .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

//Hover

 casas.forEach((casa)=>{
    casa.addEventListener('mouseenter', (e)=>{
        const elemento = e.currentTarget;
        setTimeout(()=> {
            casas.forEach(casa => casa.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', ()=>{
    casas.forEach(casa => casa.classList.remove('hover'));
});

/*casas.forEach((casa)=>{
    casa.addEventListener('mouseenter', (e)=>{
        const elemento = e.currentTarget;
        const newElemento = elemento.querySelector('.capa');
        console.log(newElemento);
        newElemento.getclassList.remove('capa');
  /*       setTimeout(()=>{
            capas.forEach(capa => capa.classList.remove('hover'));
            newElemento.getclassList.add('hover');
        }, 300); */
  /*  });
});*/

/*fila.addEventListener('mouseleave', ()=>{
    casas.forEach(casa => casa.classList.remove('hover'));
})*/


