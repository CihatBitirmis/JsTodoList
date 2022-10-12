const AddToDoButton = document.getElementById("AddToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputText = document.getElementById("inputText");
const ClearToDo = document.getElementById("ClearToDo");

AddToDoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })

    ClearToDo.addEventListener("click",function(){
        paragraph.remove();
    })
})