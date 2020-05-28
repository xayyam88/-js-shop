class BottomHeader {

    render() {
        const html = `
                    <div class="container">
                    <div class="row">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div> 
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="./">Home</a></li>
                                <li><a href="#allProducts">All Products</a></li>
                                <li><a href="#latestProducts">Latest Products</a></li>
                                <li><a href="#brandsDown">Brands</a></li>
                                <li><a href="#othersDown">Others</a></li>
                            </ul>
                        </div> 
                    </div>
                </div>
                `;
        ROOT_BOTTOM_HEADER.innerHTML = html;      
    }
}

const bottomHeaderPage = new BottomHeader();