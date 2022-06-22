//show menu//
let click = 0;
let open_menu = document.querySelector("#open-menu")
let close_menu = document.querySelector("#close-menu")
let burger_menu = document.querySelector(".burger-menu")
let burger_menu_items = document.querySelector(".burger-menu-items")
let width_contol = window.matchMedia("(min-width: 1000px)")
window.addEventListener('resize', function(event) {
    if (this.window.innerWidth > 1000) {
        burger_menu.style.display = "none",
            burger_menu_items.style.display = "none",
            click = 0,
            close_menu.style.display = "none";
        open_menu.style.display = "initial";
    } else(burger_menu.style.display = "initial")
});



function toggleMenu() { // da sa to zlepšiť 
    click = click + 1
    if (click % 2 == 0) {
        burger_menu_items.style.display = "none";
        close_menu.style.display = "none";
        open_menu.style.display = "initial";
    } else {
        open_menu.style.display = "none";

        close_menu.style.display = "initial";

        burger_menu_items.style.display = "flex";
    }

}

//---sales_slide show --// 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// sales slide 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sales_item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// reviews slide 

let slideIndex_rev = 1;
showSlides_rev(slideIndex_rev);

// Next/previous controls
function plusSlides_rev(a) {
    showSlides_rev(slideIndex += a);
}

// sales slide 
function currentSlide(a) {
    showSlides_rev(slideIndex = a);
}

function showSlides_rev(a) {
    let i;
    let slides_rev = document.getElementsByClassName("rev-item");
    let dots_rev = document.getElementsByClassName("dote");
    if (a > slides_rev.length) { slideIndex = 1 }
    if (a < 1) { slideIndex = slides_rev.length }
    for (i = 0; i < slides_rev.length; i++) {
        slides_rev[i].style.display = "none";
    }
    for (i = 0; i < dots_rev.length; i++) {
        dots_rev[i].className = dots_rev[i].className.replace(" active", "");
    }
    slides_rev[slideIndex - 1].style.display = "block";
    dots_rev[slideIndex - 1].className += " active";
}

//novy kosik//
// vytvarenie local stroage 
let pocet_v_kosiku = 0
let kosik = localStorage.getItem("kosik")
if (kosik == undefined) {
    kosik = {}
} else { kosik = JSON.parse(kosik) }
for (const value of Object.entries(kosik)) {
    pocet_v_kosiku = pocet_v_kosiku + value[1]
    console.log(pocet_v_kosiku)
    if (pocet_v_kosiku > 5) { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + 5 + "+" } else if (pocet_v_kosiku == 0) { document.getElementById("litle_shop_card").innerHTML = "" } else { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + pocet_v_kosiku }
}


function pridaj_do_kosiku(id) {

    let kosik = localStorage.getItem("kosik")
    if (kosik == undefined) {
        kosik = {}
    } else {
        kosik = JSON.parse(kosik)
    } // konvertovanie dat
    if (kosik[id] == undefined) {
        kosik[id] = 1
    } else {
        kosik[id]++
    }
    let pocet_v_kosiku = 0
    for (const value of Object.entries(kosik))
        pocet_v_kosiku = pocet_v_kosiku + value[1]
    if (pocet_v_kosiku > 5) { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + 5 + "+" } else if (pocet_v_kosiku == 0) { document.getElementById("litle_shop_card").innerHTML = "" } else { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + pocet_v_kosiku }

    // kosik.push(x) zobrazovalo8 všetky hodnoty "<div class='product_card'>"

    localStorage.setItem("kosik", JSON.stringify(kosik))
}


//
//produktovae premenne 
let produkty_div = document.getElementById("produkty")
let category = document.getElementById("category_name")

//galeria_produktov_hl_stranka 

fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        for (let i = 0; i < 12; i++) {
            produkty_div.innerHTML += " <div class='product_card'  (  style=" +
                'background-image:url(' + json[i].img_src + ')' + ">" +
                '<h1 id="show_product_name_' + [i] + '">' + json[i].nazov_produktu + '</h1>' +
                '<a href="#" onclick="show_card(' + json[i].id + ')" id="showme_more_button_' + [i] + '" >' + "zobraziť detail" + '</a>'
            '</div>'
        }
    })
    //zobrazenie kategorie // 
function show_news() {
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        produkty_div.innerHTML = ""
        category.innerHTML = "novinky"
        for (let i = 0; i < 12; i++) {

            produkty_div.innerHTML +=
                "<div class='product_card'  (  style=" +
                'background-image:url(' + json[i].img_src + ')' + ">" +
                '<h1 id="show_product_name_' + [i] + '">' + json[i].nazov_produktu + '</h1>' +
                '<a href="#" onclick="show_card(' + json[i].id + ')" id="showme_more_button_' + [i] + '" >' + "zobraziť detail" + '</a>'
            '</div>'

        }
    })
}

function show_gouch() {
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        produkty_div.innerHTML = ""
        category.innerHTML = "gauce"
        for (let i = 0; i < json.length; i++) {
            if (json[i].kategoria == "gauc") {
                produkty_div.innerHTML +=
                    "<div class='product_card'  (  style=" +
                    'background-image:url(' + json[i].img_src + ')' + ">" +
                    '<h1 id="show_product_name_' + [i] + '">' + json[i].nazov_produktu + '</h1>' +
                    '<a href="#" onclick="show_card(' + json[i].id + ')" id="showme_more_button_' + [i] + '" >' + "zobraziť detail" + '</a>'
                '</div>'
            }
        }
    })
}

function show_chair() {
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        produkty_div.innerHTML = ""
        category.innerHTML = "stolicky"
        for (let i = 0; i < json.length; i++) {
            if (json[i].kategoria == "stolicka") {
                produkty_div.innerHTML +=
                    "<div class='product_card'  (  style=" +
                    'background-image:url(' + json[i].img_src + ')' + ">" +
                    '<h1 id="show_product_name_' + [i] + '">' + json[i].nazov_produktu + '</h1>' +
                    '<a href="#" onclick="show_card(' + json[i].id + ')" id="showme_more_button_' + [i] + '" >' + "zobraziť detail" + '</a>'
                '</div>'
            }
        }
    })
}

function show_table() {
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        produkty_div.innerHTML = ""
        category.innerHTML = "stoly"
        for (let i = 0; i < json.length; i++) {
            if (json[i].kategoria == "stol") {
                produkty_div.innerHTML +=
                    "<div class='product_card'  (  style=" +
                    'background-image:url(' + json[i].img_src + ')' + ">" +
                    '<h1 id="show_product_name_' + [i] + '">' + json[i].nazov_produktu + '</h1>' +
                    '<a href="#" onclick="show_card(' + json[i].id + ')" id="showme_more_button_' + [i] + '" >' + "zobraziť detail" + '</a>'
                '</div>'
            }
        }
    })
}





//----------------------------------------------------------------------//
function show_card(id) {
    document.getElementById("product_detail_container").style.display = "block"

    let product_detail_container = document.getElementById("product_detail_container")
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        let i = id

        product_detail_container.innerHTML += " <div id='product_detail_card'(  style=" +
            'background-image:url(' + json[i].img_src + ')' + ">" +
            '<i class="fa-solid fa-x" onclick="close_product_detail_container()" id="close_product_detail_container"></i>' +
            '<h1   id="product_name_' + [i] + '">' + json[i].nazov_produktu + '</h1>' + //tu som skončil
            '<article>' +
            '<h3> cena :' + json[i].cena + '€</h3>' +
            '<h3> popis :</h3> ' +
            '<p>' + json[i].popis + '</p>' +
            '<button id="buy" onclick="pridaj_do_kosiku(' + json[i].id + ')">pridaj do kosika</button>' +
            '<a href="/shop_card.html" id="continue"onclick="zobrazit_kosik()">zobraziť kosik...</a>' +
            '</article>' +
            '</div>'
        console.log(json[i].popis)
        window.scrollTo(0, 1000);

    })
}


function close_product_detail_container() {
    document.getElementById("product_detail_container").style.display = "none"
}
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;

});