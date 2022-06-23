const filtroAuto = document.getElementById ('filtroAuto')
const checkDepto = document.getElementById ('depto')
const checkCasa = document.getElementById ('casa')
const checkQuinta = document.getElementById ('quinta')
const checkMono = document.getElementById ('mono')
const check2amb = document.getElementById ('2amb')
const check3amb = document.getElementById ('3amb')
const check4amb = document.getElementById ('4amb')
const checkCochera = document.getElementById ('cochera')
const checkPileta = document.getElementById ('pileta')
const locacion = document.getElementById ('locacion')


function filtros(datos){
    if (filtroAuto.checked) { 
            const resultado = datos.filter( (prop) => {
                return prop.categoriaTodos === filtroAuto.value
            });
            console.log(resultado)
            renderPropiedades(resultado)
            
            let btnBuscar = document.getElementById('buscar');
            btnBuscar.addEventListener('click', (e)=>{
                e.preventDefault();
                
                console.log(datos)
                
                if (checkDepto.checked) {
                    console.log("check Seleccionado")
                }
                if (checkCasa.checked){
                console.log("check")
            }
            if (checkQuinta.checked){
                console.log("check")
            }
            if (checkMono.checked){
                console.log("check")
            }
            if (check2amb.checked){
                console.log("check")
            }
            if (check3amb.checked){
                console.log("check")
            }
            if (check4amb.checked){
                console.log("check")
            }
            if (checkCochera.checked){
                console.log("check")
            }
            if (checkPileta.checked){
                console.log("check")
            }
        
            
        })
    }
}



            
        
        
