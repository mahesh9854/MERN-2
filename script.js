var bootstrapCount = 6;
var tableBody = document.getElementById("tableBody");
tableBody.innerHTML = '';

for (var i = 1; i <= bootstrapCount; i++) {
    var row = document.createElement("tr");
    var taskNameCell = document.createElement("td");
    taskNameCell.textContent = "Task-" + i;
    var linkCell = document.createElement("td");
    var link = document.createElement("a");
    link.href = "./Task-" + i + ".html";
    link.target = "_blank";
    link.textContent = "Link";
    linkCell.appendChild(link);
    
    row.appendChild(taskNameCell);
    row.appendChild(linkCell);
    tableBody.appendChild(row);
}

var javascriptCount = 8;
var tableBody1 = document.getElementById("tableBody1");
tableBody1.innerHTML = '';
for (var i = bootstrapCount+1; i <= bootstrapCount + javascriptCount; i++) {
    var row = document.createElement("tr");
    var taskNameCell = document.createElement("td");
    taskNameCell.textContent = "Task-" + i;
    var linkCell = document.createElement("td");
    var link = document.createElement("a");
    link.href = "./Task-" + i + ".html";
    link.target = "_blank";
    link.textContent = "Link";
    linkCell.appendChild(link);
    
    row.appendChild(taskNameCell);
    row.appendChild(linkCell);
    tableBody1.appendChild(row);
}