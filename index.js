var selectedRow = null

function onFormSubmit() {
    if (fieldValidate()) {
        var data = {};
        data["fullName"] = document.getElementById("fullName").value;
        data["email"] = document.getElementById("email").value;
        data["address"] = document.getElementById("address").value;
        data["phone"] = document.getElementById("phone").value;
        data["des"] = document.getElementById("des").value;
        if (selectedRow == null) {
            var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.fullName;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.email;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.address;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.phone;
            cell4 = newRow.insertCell(4);
            cell4.innerHTML = data.des;
            cell4 = newRow.insertCell(5);
            cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
              <a onClick="onDelete(this)">Delete</a>`;
        }  // insertNewRecord(formData);
        else
            updateRecord(data);
        resetForm();
    }
}



function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("des").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.phone;
    selectedRow.cells[4].innerHTML = formData.des;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function fieldValidate() {
    isValid = true;
    if (document.getElementById("fullName").value != "" && document.getElementById("email").value != "" && document.getElementById("address").value != "" && document.getElementById("phone").value != "" && document.getElementById("des").value != "") {
        isValid = true;

    } else {
        isValid = false;
    }

    return isValid;
}