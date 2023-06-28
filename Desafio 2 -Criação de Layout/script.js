alert("O site está sem responsividade!");


/*FOTO DE PERFIL*/

document.querySelector("#input-file").addEventListener("change", function() {
    const reader = new FileReader();

     reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
     })


    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if (recentImageDataUrl) {
        document.querySelector("#profile-pic").setAttribute("src", recentImageDataUrl);
    }
} )


/*TABELA DIA*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === '') {
        alert("Você deve digitar algo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


/*TABELA NOITE*/

const inputBox1 = document.getElementById("input-box-1");
const listContainer1 = document.getElementById("list-container-1");

function addTask1(){
    if(inputBox1.value === '') {
        alert("Você deve digitar algo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox1.value = "";
    saveData1();
}

listContainer1.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData1();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData1();
    }
}, false);

function saveData1(){
    localStorage.setItem("data-1", listContainer1.innerHTML);
}

function showTask1() {
    listContainer1.innerHTML = localStorage.getItem("data-1");
}
showTask1();
