window.onload = function () {

    let productos = [] // PARA TRABAJAR DENTRO DEL FOR

    let productosDeEstaCategoria = '' // PARA GUARDAR EL RESULTADO DE CADA ITERACIÓN, Y LUEGO PASARLE AL innerHTML

    let productosEnVista = document.getElementById("products-container") // RECIBE STRING DE RESULTADOS ACUMULADOS Y CAMBIA SU innerHTML

    let categoria = document.getElementById("categoria") // RECIBE LA CATEGORÍA QUE LUEGO PASA POR URL AL CONTROLLER

    axios.get(`http://localhost:3000/api/products/categories/${categoria.value}`) // TRAIGO LOS PRODUCTOS YA FILTRADOS


    .then(function(res){

        if (res.data.meta.status == 201){ // SI ES STATUS 201, ENCONTRÓ CATEGORÍA EN res.data.data.category
            
            for (let i = 0 ; i < res.data.data.category.products.length ; i ++) {

                productos = res.data.data.category.products

                let producto = ''

                producto = '<div class="col-12 col-sm-6 col-lg-4">' +

                '<section class="product-box">' +

                '<a href="/products/detail/' + productos[i].id + '">' +

                '<figure class="product-box_image">' + 

                '<img src="/images/products/' + productos[i].image + '" alt="' + productos[i].name + '">' +

                '</figure>' + 

                '<article class="product-box_data">' +

                '<h2>$' + productos[i].price + '</h2>' +

                '<span>' + productos[i].discount + '% OFF</span>' +

                '<p>' + productos[i].name + '</p>' + 

                '<i class="fas fa-truck"></i>' + 

                '</article>' +

                '</a>' +

                '</section>' +

                '</div>'

                productosDeEstaCategoria += producto

            }

            productosEnVista.innerHTML = productosDeEstaCategoria


        }else if (res.data.meta.status == 200){
 
            for (let i = 0 ; i < res.data.data.products.length ; i ++) {

                productos = res.data.data.products

                let producto = ''

                producto = '<div class="col-12 col-sm-6 col-lg-4">' +

                '<section class="product-box">' +

                '<a href="/products/detail/' + productos[i].id + '">' +

                '<figure class="product-box_image">' + 

                '<img src="/images/products/' + productos[i].image + '" alt="' + productos[i].name + '">' +

                '</figure>' + 

                '<article class="product-box_data">' +

                '<h2>$' + productos[i].price + '</h2>' +

                '<span>' + productos[i].discount + '% OFF</span>' +

                '<p>' + productos[i].name + '</p>' + 

                '<i class="fas fa-truck"></i>' + 

                '</article>' +

                '</a>' +

                '</section>' +

                '</div>'

                productosDeEstaCategoria += producto

            }

            productosEnVista.innerHTML = productosDeEstaCategoria
        
        }else {

            console.log(res)
        
        }

    })
    .catch(e => console.log(e))


}