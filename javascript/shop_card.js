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


var celkova_cena_polozky

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
// zobrazenie v malom kosiku 

let pocet_v_kosiku = 0
let kosik = localStorage.getItem("kosik")

let kosik_stranka = JSON.parse(kosik)
for (const value of Object.entries(kosik_stranka)) {
    pocet_v_kosiku = pocet_v_kosiku + value[1]
    if (pocet_v_kosiku > 5) { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + 5 + "+" } else if (pocet_v_kosiku == 0) { document.getElementById("litle_shop_card").innerHTML = "" } else { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + pocet_v_kosiku }

}


var konecna_cena = 0


function pridaj_do_kosiku(id) {

    if (kosik == undefined) {
        kosik = {}
    } else {
        kosik = JSON.parse(kosik)
    } // konvertovanie dat
    if (kosik[id] == undefined) {

    } else {

    } // kosik.push(x) zobrazovalo všetky hodnoty "<div class='product_card'>"
    fetch('.https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
            for (const id in kosik) { //konecna cena //
                let celkova_cena = parseInt(json[id].cena)
                konecna_cena = konecna_cena + (celkova_cena * kosik[id])
                    //odstanenie položky // 
                celkova_cena_polozky = json[id].cena * kosik[id]


                document.getElementById("uplna_cena").innerHTML = "celkova cena produktov je " + konecna_cena + " &#8364"
                    //zobraz kosik// 
                zobraz_kosik.innerHTML +=
                    '<div class=bought_product >' +
                    "<img src=" + json[id].img_src + ' class="product_img"' + ">" +
                    '<div class="container_bought_product">' +
                    '<h2>' + json[id].nazov_produktu + '</h2>' +
                    '<span> cena za ks: ' + json[id].cena + ' &#8364</span>' +
                    '<span id=cel_cena' + json[id].id + '> celkova cena: ' + celkova_cena_polozky + ' &#8364</span>' +
                    '<span id=cel_monozstvo' + json[id].id + '> pocet ks: ' + kosik[id] + ' ks</span>' +
                    '</div>' +
                    '<div class="container_bought_buttons">' +
                    '<button onclick="pridaj_do_kosiku_butt(' + json[id].id + ')">' + 'pridať položku ' + '</button>' +
                    '<button onclick=odober_z_kosiku_butt(' + json[id].id + ')>' + 'vymazať položku' + '</button>' + //tu som skončil 0
                    '</div>' +

                    '</div>'

            }

        }

    )

    localStorage.setItem("kosik", JSON.stringify(kosik))
}

function pridaj_do_kosiku_butt(id) {


    kosik = localStorage.getItem("kosik")
    kosik = JSON.parse(kosik)

    kosik = localStorage.getItem("kosik")
    kosik = JSON.parse(kosik)
    kosik[id]++
        let pocet_v_kosiku = 0
    for (const value of Object.entries(kosik))
        pocet_v_kosiku = pocet_v_kosiku + value[1]
        //zobrazenie v malom kosiku 
    if (pocet_v_kosiku > 5) { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + 5 + "+" } else if (pocet_v_kosiku == 0) { document.getElementById("litle_shop_card").innerHTML = "" } else { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + pocet_v_kosiku }
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        var new_cena = kosik[id] * json[id].cena

        konecna_cena += json[id].cena
        localStorage.setItem("kosik", JSON.stringify(kosik))
        document.getElementById("cel_cena" + [id]).innerHTML = "celkova cena: " + new_cena + "&#8364"
        document.getElementById("cel_monozstvo" + [id]).innerHTML = "pocet ks: " + kosik[id] + " ks"
        document.getElementById("uplna_cena").innerHTML = "celkova cena produktov je " + konecna_cena + " &#8364"
    })
}

function odober_z_kosiku_butt(id) {

    kosik = localStorage.getItem("kosik")
    kosik = JSON.parse(kosik)

    kosik = localStorage.getItem("kosik")
    kosik = JSON.parse(kosik)
    if (kosik[id] > 0) {
        kosik[id]--
    }
    fetch('https://martinhurak.github.io/new_forniture//storage.json').then(response => response.json()).then(json => {
        var new_cena = kosik[id] * json[id].cena

        if (kosik[id] > 0) { // opraviť 
            konecna_cena -= json[id].cena
        } else if (kosik[id] == 0) {
            konecna_cena -= json[id].cena
            document.getElementById("uplna_cena").innerHTML = "celkova cena produktov je " + konecna_cena + " &#8364"

            console.log(kosik[id])
        }




        localStorage.setItem("kosik", JSON.stringify(kosik))
        let pocet_v_kosiku = 0
        for (const value of Object.entries(kosik)) { pocet_v_kosiku = pocet_v_kosiku + value[1] }
        // zobrazenie v malo kosiku 
        if (pocet_v_kosiku > 5) { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + 5 + "+" } else if (pocet_v_kosiku == 0) { document.getElementById("litle_shop_card").innerHTML = "" } else { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + pocet_v_kosiku }
        document.getElementById("cel_cena" + [id]).innerHTML = "celkova cena: " + new_cena + " &#8364"

        document.getElementById("cel_monozstvo" + [id]).innerHTML = "pocet ks: " + kosik[id] + " ks"
        document.getElementById("uplna_cena").innerHTML = "celkova cena produktov je " + konecna_cena + " &#8364"
    })
}

pridaj_do_kosiku()


document.getElementById("uplna_cena").innerHTML = "celkova cena produktov je " + konecna_cena + " &#8364"


function pokracuj_k_pladbe() {

    document.getElementById("uplna_cena").innerHTML = "celkova cena produktov je " + konecna_cena + " &#8364"

    console.log("celkova cena produktov je :" + konecna_cena)
}