const login = document.querySelector(".form-container")
console.log(login)

login.addEventListener('submit', async(e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(password)

    try{
        const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
        })
    if(response.ok) {
        const feedback = await response.text();
        alert("successful");
        window.location.href = "../toDoListEdit.html"
        
    } else {
        const error = await response.text();
        alert(error);
        }
    }
    catch(error) {
        alert(error.message);
    }
    
})