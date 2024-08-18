// const url = "http://localhost:8080/create-task"

const signUp = document.querySelector(".form-container");
console.log(signUp)

signUp.addEventListener("submit", async(event)  => {
    event.preventDefault();
    const fullname = document.querySelector(".fullname").value;
    console.log(fullname)
    const email = document.querySelector(".email").value;
    console.log(email)
    const password = document.querySelector(".password").value;
    console.log(password)
    // const confirmPassword = document.querySelector("#confirm-password").value;

    try{
       const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname: fullname, email: email, password: password}) 
    })
    if (response.ok) {
        const feedback = await response.text()
        alert(feedback);
        window.location.href = "../animation.html"
        window.location.href = "../toDoListLogin.html";
    }
    else {
        const error = await response.text()
        alert(error);
    }}
    catch (error) {
        alert(error.message);
    }
    
})
    

