window.onload = function () {

    fetch("http://localhost:3000/api/products/latest")

    .then(function(res){
        if (res.data.meta.status == 201){
            console.log(res.data.meta.status)
            window.location.href = "http://localhost:3000/users/cart"
        }else{
            console.log(res)
        }
    })

}