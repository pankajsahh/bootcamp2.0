let data = {
    email: "",
    password: ""
}
const localdata = JSON.parse(localStorage.getItem("loginData"));

if(localdata){
    data.email = localdata.email
    data.password = localdata.password
}
if(data.email || data.password){
    document.getElementById("Email").value=data.email
    document.getElementById("Password").value=data.password
}

function changeHandeller(ele) {
    console.log(ele)
    if (ele.id === "Email") data.email = ele.value;
    if (ele.id === "Password") data.password = ele.value;

    console.log(data)
}

function SaveLocalStorage() {
    localStorage.setItem("loginData", JSON.stringify(data));
}