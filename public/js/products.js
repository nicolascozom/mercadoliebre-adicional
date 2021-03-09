window.onload = function () {

    let ultimos = []

    let productos = ''

    let ultimosEnVista = document.getElementById("latest-products")

    axios.get('http://localhost:3000/api/products/latest')

    .then(function(res){
        if (res.status == 200){

            for (let i = 0 ; i < 8 ; i ++){

                ultimos = res.data.data.ultimos;

                let producto = ''

                producto = '<div class="col-12 col-sm-6 col-lg-3">'

                producto += '<section class="product-box">'

                producto += '<a href="/products/detail/' + ultimos[i].id + '">'

                producto += '<figure class="product-box_image">'

                producto += '<img src="/images/products/' + ultimos[i].image + '"' + 'alt="' + ultimos[i].name + '">'

                producto += '</figure>'

                producto += '<article class="product-box_data">'

                producto += '<h2>' + ultimos[i].price + '</h2>'

                producto += '<span>' + ultimos[i].discount + "% OFF" + '</span>'

                producto += '<p>' + ultimos[i].name + '</p>'

                producto += '<i class="fas fa-truck"></i>'

                producto += '</article>'

                producto += '</a>'

                producto += '</section>'

                producto += '</div>'
                
                productos += producto

            }

            ultimosEnVista.innerHTML = productos

        }else{
            // console.log(res.status)
            console.log(res.data.data.ultimos[0].name)
        }
    })
    
    .catch(e => console.log(e))
}