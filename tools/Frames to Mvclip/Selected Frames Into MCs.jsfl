var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();
var selectedFrames = tl.getSelectedFrames(); 
//array with 3 integers
//last one is the amount we want to loop for
for(var i = 0; i < selectedFrames[2]; i++) {
	tl.setSelectedFrames(i, i + 1, true);
	doc.convertToSymbol("movie clip", "", "center");
}