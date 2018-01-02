var activeSideBarItem = 0;

function sideNavigation(elementNo) {
    $("div.vmenu a.active").removeClass("active");
    $("div.vmenu a").eq(elementNo).addClass("active");
    activeSideBarItem = elementNo;
    console.log('clicked element:' + activeSideBarItem + '. Active class removed from a');
}