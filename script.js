//populate the grid
for (let i = 1; i <= 256; i++) {
    let wrapper = document.querySelector("#wrapper");
    let grid = document.createElement("div");
    grid.classList.add('grid');
    wrapper.appendChild(grid);
};

//mouse hover to change color

let gridSelection = document.getElementsByClassName("grid");

document.addEventListener("mouseover", function (event){
    event.target.classList.add("changeColor");
    event.target.classList.remove("grid");
}); 


/*

  document.querySelector(".grid");

    document.querySelector(".grid").classList.add("changeColor");
    document.querySelector(".grid").classList.remove("grid");

*/