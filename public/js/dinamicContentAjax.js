var notificationData = "";
var notificationVisible = true;
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

function showHideNotifications() {
	if(notificationVisible){
		notificationVisible = false;
		$(".panel-div-notifications").hide();
		$(".notification-panel-control").text("Show notification panel");
		$(".center-div-main-content").removeClass("col-lg-8");
		window.mainChart.redraw();
		window.mainBar.redraw();
	} else {
		notificationVisible = true;
		$(".panel-div-notifications").show();
		$(".notification-panel-control").text("Hide notification panel");
		$(".center-div-main-content").addClass("col-lg-8");
		window.mainChart.redraw();
		window.mainBar.redraw();
	}
}

$(document).ready(function() {
	console.log("Loading of page ready!");
	LoadNotifications();
	setInterval(LoadNotifications, 10000);
});