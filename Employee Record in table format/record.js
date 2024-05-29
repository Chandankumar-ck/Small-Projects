

// let tbody = document.querySelector("#tbody")

let EmpName = document.querySelector("#name")
let empID = document.querySelector("#employeeID")
let department = document.querySelector("#department")

let experience = document.querySelector("#exp")
let mobileno = document.querySelector("#mbl")
let email = document.querySelector("#email")
let tablebody = document.querySelector("#table-container>tbody")
let submit = document.querySelector("#submit")
let tr = document.createElement("tr");
tr.id = "tableRow";
let td = document.createElement("td");
td.id ="tableData";

// tr.append(td);


let inputdata = [];

function saveData(){
    localStorage.setItem('inputdata',JSON.stringify(inputdata))
}

function loadData(){
    let storedValue = JSON.parse(localStorage.getItem("inputdata"));
    // for the first time user who doesn't save anything for that person browser show the ouput null. 
    // if there something data stored then it will show accordingly for that reeason we write if/else condition here.
    if (storedValue){
        inputdata = storedValue
        showData(inputdata)
    }

}

function submitdata () {
    let inputObj = {
        EmpName : EmpName.value,
        empID :empID.value,
        department: department.value,
        experience:experience.value,
        mobileno: mobileno.value,
        email: email.value

    }
    inputdata.push(inputObj)
    saveData()
    showData(inputdata)
    saveData(inputdata)
}

function showData(arr){
    tablebody.innerHTML= " "
    arr.forEach(function(ele, i){
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        td1.innerHTML =`${i+1}`

        let td2 = document.createElement("td")
        td2.innerHTML = ele.EmpName
        let td3 = document.createElement("td")
        td3.innerHTML = ele.empID
        let td4 = document.createElement("td")
        td4.innerHTML = ele.department
        let td5 = document.createElement("td")
        td5.innerHTML = ele.experience
        
        let td6 = document.createElement("td")
        td6.innerHTML = ele.email

        let td7 = document.createElement("td")
        td7.innerHTML = ele.mobileno
        
        let role;
        if (ele.experience > 5) {
            role = "Senior";
        } else if (ele.experience >= 2 && ele.experience <= 5) {
            role = "Junior";
        } else {
            role = "Fresher";
        }
        let td8 = document.createElement("td");
        td8.innerHTML = role;

        let td9= document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML= "Delete"
        btn.addEventListener("click", function(){
            handleDelete(i)
        })

        
        td9.append(btn);


        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9)
        tablebody.append(tr)
        
    })
}

function handleDelete(index){
    inputdata.splice(index, 1)
    showData(inputdata)
}
submit.addEventListener('click', submitdata);
loadData()




