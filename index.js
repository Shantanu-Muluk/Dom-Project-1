let form = document.querySelector("form");
let list = document.querySelector(".fruits");

// add to the list
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    let textIntered = document.getElementById("fruit-to-add");

    let newLi = document.createElement("li");
    newLi.innerHTML = textIntered.value + '<button class="delete-btn">Delete</button>'
    newLi.className = "fruit";
    textIntered.value = ""

    list.appendChild(newLi)
})

// delete the record

list.addEventListener("click", (event)=>{
    if(event.target.className === "delete-btn"){
        let parentele = event.target.parentElement;
        list.removeChild(parentele)
    }
})

// filter functionality

let filter = document.querySelector("#filter");

filter.addEventListener("keyup", (event)=>{
    let text = event.target.value.toLowerCase()
    let listItem = document.getElementsByClassName("fruit");
    
    for(let i=0;i<listItem.length;i++){
        let current = listItem[i].firstChild.textContent.toLowerCase();
        if(current.indexOf(text) === -1){
            listItem[i].style.display = "none"
        }else{
            listItem[i].style.display="flex"
        }
        
    }
})