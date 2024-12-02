
var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDescriptionInput=document.getElementById("productDescription");
var productImageInput=document.getElementById("productImage");
var btnAdd=document.getElementById("btnAdd");
var btnUpdate=document.getElementById("btnUpdate");
var searchInput=document.getElementById("searchInput");


var products=[]

if(localStorage.getItem("Products")==null){
    products=[]
}
else{
    products=JSON.parse(localStorage.getItem("Products"))
    displayProduct()
}



function addProduct(){

    var product ={

        name:productNameInput.value,
        price: Number(productPriceInput.value),
        category:productCategoryInput.value,
        description:productDescriptionInput.value,
        image: productImageInput.files[0]?.name
    }

    products.push(product);
    localStorage.setItem("Products",JSON.stringify(products))
    clearInput()

    console.log(products);
    displayProduct()

}

function clearInput(){

    productNameInput.value=null;
    productPriceInput.value=null;
    productCategoryInput.value=null;
    productDescriptionInput.value=null; 

}

function displayProduct(){

    var carton=""

    for(var i=0;i<products.length;i++){

    carton+=` <div class="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
                    <div class="product bg-light p-3 rounded ">
                        <div class="product-image">
                            <img src="" alt="">
                        </div>
                        <div class="product-body">
                            <h2 class="h3">Name: <span>${products[i].name}</span></h2>
                            <h2 class="h4">Price: <span>${products[i].price}</span></h2>
                            <h3 class="h4">Category: <span>${products[i].category}</span></h3>
                            <p class="lead"><span>Description:</span>${products[i].description}</p>
                            <div class="product-btns">
                                <button onclick="setToUpdated(${i})" class="btn btn-outline-warning my-2">Update Product 🪶</button>
                                <button onclick="deleteProduct(${i})" class="btn btn-outline-danger my-2">Delete Product 🗑️</button>
                            </div>
                        </div>
                    </div>
                </div>`
    }

        document.getElementById("display").innerHTML=carton;
    
        
}

function deleteProduct(deletedIndex){

products.splice(deletedIndex,1);

displayProduct()

localStorage.setItem("Products",JSON.stringify(products))

}
var index
function setToUpdated(updatedIndex){
    index=updatedIndex

    productNameInput.value =products[updatedIndex].name;
    productPriceInput.value =products[updatedIndex].price;
    productCategoryInput.value =products[updatedIndex].category;
    productDescriptionInput.value =products[updatedIndex].description; 

    btnAdd.classList.add("d-none")
    btnUpdate.classList.remove("d-none")

    }

function updateProduct(index){

    products[index].name=productNameInput.value;
    products[index].price=productPriceInput.value;
    products[index].category= productCategoryInput.value;
    products[index].description=productDescriptionInput.value;

    localStorage.setItem("Products",JSON.stringify(products))

    displayProduct();

    btnAdd.classList.remove("d-none");
    btnUpdate.classList.add("d-none");

    clearInput();

    }

function searchProduct(){

var term=searchInput.value
var carton=''

for(var i=0;i<products.length;i++){

if(products[i].name.toLowerCase().includes(term.toLowerCase())){

    carton+=` <div class="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
    <div class="product bg-light p-3 rounded ">
        <div class="product-image">
            <img src="" alt="">
        </div>
        <div class="product-body">
            <h2 class="h3">Name: <span>${products[i].name}</span></h2>
            <h2 class="h4">Price: <span>${products[i].price}</span></h2>
            <h3 class="h4">Category: <span>${products[i].category}</span></h3>
            <p class="lead"><span>Description:</span>${products[i].description}</p>
            <div class="product-btns">
                <button onclick="setToUpdated(${i})" class="btn btn-outline-warning my-2">Update Product 🪶</button>
                <button onclick="deleteProduct(${i})" class="btn btn-outline-danger my-2">Delete Product 🗑️</button>
            </div>
        </div>
    </div>
</div>`

    }
}

    document.getElementById("display").innerHTML=carton;
}    



function inputValidate(element){

    var regex={

        productName:/^[A-Z][a-z]{2,6}.{2,8}$/,
        productPrice:/^[1-9]\d{2,5}$/,
        productCategory:/^(tv|moblie|Screens|Electronic)$/i,
        productDescription:/^.{3,300}$/i,
    }

    if(regex[element.id].test(element.value)){

        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    }
    else{
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
    }

}









