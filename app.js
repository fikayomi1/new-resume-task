let Read = document.getElementById("read");
let More = document.getElementById("more");

function MoreLess(){
    if (Read.innerHTML === "Read More"){
        Read.innerHTML = "Read Less";
        More.style.display = "inline";
    }
    else{
        Read.innerHTML= "Read More";
        More.style.display = "none";
    }
};