function addTask() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    if (title === "" || description === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var table = document.getElementById("task-list");
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = '<button onclick="deleteTask(this)">Excluir</button>';

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function deleteTask(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
