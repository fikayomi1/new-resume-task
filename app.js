let Read = document.getElementById("read");
let More = document.getElementById("more");

function MoreLess(){
    if (Read.innerHTML === "READ MORE"){
        Read.innerHTML = "SHOW LESS";
        More.style.display = "inline";
    }
    else{
        Read.innerHTML= "READ MORE";
        More.style.display = "none";
    }
};