let logIn = document.getElementById("login-btn");

logIn.addEventListener("click", ()=>{
    const getNumber = document.querySelector("#input-number");
    const number = getNumber.value;
    const getPin = document.querySelector("#input-pin");
    const pin = getPin.value;

    if(number === "01864077157" && pin === "Khan"){
        alert("Login success")
        window.location.replace("home.html")
    }
    else{
        alert("Login failed")
    }
});