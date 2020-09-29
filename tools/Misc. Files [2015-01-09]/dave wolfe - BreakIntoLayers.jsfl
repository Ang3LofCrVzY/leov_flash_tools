// Break into Layers v1.0
// copyright 2007 Dave Wolfe
// dave@ironwagon.com
var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();
var curLay = tl.currentLayer;
var curFrame = tl.currentFrame;
var selItem = doc.selection[0];
var ntl = selItem.libraryItem.timeline;
var layObj = ntl.layers;
var newLays = new Array;
var elems;
var selIndex;
if(doc.selection.length != 1){
	alert("please select a symbol to break apart")
}else{
	for (i = 0; i < layObj.length; i++){
		tl.addNewLayer(layObj[i].name, layObj[i].layerType, false)
		tl.setLayerProperty("color", layObj[i].color);
		newLays[i] = tl.currentLayer;
	}
	doc.breakApart();
	for (j = 0; j < newLays.length; j++){
		tl.setSelectedLayers(newLays[j], true);
		selIndex = newLays[j];
		if (tl.layers[selIndex].layerType != "folder"){
			tl.setSelectedLayers(curLay, true);
			elems = getCurrentElements();
			elems.reverse();
			selectElement(elems[0], true);
			doc.clipCut();
			tl.setSelectedLayers(newLays[j], true);
			doc.clipPaste(true);
		}
	}
}
function getCurrentFrame(){
	var tl = doc.getTimeline();
	var layerNum = tl.currentLayer;
	var frameNum = tl.currentFrame; 
	var curr_frame = tl.layers[layerNum].frames[frameNum];
	return curr_frame;
}
function getCurrentElements(){
	var curr_frame = getCurrentFrame();
	return curr_frame.elements;
}
function selectElement(elem, bReplace){
	if(bReplace){
		doc.selectNone();
	}
	var selArray = new Array;
	selArray[0] = elem;
	doc.selection = selArray;
}