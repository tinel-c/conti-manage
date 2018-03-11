var notificationData = "";
var notificationVisible = true;
///
/// Function to get the notifications from the notification model
/// Uses the getNotificationEntry for all the entries inside the
/// database.
/// 
/// This will fill the notification pannel inside the main page
///
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

///
///TO DO: not used inside the new template
///

function showHideNotifications() {
	if(notificationVisible){
		notificationVisible = false;
		$(".panel-div-notifications").hide();
		$(".notification-panel-control").text("Show notification panel");
		$(".center-div-main-content").removeClass("col-lg-8");
		window.mainChart.redraw();
		window.mainBar.redraw();
		window.mainDonut.redraw();
	} else {
		notificationVisible = true;
		$(".panel-div-notifications").show();
		$(".notification-panel-control").text("Hide notification panel");
		$(".center-div-main-content").addClass("col-lg-8");
		window.mainChart.redraw();
		window.mainBar.redraw();
		window.mainDonut.redraw();
	}
}


///
///When the page has finished loading execute all the necessary 
///functions 
///
$(document).ready(function() {
	console.log("Loading of page ready!");
	LoadNotifications();
	setInterval(LoadNotifications, 10000);
});