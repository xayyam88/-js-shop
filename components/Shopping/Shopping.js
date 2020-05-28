class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price, img}) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                       <tr>
                            <td class="shopping-element__img"><img src="${img}" alt=""></td>
                            <td class="shopping-element__name">${name}</td>
                            <td class="shopping-price">${price.toLocaleString()} AZN</td>
                       <tr>   
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container fadeInLeftBig">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}     
                    <tr>
                        <td class="shopping-element__total">Total sum:</td>
                        <td class="shopping-element__name"></td>
                        <td class="shopping-total">${sumCatalog.toLocaleString()} AZN</td>
                    <tr>   
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;

    }
}

const shoppingPage = new Shopping();