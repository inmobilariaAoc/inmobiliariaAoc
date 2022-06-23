const filtroAuto = document.getElementById ('filtroAuto')
const checkFiltro = document.querySelectorAll('#filtro')
const btnBuscar = document.getElementById('buscar');



function lanzaFiltro() {
    
    checkFiltro.forEach((e) => {
        if (e.checked) {
            console.log("check Seleccionado")
            console.log(e.value)
            const filterProp = arrFiltro[0].filter( (prop) => {
                return prop.tipo === e.value
            })
            arrFiltro.length = 0
            arrFiltro.push(filterProp)
            console.log(arrFiltro)
            console.log(arrFiltro.length)
            renderPropiedades(filterProp)
        }
    });               
}  

function filtros(datos){
    if (filtroAuto.checked) { 
        const resultado = datos.filter( (prop) => {
            return prop.categoriaTodos === filtroAuto.value
        });
      
        console.log(resultado)
        renderPropiedades(resultado)
        arrFiltro.push(resultado)
    }
}


            
         
                
            
            
            

            





        

    
                


            


                
        
            



            
        
        
