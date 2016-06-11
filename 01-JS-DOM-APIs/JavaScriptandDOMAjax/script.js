function showElement()
{
	$("#hide").fadeIn(3000);
	$("#result").fadeIn(3000);
	$("#hide2").fadeIn(3000);
}
function getResponse()
{
	var config = new Object();
	config.url = document.getElementById("url").value;
	//config.url = "http://api.icndb.com/jokes/random";
	var promise = new Promise(function(resolve,reject)
	{
		var call = $.ajax({
				url: config.url,
				type: 'GET',
				dataType: 'html',
				success: function(responseText){
					$('section').removeClass("error");
					$('section').addClass("success");
					obj = JSON.parse(responseText);
					Promise.resolve($("#result").html(obj.value.joke));
					
			},
				error: function(){
					$('section').removeClass("success");
					$('section').addClass("error");
					Promise.reject($("#result").html("ERROR url not resolve"));
					
			}
		})
	})

	promise.then(function(result){
			document.write(result);
		}, function(error){
			alert(error);
		});

}