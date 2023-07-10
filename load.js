fetch("projects.json")
.then(response => response.json())
.then(projects => {
    localStorage.setItem("projects", JSON.stringify(projects))
})

//let container = document.querySelector(".projects")
let container = document.querySelector(".pro")
let loadButton = document.querySelector(".portfolio button")

let projects = JSON.parse(localStorage.getItem("projects"));
let numberOfProjects = projects.length;

let startItems = 3;
let loadItems = 3;
let clicks = 0

function loadFistItems(){
    // let projects = JSON.parse(localStorage.getItem("projects"));
    let out = '<div class="projects">';
    let counter = 0;
    for(let project of projects){
        if(counter < startItems){
            let codeBlock = '<div class="work">' +
                '<img src="' + project.image + '"/>' +
                '<div class="layer">' +
                    '<h3>' + project.title + '</h3>' +
                    '<p>' + project.about + '</p>' +
                    '<a href="' + project.github + '" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
                '</div>' +
            '</div>';
            out += codeBlock;
        }
        counter++;
    }
    out += '</div>';
    // create div element
    let div = document.createElement("div")
    container.insertBefore(div, loadButton);
    div.innerHTML = out;
}

function loadData(){
    // let projects = JSON.parse(localStorage.getItem("projects"));
    // let currentItems = document.querySelectorAll(".work").length;
    let currentItems = startItems + clicks * loadItems;
    clicks += 1;

    if(currentItems >= numberOfProjects){
        loadButton.style.display = "none";
    }else{
        let out = '<div class="projects">';
        let counter = 0
        //let counter = currentItems; 
        for(let project of projects){
            if(counter >= currentItems && counter < loadItems + currentItems){
                let codeBlock = '<div class="work">' +
                    '<img src="' + project.image + '"/>' +
                    '<div class="layer">' +
                        '<h3>' + project.title + '</h3>' +
                        '<p>' + project.about + '</p>' +
                        '<a href="' + project.github + '" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
                    '</div>' +
                '</div>';
                out += codeBlock;
            }
            counter++;
        }
        
        out += '</div>';
        // create div element
        let div = document.createElement("div")
        container.insertBefore(div, loadButton);
        div.innerHTML = out;
    
        if(document.querySelectorAll(".work").length >= numberOfProjects){
            loadButton.style.display = "none";
        }
        fadeIn(div);
    }

}

function fadeIn(div){
    let opacity = 0;
    let interval = setInterval(function(){
        if(opacity <= 1){
            opacity = opacity + 0.1;
            div.style.opacity = opacity;
        }else{
            clearInterval(interval)
        }
    }, 30)
}