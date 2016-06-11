function getResponse()
{
	$("#name_list").empty();
		var data = "q=" + document.getElementById("repository").value; 

	$.ajax({
			url: "https://api.github.com/search/repositories",
			type: 'GET',
			data: data,
			dataType: 'json',
			success: function(data){
				$.each(data.items, function(i, items){
					$("#name_list").append("<li>"+items.full_name + "</li>" + "</br>");
				});
				
			},
			error: function(responseText){
				document.write(responseText);
			}
		});
}