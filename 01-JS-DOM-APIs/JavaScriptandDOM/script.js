function showElement()
{
	$("#hide").fadeIn(9000);
}

function joke()
{
	$.get('http://api.icndb.com/jokes/random', function(responseText) 
	{
document.getElementById("joke").innerHTML = responseText.value.joke;
		document.getElementById("joke").style.display = "block";
	});
}