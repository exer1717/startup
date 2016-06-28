
var globalkey = 0;
var db;
//debugger;	

var requestion = indexedDB.open('mydb');

requestion.onsuccess = function(e)
{
	db=e.target.result; // almacenar el objeto en la base de datos
}
//cuando se ejecuta por primera vez
requestion.onupgradeneeded=function(e)
{	
 //debugger;
	db=e.target.result;
	//cremos la tabla en la base de datos
	db.createObjectStore("notes", {keyPath: "key"});
}

document.getElementById('save').addEventListener('click', function()
{

	//Utilizando el almacenamiento de local storage

	var text = document.getElementById('input').value;
	localStorage.setItem('inputInfo', text);
	
	//Utilizando el almacenamiento de indexDB

 	//debugger;
 	//var key= globalkey;
 	var transDB=db.transaction(["notes"], "readwrite");
 	var store = transDB.objectStore("notes");
 	console.log(store);
 	store.put({key: globalkey, text: text});




 }, false);

 document.getElementById('clear').addEventListener('click', function()
 {



 	document.getElementById('input').value = '';

 }, false);


 document.getElementById('show').addEventListener('click', function()
 {

 	document.getElementById('input').value = localStorage.getItem('inputInfo');
 	document.getElementById('showP').innerHTML = localStorage.getItem('inputInfo');

 	//mostrar datos del indexDB
 	//debugger;
 	var transDB=db.transaction(["notes"],"readonly");

	var store=transDB.objectStore("notes");

	var cursor=store.openCursor();
	cursor.addEventListener("success", show, false);
	
 }, false);

function show(e){
			
			var cursor=e.target.result;
			
			if(cursor){
				
				document.getElementById('input').value=cursor.value.text + " - " + cursor.value.key;
				
				cursor.continue();
			}
}


