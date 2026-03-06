const container = document.getElementById("products")

function renderProducts(){

container.innerHTML=""

products.forEach(product=>{

container.innerHTML+=`

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<div>${product.rating}</div>

<button onclick="goProduct(${product.id})">

Ver Oferta

</button>

</div>

`

})

}

renderProducts()
function goProduct(id){

const product = products.find(p=>p.id===id)

window.open(product.link,"_blank")

}
const search = document.getElementById("search")

search.addEventListener("keyup",function(){

const value = this.value.toLowerCase()

const filtered = products.filter(p=>

p.name.toLowerCase().includes(value)

)

container.innerHTML=""

filtered.forEach(product=>{

container.innerHTML+=`

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<button onclick="goProduct(${product.id})">

Ver Oferta

</button>

</div>

`

})

})