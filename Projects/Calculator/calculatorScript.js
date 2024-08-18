const display = document.getElementById('display');
const button_select = Array.from(document.getElementsByClassName("buttons"));



button_select.map(buttons => {
    // let buttonValue = buttons.innerHTML;
    buttons.addEventListener("click", (e) => {
        switch(e.target.innerHTML){
           
            case "AC":
                display.innerHTML= "";
                break;
            case "DEL":
                display.innerHTML= display.innerHTML.slice(0, -1)
                break;
            case "=":
                try{
                    display.innerHTML= eval(display.innerHTML.replace("%","/100"))
                }
                catch{
                    display.innerHTML = "Error"
                }
                break
            default:
                display.innerHTML += e.target.innerHTML
        }
})     
})