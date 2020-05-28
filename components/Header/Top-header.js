class TopHeader {

    render() {
        const html = `
                <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="user-menu">
                            <ul>
                            <li class="shopping-button"><a onclick="headerPage.handleOpenShoppingPage();"><i class="fa fa-user"></i> My Cart</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="header-right">
                            <ul class="list-unstyled list-inline">
                            <li><a href="#"><i class="fa fa-user"></i> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        ROOT_TOP_HEADER.innerHTML = html;      
    }
}

const topHeaderPage = new TopHeader();