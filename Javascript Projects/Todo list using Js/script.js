const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

localStorage.removeItem('data');
function btn(){
    if (inputBox.value === ''){
        alert("You must write something")
        }
        else {
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listContainer.append(li);
            let span = document.createElement("span");
            span.innerHTML = "🗑️";
            li.append(span);

            
        }
        inputBox.value = "";
        saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    // let savedData = localStorage.getItem("data");
    // if (savedData) {
    //     listContainer.innerHTML = savedData;
    // }
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();