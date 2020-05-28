class Products {
    constructor() {
        this.classNameActive = 'add_to_cart_button_active';
        this.lavelAdd = 'Add to cart';
        this.lavelRemove = 'Remove in cart';
    }
    handleSetLocationStorge(element, id) {
        const { pushProducts, products } = localStorageUtil.putProducts(id);
        if (pushProducts){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.lavelRemove;
        }else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.lavelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        let pagination = document.querySelector('#pagination');
    
        let notesOnPage = 12;
        let countOfItems = Math.ceil(CATALOG.length / notesOnPage);

        let items = [];
        
        for(let i = 1; i <= countOfItems; i++) {
            let li = document.createElement('li');
            li.innerHTML = i;
            pagination.appendChild(li);
            items.push(li);
        }

        let active;
        showPage(items[0]);
        for (let item of items) {
            item.addEventListener('click', function() {
                showPage(this);
            });
        }
        
        function showPage(item) {
            const productsStore = localStorageUtil.getProducts();
            
            if(active) {
                active.classList.remove('active');
            }
            active = item;
            item.classList.add('active');

            let pageNum = +item.innerHTML;

            let start = (pageNum - 1) * notesOnPage;
            let end = start + notesOnPage;
            
            let notes = CATALOG.slice(start, end);                

            let htmlCatalog = '';

            notes.forEach(({id, name, price, img}) => {
                let activeClass = '';
                let activeText = '';     
                
                if (productsStore.indexOf(id) === -1) {
                    activeText = "Add to cart";
                }else{
                    activeClass = ' add_to_cart_button_active';
                    activeText = "Remove in cart";
                }

                htmlCatalog += `
                            <div class="col-md-3 col-sm-6">
                                <div class="single-shop-product">
                                <div class="single-product">
                                <div class="product-f-image">
                                    <img src="${img}" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="view-details-link" id="btn-modal"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                            </div>
                            <h2><a href="">${name}</a></h2>
                            <div class="product-carousel-price">
                                <ins>${price.toLocaleString()} AZN</ins><del> 5542</del>
                            </div>                   
                            <div class="product-option-shop">
                                        <a class="add_to_cart_button${activeClass}" onclick="productsPage.handleSetLocationStorge(this, '${id}');">
                                            ${activeText}
                                        </a>
                                    </div>                       
                                </div>
                            </div>
                        `;
            });
            const html = `
            <div class="products-row">
                ${htmlCatalog}
            </div>
            `;
    
            ROOT_PRODUCTS.innerHTML =  html; 

        }


    }
}

const productsPage = new Products();