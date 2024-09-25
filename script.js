function gridSelection(){
    const grids = document.getElementsByName("gridChoice");
    // UNUSED const gridSelectionTxt = document.getElementById('testOut');
    let userChoice;

    for(let i = 0; i < grids.length; i++){
        
        if(grids[i].checked) {
            userChoice = Number(grids[i].value);
        }
    } 

    //reset existing grid by REMOVING all divs
    function reset() {
        let gridElement = document.querySelector(".gameWrapper");

        while (gridElement.firstChild) {
            gridElement.firstChild.remove();
        }
    }
    
    //reset exiting grid by REVERTING all divs to default color. This KEEPS the divs in the document
    function defaultColor() {
        
    }

    //grid creation for 16 x 16
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

    //grid creation for 32 x 32
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

    //grid creation for 64 x 64
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

    //listen for mouseover on box class and changes the background color
    let boxes = document.getElementsByClassName("box");

    for (let l = 0; l < boxes.length; l++){
        boxes[l].addEventListener("mouseover", function (event) {

            event.target.classList.add("boxColorChange");
            event.target.classList.remove("box");
        })
    };
}; 

const gridSubmit = document.getElementById("gridSelectionBtn");
gridSubmit.addEventListener("click", gridSelection);