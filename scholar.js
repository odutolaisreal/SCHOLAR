var wrapper = document.querySelector(".scholar_overlay")
var htt = document.querySelector(".header-text")
var ht = document.querySelector("#ht")
var ht2 = document.querySelector("#ht2")
let arrow = document.getElementsByClassName("arrow")
var btn = document.querySelector(".accordion-button")
var body = document.querySelector(".accordion-body")
function previous() {
    wrapper.style.backgroundImage = "url(./images/banner-item-02.jpg)"
    ht.style.display = "block"
    htt.style.display = "none"  
    ht2.style.display = "none"   
    arrow.style.position = "fixed"   
    
}
function next() {
    wrapper.style.backgroundImage = "url(./images/banner-item-03.jpg)"
    ht.style.display = "none"
    htt.style.display = "block"   
}
btn.onclick = function() {
    // body.style.display = "block"
    const tog = document.querySelector(".btn")
    body.classList.toggle("popUp")
}