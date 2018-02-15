'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.ajax ({
		url: "/project/" + idNumber,
		dataType: "json",
		success: function(data) {
			var container = $('<div></div>');
			container.append('<h1>' + data.title + '</h1>');
			container.append('<h2>' + data.date + '</h2>');
			container.append('<p>' + data.summary + '</p>');
			container.append('<center><img src="' + data.image + '"/></center>');
			$('.details').eq(idNumber-1).html(container);
		}
	});
}
