function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();
    sidebarPage.render();
    footerPage.render();
    topHeaderPage.render();
    bottomHeaderPage.render();
}
spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000);
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });

/* Left SideBar */
window.onload = function(){
    let icon = document.querySelector('.sidebar__icon');
    let menuBar = document.querySelector('.sidebar');
    let main = document.querySelector('.main'); 
    let mainContent = document.querySelector('.main__content'); 
    let menuList = document.querySelector('.navbar-collapse1');
    const scrollTop = document.querySelector('.scrollTop');

    menuBar.onmouseover = function() {
        this.classList.add('sidebar-hover'); 
    }
    icon.onclick = function() {
        this.classList.toggle('change-icon');
        main.classList.toggle('main_bg');
        mainContent.classList.toggle('main__content_animation');
        menuList.classList.toggle('navbar-collapse1_hover');
        menuBar.classList.toggle('sidebar_menu');
        menuBar.classList.add('sidebar-hover');
    }

    window.onmouseover = function() {
        if (window.scrollY > 900) {
            scrollTop.classList.remove('scrollTop-hide');
        }else if(window.scrollY < 900) {
            scrollTop.classList.add('scrollTop-hide');
        }
    };

    scrollTop.onclick = function() {
        window.scrollTo(0, 0);
    }

}
/* down plagin */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        
        document.querySelector('' +blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
}

/* Scroll Line */
scrollElem = document.querySelector('.scroll__line');
window.onscroll = () => {
    scrollIndicator();
}

function scrollIndicator(){
    const topScrollLine = document.documentElement.scrollTop;
    const heightPageScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollYCounter = (topScrollLine / heightPageScroll) * 100; 
    scrollElem.style.width = scrollYCounter + '%';   
}

/* Modal Windows */
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn-modal");
btn.onclick = function() {
    modal.style.display = "block";
    console.log('sfsdf');  
}



