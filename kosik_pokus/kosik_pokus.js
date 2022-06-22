//novy kosik//

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
    } // kosik.push(x) zobrazovalo všetky hodnoty "<div class='product_card'>"

    localStorage.setItem("kosik", JSON.stringify(kosik))
}




//galeria_produktov_hl_stranka 

let produkty_div = document.getElementById("produkty")
fetch('/storage.json').then(response => response.json()).then(json => {
    for (let i = 0; i < json.length; i++) {
        produkty_div.innerHTML += " <div class='product_card' onmouseenter=mouseEnter"+[i]+"() onmouseleave=mouseLeave"+[i]+"() (  style=" +
            'background-image:url(' + json[i].img_src + ')' + ">" +
            '<h1   id="show_product_name_'+[i]+'">' + json[i].nazov_produktu + '</h1>' +
            '<a href="#" id="showme_more_button_'+[i]+'" >'+"zobraziť detail"+'</a>'
            // "<img src="+json[i].img_src+' class="product_img"'+">"+

            '</div>'
            //      produkty_din.innerHTML += '<div>'+json[i].id+'<button onclick="pridaj_do_kosiku('+json[i].id+')">pridaj</button></div>'   
    }
})


function mouseEnter0() // da sa zlepšiť 
{
    document.getElementById("show_product_name_0").style.opacity="1"
    document.getElementById("showme_more_button_0").style.opacity="1"
}
function mouseLeave0()
{
    document.getElementById("show_product_name_0").style.opacity="0"
    document.getElementById("showme_more_button_0").style.opacity="0"
}

function mouseEnter1()
{
    document.getElementById("show_product_name_1").style.opacity="1"
    document.getElementById("showme_more_button_1").style.opacity="1"
}
function mouseLeave1()
{
    document.getElementById("show_product_name_1").style.opacity="0"
    document.getElementById("showme_more_button_1").style.opacity="0"
}

function mouseEnter2()
{
    document.getElementById("show_product_name_2").style.opacity="1"
    document.getElementById("showme_more_button_2").style.opacity="1"
}
function mouseLeave2()
{
    document.getElementById("show_product_name_2").style.opacity="0"
    document.getElementById("showme_more_button_2").style.opacity="0"
}

function mouseEnter3()
{
    document.getElementById("show_product_name_3").style.opacity="1"
    document.getElementById("showme_more_button_3").style.opacity="1"
}
function mouseLeave3()
{
    document.getElementById("show_product_name_3").style.opacity="0"
    document.getElementById("showme_more_button_3").style.opacity="0"
}

function mouseEnter4()
{
    document.getElementById("show_product_name_4").style.opacity="1"
    document.getElementById("showme_more_button_4").style.opacity="1"
}
function mouseLeave4()
{console.log("sme preč")
    document.getElementById("show_product_name_4").style.opacity="0"
    document.getElementById("showme_more_button_4").style.opacity="0"
}

function mouseEnter5()
{
    document.getElementById("show_product_name_5").style.opacity="1"
    document.getElementById("showme_more_button_5").style.opacity="1"
}
function mouseLeave5()
{
    document.getElementById("show_product_name_5").style.opacity="0"
    document.getElementById("showme_more_button_5").style.opacity="0"
}

function mouseEnter6()
{
    document.getElementById("show_product_name_6").style.opacity="1"
    document.getElementById("showme_more_button_6").style.opacity="1"
}
function mouseLeave6()
{
    document.getElementById("show_product_name_6").style.opacity="0"
    document.getElementById("showme_more_button_6").style.opacity="0"
}

function mouseEnter7()
{
    document.getElementById("show_product_name_7").style.opacity="1"
    document.getElementById("showme_more_button_7").style.opacity="1"
}
function mouseLeave7()
{
    document.getElementById("show_product_name_7").style.opacity="0"
    document.getElementById("showme_more_button_7").style.opacity="0"
}

function mouseEnter8()
{
    document.getElementById("show_product_name_8").style.opacity="1"
    document.getElementById("showme_more_button_8").style.opacity="1"
}
function mouseLeave8()
{
    document.getElementById("show_product_name_8").style.opacity="0"
    document.getElementById("showme_more_button_8").style.opacity="0"
}

function mouseEnter9()
{
    document.getElementById("show_product_name_9").style.opacity="1"
    document.getElementById("showme_more_button_9").style.opacity="1"
}
function mouseLeave9()
{
    document.getElementById("show_product_name_9").style.opacity="0"
    document.getElementById("showme_more_button_9").style.opacity="0"
}

function mouseEnter10()
{
    document.getElementById("show_product_name_10").style.opacity="1"
    document.getElementById("showme_more_button_10").style.opacity="1"
}
function mouseLeave10()
{
    document.getElementById("show_product_name_10").style.opacity="0"
    document.getElementById("showme_more_button_10").style.opacity="0"
}

function mouseEnter11()
{
    document.getElementById("show_product_name_11").style.opacity="1"
    document.getElementById("showme_more_button_11").style.opacity="1"
}
function mouseLeave11()
{
    document.getElementById("show_product_name_11").style.opacity="0"
    document.getElementById("showme_more_button_11").style.opacity="0"
}

  
//----------------------------------------------------------------------//