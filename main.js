//Establish a set of variables for the towers and blocks.
var selected = null;
var firstTower = document.querySelector('#firstTower');
var secondTower = document.querySelector('#secondTower');
var thirdTower = document.querySelector('#thirdTower');
var firstBlock = document.querySelector('#firstBlock');
var secondBlock = document.querySelector('#secondBlock');
var thirdBlock = document.querySelector('#thirdBlock');

//code for first tower
//Give it an event listener when clicked.
firstTower.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstBlock = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstBlock){
                if(selected.dataset.weight == firstBlock.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first block weight
                else if(selected.dataset.weight  < firstBlock.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstBlock);
                    selected.classList.remove("selected");
                    selected = null;
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            selected = firstBlock;
            selected.classList.add("selected");
        }       
});

//Copy paste code from first tower, and re-name event listeners for second and third towers.
//code for second tower
secondTower.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstBlock = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstBlock){
                if(selected.dataset.weight == firstBlock.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstBlock.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstBlock);
                    selected.classList.remove("selected");
                    selected = null;
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            if (firstBlock) {
                selected = firstBlock;
                selected.classList.add("selected");
            }
        }
});

//Copy paste code from first tower, and re-name event listeners for second and third towers.
//code for third tower
thirdTower.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstBlock = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstBlock){
                if(selected.dataset.weight == firstBlock.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first block weight
                else if(selected.dataset.weight  < firstBlock.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstBlock);
                    selected.classList.remove("selected");
                    selected = null;
                    //check to see if you are done. we only need this for tower 3
                    var weight = '';
                    for(var i = 0; i < tower.children.length; i++){
                        weight += tower.children[i].dataset.weight;
                    }
                    if(weight === '123'){
                        //establish winner code has to be in third tower
                        alert("You won!");
                        //create a query selector for winner
                        document.querySelector("#winning").classList.remove("winner");

                    }
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            if (firstBlock) {
                selected = firstBlock;

                console.log(selected)
                selected.classList.add("selected");
            }
        }
});
