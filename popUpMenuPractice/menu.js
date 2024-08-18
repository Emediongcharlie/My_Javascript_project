document.addEventListener("DOMContentLoaded",function(e) {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const emailInput = document.getElementById("emailInput");

    function openPopup(){
        popupOverlay.style.display = "block";
    }

    function closePopupFunc() {
        popupOverlay.style.display = "none";
    }

    function submitForm(){
        const email = emailInput.value;
        console.log(`Email submitted: ${email}`);
        closePopupFunc();
    }

    openPopup();

    closePopup().addEventListener("click", closePopupFunc);

    popupOverlay.addEventListener("click", function(e) {
    if(e.target === popupOverlay){
        closePopupFunc();
    }
})
})