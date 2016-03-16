$(document).ready(initializer);

function initializer(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

	$(".collection").on("click","a", function(e){
		e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#myTable').offset().top
    }, 1000);

		$.ajax({
			type: "GET",
			url: $(this).attr("href"),
			success: function(commits){
				$("tbody").empty();
				for(var i = 0; i < commits.length; i++){
					var myNewRow = displayCommits(commits[i]);
					$("tbody").append(myNewRow);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				alert("There was a problem: " + textStatus);
			}
		});
	});
}

function displayCommits(commits){

	var htmlCommit = commits.html_url;
	var commitName = $("<td>")
								.append($("<a>")
								.attr("href", htmlCommit)
								.attr("target", "_blank")
								.append(commits.commit.message));
								
	var author = $("<td>").append(commits.commit.author.name);
	var date = $("<td>").append(commits.commit.author.date);

	return $("<tr>").append(commitName).append(author).append(date);
}
