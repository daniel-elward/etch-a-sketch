//get users grid selection and populate the grid
function gridSelection(){
    const grids = document.getElementsByName('gridChoice');
    const gridSelectionTxt = document.getElementById('testOut');
    let userChoice;

    for(let i = 0; i < grids.length; i++){
        
        if(grids[i].checked) {
            gridSelectionTxt.innerHTML = grids[i].value; 
            //testing log
            userChoice = grids[i].value;
        }
    }

    //reset existing grid
    let gridElement = document.querySelectorAll('.grid');
    if (gridElement){
        gridElement.forEach(e => e.remove());
    };

    //grid creation :: 64x64 might be too much CRASHING
    for (let i = 1; i <= userChoice; i++) {
        let wrapper = document.getElementById("gameWrapper");
        let grid = document.createElement("div");
        grid.classList.add("grid");
        wrapper.appendChild(grid);
    };

}

const submit = document.getElementById('gridSelectionBtn');
submit.addEventListener("click", gridSelection);

/*

//populate the grid
//grid sizes
// 16x16 = 256 (35px boxes) 32x32 = 1024 (17.5px boxes) 64x64 = 4096 (8.75px boxes)

if (radioGridSelection === 256) {
    console.log(radioGridSelection)
    //let gridWidthAndHeight = document.querySelector('div[class="grid"]')
    
    //element.style.width = "35px";
    //element.style.height = "35px";

} else if (radioGridSelection === 1024) {
    console.log(radioGridSelection)

    gridWidthAndHeight = document.querySelector('div[class="grid"]')
    
    gridWidthAndHeight.style.width = "17.5px";
    gridWidthAndHeight.style.height = "17.5px";
  
}

for (let i = 1; i <= radioGridSelection; i++) {
    let wrapper = document.getElementById("gameWrapper");
    let grid = document.createElement("div");
    grid.classList.add("grid");
    wrapper.appendChild(grid);
};

*/