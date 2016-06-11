function createMatrix(){
	

	var matrix = new Array(3);
	matrix[0] = document.getElementById("col1").value;
	matrix[1] = document.getElementById("col2").value;
	matrix[2] = document.getElementById("col3").value;
    var table = document.getElementById("dataTable");
    var tr = document.createElement("tr");
	table.appendChild(tr)
	var td = document.createElement("td");
	tr.appendChild(td);
	var data1 = document.createTextNode(matrix[0]);
	td.appendChild(data1);
	var td1 = document.createElement("td");
	tr.appendChild(td1);
	var data2 = document.createTextNode(matrix[1]);
	td1.appendChild(data2);
	var td2 = document.createElement("td");
	tr.appendChild(td2);
	var data3 = document.createTextNode(matrix[2]);
	td2.appendChild(data3);	
	document.getElementById("table").setAttribute("align", "center");
	clean();

}

function clean(){
	document.getElementById("col1").value = "";
	document.getElementById("col2").value = "";
	document.getElementById("col3").value = "";

}