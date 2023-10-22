const list = document.querySelector('ul');
const buttonShowAll = document.querySelector(".show-all");
const buttonMapall = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");


function formatCurrency ( value){
    const newValue = value.toLocaleString('pt-br',{
        style: 'currency', 
        currency: 'BRL',
    });

    return newValue

}
function showAll(productArray) {
    let myLi = '';
    productArray.forEach((product) => {

        myLi += `
        <li >

            <img src=${product.src}>
            <p> ${product.name} </p>
            <p class="intem-price"> R$ ${ formatCurrency (product.price)} </p>

        </li>
        `

    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({

        ...product,
        price: product.price * 0.9 // dar 10% de desconto.

    }));
    showAll(newPrices)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, currency) => acc + currency.price, 0)
    list.innerHTML = `
                <li >
                    <p> O valor total dos intens é RS ${ formatCurrency (totalValue)} </p>
                </li>
                `
}

function filterAllItens (){
    const filterJusterVegan = menuOptions.filter( (product) => product.vegan )

    showAll(filterJusterVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapall.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItens)
filterAll.addEventListener('click', filterAllItens )