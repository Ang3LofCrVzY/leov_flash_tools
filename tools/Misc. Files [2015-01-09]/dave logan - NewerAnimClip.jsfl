//
// New Animation Clip version 0.9
// copyright © 2006 David Wolfe dave@ironwagon.com

// modified 2010 dave logan
//
var doc = fl.getDocumentDOM();
var lib = doc.library;
var result = doc.xmlPanel(fl.configURI + "XULControls/newanimclip.xml");

if(result.dismiss=="accept"){

if(lib.itemExists(result.symbName)){
	alert("Symbol Name already exists")
}
else
{
	// copy frames
	fl.getDocumentDOM().getTimeline().copyFrames();
//
// deselect all, make new layer, make new rectangle with no outline, 
//
doc.selectNone;

// delete selected layers

var selFrames = fl.getDocumentDOM().getTimeline().getSelectedFrames();

for (var i=0; i<selFrames.length; i += 3) {
	doc.getTimeline().deleteLayer(selFrames[i]);
	for (var x= i; x<selFrames.length; x += 3) {
		selFrames[x] -= 1;
	}
}


doc.selectNone;
doc.getTimeline().addNewLayer(result.layName, "normal", true);
doc.addNewRectangle({left:0, top:0, right:640, bottom:640}, 0, false, true); 
//
// returns the current layer and frame
//
function getCurrentFrame()
{
	var tl = doc.getTimeline();
	var layerNum = tl.currentLayer;
	var frameNum = tl.currentFrame; 
	var curr_frame = tl.layers[layerNum].frames[frameNum];
	return curr_frame;
}
//
// gets reference to current frame elements
//
function getCurrentElements()
{
	var curr_frame = getCurrentFrame();
	return curr_frame.elements;
}
//
// if anything is selected it gets deselected, 
// element is added to new selection array
//
function selectElement(elem, bReplace)
{
	if(bReplace)
	{
		doc.selectNone();
	}
	var selArray = new Array;
	selArray[0] = elem;
	doc.selection = selArray;
}
//
// select current elements and converts to symbol
// centers the symbol
// edit in place
// deletes the selected elements
//
var elems = getCurrentElements();
for(var i=0; i<elems.length; i++)
{
	selectElement(elems[i], true);
	doc.convertToSymbol(result.symbType, result.symbName, "center");
	lib.setItemProperty('linkageImportForRS', false);
	lib.setItemProperty('linkageExportForAS', false);
	lib.setItemProperty('linkageExportForRS', false);
	lib.setItemProperty('scalingGrid', false);
	doc.align('horizontal center', true);
	doc.align('vertical center', true);
	doc.enterEditMode('inPlace');
	doc.selectAll();
	doc.deleteSelection();
	fl.getDocumentDOM().getTimeline().selectAllFrames();
	fl.getDocumentDOM().getTimeline().pasteFrames();
	fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true, 'all');
	doc.exitEditMode();
}
}
}