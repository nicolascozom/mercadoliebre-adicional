window.onload = function () {

    let ultimos = [] // PARA TRABAJAR DENTRO DEL FOR

    let ultimosProductos = '' // PARA GUARDAR EL RESULTADO DE CADA ITERACIÓN, Y LUEGO PASARLE AL innerHTML

    let productosEnOferta = '' // PARA GUARDAR EL RESULTADO DE CADA ITERACIÓN, Y LUEGO PASARLE AL innerHTML

    let ultimosEnVista = document.getElementById("latest-products") // RECIBE STRING DE RESULTADOS ACUMULADOS Y CAMBIA SU innerHTML

    let ofertasEnVista = document.getElementById("offers-products") // RECIBE STRING DE RESULTADOS ACUMULADOS Y CAMBIA SU innerHTML

    axios.get('http://localhost:3000/api/products/latest') // TRAIGO LOS PRODUCTOS

    .then(function(res){
        if (res.status == 200){

            for (let i = 0 ; i < 8 ; i ++){ //RECORRO LOS PRIMEROS 8

                ultimos = res.data.data.ultimos;

                let producto = ''

                producto = '<div class="col-12 col-sm-6 col-lg-3">' + 
                
                '<section class="product-box">' + 
                
                '<a href="/products/detail/' + ultimos[i].id + '">' + 
                
                '<figure class="product-box_image">' + 
                
                '<img src="/images/products/' + ultimos[i].image + '"' + 'alt="' + ultimos[i].name + '">' + 
                
                '</figure>' + 
                
                '<article class="product-box_data">' + 
                
                '<h2>' + ultimos[i].price + '</h2>' + 
                
                '<span>' + ultimos[i].discount + "% OFF" + '</span>' + 
                
                '<p>' + ultimos[i].name + '</p>' + 
                
                '<i class="fas fa-truck"></i>' + 
                
                '</article>' + 
                
                '</a>' + 
                
                '</section>' + 
                
                '</div>'
                
                ultimosProductos += producto // GUARDO EL HTML CREADO EN ESTA ITERACIÓN

            }

            ultimosEnVista.innerHTML = ultimosProductos // PASO EL RESULTADO FINAL AL HTML

        }else{
            
            console.log(res.status)

        }
    })
    
    .catch(e => console.log(e))


    axios.get('http://localhost:3000/api/products/offers') // TRAIGO LOS PRODUCTOS

    .then(function(res){
        if (res.status == 200){

            for (let i = 0 ; i < 8 ; i ++){ //RECORRO LOS PRIMEROS 8

                ultimos = res.data.data.inSale;

                let producto = ''

                producto = '<div class="col-12 col-sm-6 col-lg-3">' + 
                
                '<section class="product-box">' + 
                
                '<a href="/products/detail/' + ultimos[i].id + '">' + 
                
                '<figure class="product-box_image">' + 
                
                '<img src="/images/products/' + ultimos[i].image + '"' + 'alt="' + ultimos[i].name + '">' + 
                
                '</figure>' + 
                
                '<article class="product-box_data">' + 
                
                '<h2>' + ultimos[i].price + '</h2>' + 
                
                '<span>' + ultimos[i].discount + "% OFF" + '</span>' + 
                
                '<p>' + ultimos[i].name + '</p>' + 
                
                '<i class="fas fa-truck"></i>' + 
                
                '</article>' + 
                
                '</a>' + 
                
                '</section>' + 
                
                '</div>'
                
                productosEnOferta += producto // GUARDO EL HTML CREADO EN ESTA ITERACIÓN

            }

            ofertasEnVista.innerHTML = productosEnOferta // PASO EL RESULTADO FINAL AL HTML

        }else{
            
            console.log(res.status)

        }
    })
    
    .catch(e => console.log(e))

}