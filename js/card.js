document.addEventListener("DOMContentLoaded", function () {

    let flashCard1 = document.getElementById("card-1");
    let flashCard1Btn = document.getElementById("btn-1");
    let flashCard2 = document.getElementById("card-2");
    let flashCard2Btn = document.getElementById("btn-2");
    let flashCard3 = document.getElementById("card-3");
    let flashCard3Btn = document.getElementById("btn-3");
    let flashCard4 = document.getElementById("card-4");
    let flashCard4Btn = document.getElementById("btn-4");
    let flashCard5 = document.getElementById("card-5");
    let flashCard5Btn = document.getElementById("btn-5");
    let flashCard6 = document.getElementById("card-6");
    let flashCard6Btn = document.getElementById("btn-6");

    function change() {
        let card1 = flashCard1.classList.contains("show");
        let btnText1 = card1 ? 'Hide Answer' : 'Show Answer';
        let card2 = flashCard2.classList.contains("show");
        let btnText2 = card2 ? 'Hide Answer' : 'Show Answer';
        let card3 = flashCard3.classList.contains("show");
        let btnText3 = card3 ? 'Hide Answer' : 'Show Answer';
        let card4 = flashCard4.classList.contains("show");
        let btnText4 = card4 ? 'Hide Answer' : 'Show Answer';
        let card5 = flashCard5.classList.contains("show");
        let btnText5 = card5 ? 'Hide Answer' : 'Show Answer';
        let card6 = flashCard6.classList.contains("show");
        let btnText6 = card6 ? 'Hide Answer' : 'Show Answer';

        flashCard1Btn.innerText = btnText1;
        flashCard2Btn.innerText = btnText2;
        flashCard3Btn.innerText = btnText3;
        flashCard4Btn.innerText = btnText4;
        flashCard5Btn.innerText = btnText5;
        flashCard6Btn.innerText = btnText6;
    }


    flashCard1Btn.addEventListener("click", function () {
        flashCard2.classList.remove("show");
        flashCard3.classList.remove("show");
        flashCard4.classList.remove("show");
        flashCard5.classList.remove("show");
        flashCard6.classList.remove("show");
        flashCard1.classList.toggle("show");
        change();
        // Change the button text when clicked

    });



    flashCard2Btn.addEventListener("click", function () {
        flashCard1.classList.remove("show");
        flashCard3.classList.remove("show");
        flashCard4.classList.remove("show");
        flashCard5.classList.remove("show");
        flashCard6.classList.remove("show");
        change();
        flashCard2.classList.toggle("show");
        
    });



    flashCard3Btn.addEventListener("click", function () {
        flashCard1.classList.remove("show");
        flashCard2.classList.remove("show");
        flashCard4.classList.remove("show");
        flashCard5.classList.remove("show");
        flashCard6.classList.remove("show");
        flashCard2.classList.toggle("show");
        change();
        flashCard3.classList.toggle("show");
    });



    flashCard4Btn.addEventListener("click", function () {
        flashCard1.classList.remove("show");
        flashCard3.classList.remove("show");
        flashCard2.classList.remove("show");
        flashCard5.classList.remove("show");
        flashCard6.classList.remove("show");
        change();
        flashCard4.classList.toggle("show");

    });



    flashCard5Btn.addEventListener("click", function () {
        flashCard1.classList.remove("show");
        flashCard3.classList.remove("show");
        flashCard4.classList.remove("show");
        flashCard2.classList.remove("show");
        flashCard6.classList.remove("show");
        change();
        flashCard5.classList.toggle("show");
    });


    flashCard6Btn.addEventListener("click", function () {
        flashCard1.classList.remove("show");
        flashCard2.classList.remove("show");
        flashCard3.classList.remove("show");
        flashCard4.classList.remove("show");
        flashCard5.classList.remove("show");
        change();
        flashCard6.classList.toggle("show");
    });

});



