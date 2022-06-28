const url = '/data/propiedades.json'

async function getData(){
  let res = await fetch (url)
  let datosDePropiedades = await res.json();

  /* renderPropiedades(datosDePropiedades); */  
  filtros(datosDePropiedades)
  console.log(datosDePropiedades)
  
}
let arrFiltro = []
getData(arrFiltro);

function renderPropiedades(data){
  
  let containerPropiedades = document.getElementById('container__grid');

  data.forEach(propiedad => {
    containerPropiedades.innerHTML += `
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class="property-item rounded overflow-hidden">
      <div class="position-relative overflow-hidden">
          <a class="text-color" href=""><img class="img-fluid" src="${propiedad.img}" alt="${propiedad.titulo}"></a>
          <div class="btn-color rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${propiedad.categoriaTodos}</div>
          <a target="_BLANK" href="https://wa.me/541158880791?text=Buenas%20,%20me%20gustaría%20información%20sobre%20la%20propiedad:%20${propiedad.titulo}%20con%20dirección%20en%20${propiedad.direccion}${propiedad.localidad}%20gracias!.">
            <div class="bg-white rounded-top text-color position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
              Enviar mensaje
            </div>
          <a/>
      </div>
      <div class="p-4 pb-0">
          <h5 class="text-color mb-3">${propiedad.precio}</h5>
          <a class="d-block h5 mb-2 text-color" href="#">${propiedad.titulo}</a>
          <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${propiedad.direccion} ${propiedad.localidad}</p>
      </div>
      <div class="d-flex border-top">
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${propiedad.superficie}</small>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${propiedad.ambientes}</small>
      </div>
    </div>
  </div>
  `
});
}
    
  

/* function mostrarModal(datosDePropiedades){
  let botones = document.getElementsByClassName('btn__info');
  botones.forEach(boton => {
    boton.ad
  })
} */

/* function filtros(){
  let btnBuscar = document.getElementById('buscar');
  btnBuscar.addEventListener('click', (e)=>{
    e.preventDefault();
  })
} */

// let btn__info = document.getElementById('btn__info');

// window.addEventListener('click', function (e){
//   console.log(this.innerText)
//   function modal(e){
//     for (let i = 0; i < data.length; i++) {
//       let btn = `btn__info${i}`;
//       if (e.target === btn) {
//         return console.log(`btn__info${i}`)
//       }else{
//         return
//       }
//     }
//   }
//   modal(e);
// })