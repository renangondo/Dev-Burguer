const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMap = document.querySelector(".map-all")
const buttonReduce = document.querySelector(".reduce-soma")
const buttonFilter = document.querySelector(".filter-vegano")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return newValue
}


function showAll(productsArray) {
   let myLi = ''
    productsArray.forEach(products => {
        myLi = myLi + `
        <li>
            <img src= ${products.src}>
            <p>${products.name}</p>
            <p class="item-price">${formatCurrency(products.price)}</p>
        </li> `
    })
    list.innerHTML = myLi
}

function mapDesconto() {
    const newPrices = menuOptions.map(products => ({
        //...products = Ele seria igual o código de baixo
        name: products.name,
        price: products.price * 0.9, //dar 10% de desconto
        vegan: products.vegan,
        src: products.src
    }))
    showAll(newPrices)
}

function reduceSoma() {
    const somaReduce = menuOptions.reduce((acc, value) => acc + value.price, 0)

    list.innerHTML = `
            <li>
                <p>O valor total dos Itens é: ${formatCurrency(somaReduce)}</p>
            </li> 
        `
}

function filterVegano() {
    const veganoFilter = menuOptions.filter((products) => products.vegan === true)
        showAll(veganoFilter)
}



buttonShowAll.addEventListener('click', () => showAll(menuOptions)) // Adicionando um função anonima para não chamar de uma vez
buttonMap.addEventListener('click', mapDesconto)
buttonReduce.addEventListener('click', reduceSoma)
buttonFilter.addEventListener('click', filterVegano)