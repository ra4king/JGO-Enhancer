var markAllRead2;
var mainTabBack = document.getElementsByClassName("maintab_back");
for(var i = 0; i < mainTabBack.length; i++) {
	if(mainTabBack[i].innerHTML.indexOf("Mark ALL messages as read") >= 0) {
		markAllRead2 = mainTabBack[i];
		break;
	}
}

if(document.contains(markAllRead2)) {
	var openAll = document.createElement("TD");
	openAll.className = "mirrortab_back";
	openAll.innerHTML = "<a href=\"#\" onclick=\"for(var a = 0; a < document.links.length; a++) {" +
		"if(document.links[a].href.lastIndexOf('#new') > 0) {" +
			"var evt = document.createEvent('MouseEvents');" +
			"evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 1, null);" +
			"document.links[a].dispatchEvent(evt);}}\">Open Below Threads in a New Tab</a>";
	var markAllRead = document.getElementsByClassName("mirrortab_back")[0];
	markAllRead.parentNode.insertBefore(openAll, markAllRead);

	var openAll2 = openAll.cloneNode(true);
	openAll2.className = "maintab_back";
	markAllRead2.parentNode.insertBefore(openAll2, markAllRead2);
}
