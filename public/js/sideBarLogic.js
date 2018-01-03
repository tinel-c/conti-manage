function sideNavigation(elementNo) {
    var activeSideBarItem = 0;
    $("div.vmenu a.active").removeClass("active");
    $("div.vmenu a").eq(elementNo).addClass("active");
    activeSideBarItem = elementNo;
    console.log('clicked element:' + activeSideBarItem + '. Active class removed from a');
}

$(function(){
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
     });
    };
 });
});