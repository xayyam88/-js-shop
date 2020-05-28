class Header {
    handleOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count){
         const html = `
            <div class="shopping-item">
                <div class="shopping-button" onclick="headerPage.handleOpenShoppingPage();">Cart - <span class="cart-amunt">$800</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">
                    ${count}
                </span>
                </div>
            </div>
         `;
         ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();