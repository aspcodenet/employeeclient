const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const salaryInput = document.getElementById("salaryInput");
const errorMsg = document.getElementById("errorMsg");
const employees = document.getElementById("employees");
const addButton = document.getElementById("addButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    errorMsg.innerHTML = "Name cannot be blank";
  } else {
    console.log("success");
    errorMsg.innerHTML = "";
    acceptData();
    addButton.setAttribute("data-bs-dismiss", "modal");
    addButton.click();

    (() => {
        addButton.setAttribute("data-bs-dismiss", "");
    })();
  }
};


async function fetchEmployees(){
    return await((await fetch('http://localhost:3000/api/employees')).json())
}

let data =  await fetchEmployees()



let createList = () => {
    employees.innerHTML = "";
  data.map((x, y) => {
    return (employees.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.name}</span>
          <span class="small text-secondary">${x.birthDate}</span>
          <p>${x.hourlySalary}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
//   e.parentElement.parentElement.remove();
//   data.splice(e.parentElement.parentElement.id, 1);
//   localStorage.setItem("data", JSON.stringify(data));
//   console.log(data);
  
};

let editTask = (e) => {
//   let selectedTask = e.parentElement.parentElement;

//   textInput.value = selectedTask.children[0].innerHTML;
//   dateInput.value = selectedTask.children[1].innerHTML;
//   salaryInput.value = selectedTask.children[2].innerHTML;

//   deleteTask(e);
};

let resetForm = () => {
//   textInput.value = "";
//   dateInput.value = "";
//   salaryInput.value = "0";
};

createList();
