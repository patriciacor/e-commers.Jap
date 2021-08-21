var product_listing = [];
let cost = Precio;
function products(array)
{
    let list_content = "<br> <br>" ;
    for (let i = 0; i < array.length; i++) {
        let product = array[i];
        
        list_content += 
        `<img src="`+ product.imgSrc + `" alt="`+ product.description + `" class="img-thumbnail">
     <h3>` + product.name  + `</h3>   
        <h4>` + product.description +  `</h4>
        <h5>` + product.currency + " " + product.cost +  `</h5> 
               '<hr>'
               '<hr color = white>'
      
        `
    }
    document.getElementById("listing").innerHTML = list_content;         
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (list) {
        if (list.status === "ok") {
            product_listing = list.data;
            products(product_listing);
        } 
    });
        
});