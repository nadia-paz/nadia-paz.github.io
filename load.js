fetch("projects.json")
.then(response => response.json())
.then(projects => {
    localStorage.setItem("projects", JSON.stringify(projects))
})

let container = document.querySelector(".projects")
let loadButton = document.querySelector(".portfolio a")

let startItems = 3;
let loadItems = 3;

function loadFistItems(){
    let projects = JSON.parse(localStorage.getItem("projects"));
    let out = '';
    let counter = 0;
    for(let x of projects){
        if(counter < startItems){
            let codeBlock = '<div class="work">' +
                '<img src="' + x.image + '"/>' +
                '<div class="layer">' +
                    '<h3>' + x.title + '</h3>' +
                    '<p>' + x.about + '</p>' +
                    '<a href="' + x.github + '" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
                '</div>' +
            '</div>';
            out += codeBlock;
        }
        counter++;
    }

    // create div element
    let div = document.createElement("div")
    container.insertBefore(div, loadButton);
    div.innerHTML = out;
}

function loadData(){
    let projects = JSON.parse(localStorage.getItem("projects"));
    let currentItems = document.querySelectorAll(".x").length;
    let out = '';
    let counter = 0;
    for(let x in projects){
        if(counter >= currentItems && counter < loadItems + currentItems){
            let codeBlock = '<div class="work">' +
                '<img src="' + x.image + '"/>' +
                '<div class="layer">' +
                    '<h3>' + x.title + '</h3>' +
                    '<p>' + x.about + '</p>' +
                    '<a href="' + x.github + '" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
                '</div>' +
            '</div>';
            out += codeBlock;
        }
        counter++;
    }
    // create div element
    let div = document.createElement("div")
    container.insertBefore(div, loadButton);
    div.innerHTML = out;

    if(document.querySelectorAll(".x").length = x.length){
        loadButton.style.display = "none";
    }
    fadeIn(div);
}