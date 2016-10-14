function makeAjax(){
	$.ajax({
			url: "http://localhost:8081/listUsers",
			dataType: "json",
			success: function(res, xhr){
				console.log(res);
				console.log(xhr);
			}
	});
}
$(document).ready(makeAjax);
