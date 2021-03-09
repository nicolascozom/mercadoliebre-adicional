window.onload = function () {

    let productosEnVista = document.getElementById("products-container")

    let categoria = document.getElementById("categoria")

    axios.get(`http://localhost:3000/api/products/categories/`+ categoria.value)

    .then(function(res){

        productosEnVista.innerHTML = 'jaja q salame ' + categoria.value

    })
    .catch(e => console.log(e))


}