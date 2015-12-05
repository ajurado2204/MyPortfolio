$(document).ready(initialize);


function initialize(){
	$.ajax({
		type: "GET",
		url: "https://api.github.com/users/ajurado2204/repos",
		success: function(repos){
			for(var i = 0; i < repos.length; i++){
				var listItem = addRepoToList(repos[i]);
				$(".list-group").append(listItem);
			}
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert("There was a problem: " + textStatus);
		}
	});
}

function addRepoToList(repo){
	console.log("hello");
	var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repo.owner.login + "/";
    commitsApiUrl += repo.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repo.full_name);

    return newLink;
}