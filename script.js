//get users grid selection and populate the grid
function gridSelection(){
    const grids = document.getElementsByName('gridChoice');
    const gridSelectionTxt = document.getElementById('testOut');
    let userChoice;

    for(let i = 0; i < grids.length; i++){
        
        if(grids[i].checked) {
            gridSelectionTxt.innerHTML = grids[i].value; 
            userChoice = Number(grids[i].value);
        }
    } 

    //reset existing grid
    function reset() {
        let gridElement = document.querySelector('.gameWrapper');

        while (gridElement.firstChild) {
            gridElement.firstChild.remove();
        }
    }  

    //grid creation 
    if (userChoice === 16){

        reset();

        //create column/verticle wrappers based on user input
        for (let i = 1; i <= userChoice; i++){

            let wrapper = document.querySelector(".gameWrapper");

            let createColumnWrapper = document.createElement("div");
            createColumnWrapper.classList.add("columnWrapper");
            wrapper.appendChild(createColumnWrapper);
        }

        //get all column wrappers 
        let getColumnWrappers = document.querySelectorAll(".columnWrapper");

        for (let j = 0; j < userChoice; j++) {

            let columnWrapper = getColumnWrappers[j];

            for (let k = 0; k < userChoice; k++){
            
            let createBox = document.createElement("div");
            createBox.classList.add("box");
            columnWrapper.appendChild(createBox);
            }
        };
    };

        //grid creation 
        if (userChoice === 32){

            reset();
    
            //create column/verticle wrappers based on user input
            for (let i = 1; i <= userChoice; i++){
    
                let wrapper = document.querySelector(".gameWrapper");
    
                let createColumnWrapper = document.createElement("div");
                createColumnWrapper.classList.add("columnWrapper");
                wrapper.appendChild(createColumnWrapper);
            }
    
            //get all column wrappers 
            let getColumnWrappers = document.querySelectorAll(".columnWrapper");
    
            for (let j = 0; j < userChoice; j++) {
    
                let columnWrapper = getColumnWrappers[j];
    
                for (let k = 0; k < userChoice; k++){
                
                let createBox = document.createElement("div");
                createBox.classList.add("box");
                columnWrapper.appendChild(createBox);
                }
            };
        };

            //grid creation 
    if (userChoice === 64){

        reset();

        //create column/verticle wrappers based on user input
        for (let i = 1; i <= userChoice; i++){

            let wrapper = document.querySelector(".gameWrapper");

            let createColumnWrapper = document.createElement("div");
            createColumnWrapper.classList.add("columnWrapper");
            wrapper.appendChild(createColumnWrapper);
        }

        //get all column wrappers 
        let getColumnWrappers = document.querySelectorAll(".columnWrapper");

        for (let j = 0; j < userChoice; j++) {

            let columnWrapper = getColumnWrappers[j];

            for (let k = 0; k < userChoice; k++){
            
            let createBox = document.createElement("div");
            createBox.classList.add("box");
            columnWrapper.appendChild(createBox);
            }
        };
    };

}


const submit = document.getElementById("gridSelectionBtn");
submit.addEventListener("click", gridSelection);