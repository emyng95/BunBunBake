$(document).ready(function() {

    const mainImg = document.getElementsById("main-img"); //why doesn't this work when it is in called through getElementByClass

    const imagesBun = document.querySelector(".product-image-indicators");

    imagesBun.addEventListener(
        "click", 
        ev =>{
            if (ev.target.tagName.toUpperCase() === "IMG"){
                mainImg.src = ev.target.src
            }
        }

    );

})