var notificationData = "";
function LoadNotifications() {
	$(function() {
		$.get("notification/allHtml", function(data) {
			var currentData = data;
			if(notificationData === currentData ) {
				//do nothing
			} else {
				notificationData = currentData;
				$(".list-group").html(data);
				console.log("Refresh of notifications!");
			}
		});
	});
}

$(document).ready(function() {
	console.log("Loading of page ready!");
	LoadNotifications();
	setInterval(LoadNotifications, 10000);
});