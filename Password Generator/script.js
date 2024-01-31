let Password = document.getElementById("PassWord_Our");
let Generate = document.getElementById("Generate");
let Copy = document.getElementById("Generate");
let Lenght = document.getElementById("Lenght");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let Alert = document.querySelector(".Alert");

Generate.addEventListener("click",function(){
if(Lenght.value >0){

    
    let str = "";
    if(uppercase.checked){
        str += "QWERTYUIOPASDFG";
    }
    if(lowercase.checked){
        str += "qwertyuiopasdfg";
    }
    if(number.checked){
        str += "12345678910";
    }
    if(symbol.checked){
        str += "!@#$%^&*()_+{}|";
    }
    
    Password.value = RandomPass(Lenght.value,str,str.length);
    Password.style.color = "black"
    Alert.style.display = "none"
}
else{
    Alert.style.display = "block"
}
})


function RandomPass(Length , Charaterstr ,strlenght){
    let pass = "";
    for(let i=0; i<Length;i++){
        let randomnumber = Math.floor(Math.random()*strlenght);
        pass += Charaterstr[randomnumber];
    }
    return pass;
}

Copy.addEventListener("click", function () {
    navigator.clipboard
      .writeText(Password.value);
});