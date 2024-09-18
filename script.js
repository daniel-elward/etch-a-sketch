//get users grid selection and populate the grid
function gridSelection(){
    const grids = document.getElementsByName('gridChoice');
    const textOut = document.getElementById('testOut');
    let userChoice;

    for(let i = 0; i < grids.length; i++){
        
        if(grids[i].checked) {
            textOut.innerHTML = grids[i].value; //testing log
            userChoice = grids[i].value;
        }
    }

    //testing log
    console.log(`from inside gridSelection function ${userChoice}`)
}

const submit = document.getElementById('gridSelectionBtn');
submit.addEventListener("click", gridSelection);


/*
let radioGridSelection;

//define button click
const gridSetBtn = document.getElementById("gridSelectionBtn");
gridSetBtn.addEventListener("click", function (){

    //radio button selection
    radioGridSelection = document.querySelector('input[name="gridChoice"]:checked').value;

    return radioGridSelection;
});

console.log(radioGridSelection)


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