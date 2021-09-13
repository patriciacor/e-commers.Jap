var product_listing = [];
function products(array)
{
    let list_content = "<br> <br>" ;

    for (let i = 0; i < array.length; i++) { 
        let product = array[i];
      
                   list_content += 
        `
     <h3>` + product.name  + `</h3>   
        <h4>` + product.description +  `</h4>
        <h5>` + product.currency + " " + product.cost +  `</h5> 
        <p>`+ product.soldCount + `</p>
        <p>`+ product.category +`</p>
        <img src="`+ product.images + `" alt="`+ product.description + `" class="img-thumbnail">
             '<hr color = white>'    
      
        `
       
    }
    document.getElementById("listing").innerHTML = list_content; 
    

}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData().then(function (resultObj) {
        if (resultObj.status === "ok") {
            product_listing = resultObj.data;
            let product = product_listing.filter(e => e.id === parseInt(sessionStorage.getItem('info')));

            products();

        }
    })});
