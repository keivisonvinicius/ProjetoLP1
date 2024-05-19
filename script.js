function addTask() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var time = document.getElementById("time").value;

    if (title === "" || description === "" || time === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var table = document.getElementById("task-list");
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = time;
    cell4.innerHTML = '<button onclick="editTask(this)">Editar</button> <button onclick="deleteTask(this)">Excluir</button>';

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("time").value = "";
}

function deleteTask(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editTask(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    var title = cells[0].innerHTML;
    var description = cells[1].innerHTML;
    var time = cells[2].innerHTML;

    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
    document.getElementById("time").value = time;

    deleteTask(btn);

    document.getElementById("title").focus();
}