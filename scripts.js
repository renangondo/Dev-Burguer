const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMap = document.querySelector(".map-all")
const buttonReduce = document.querySelector(".filter-soma")


function showAll(productsArray) {
    myLi = ''
    productsArray.forEach(products => {
        myLi = myLi + `
        <li>
            <img src= ${products.src}
            <p>${products.name}</p>
            <p class="item-price">R$ ${products.price}</p>
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
    const somaFilter = menuOptions.reduce ( (acc, value) => {
        return acc + value.price 
        
    }, 0)
    console.log(somaFilter  )
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions)) // Adicionando um função anonima para não chamar de uma vez
buttonMap.addEventListener('click', mapDesconto)
buttonReduce.addEventListener('click', reduceSoma)