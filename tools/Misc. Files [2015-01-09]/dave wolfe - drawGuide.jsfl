//
// DrawGuide version 1.2.1 copyright 2006 Dave Wolfe
// dave@ironwagon.com
// http://www.toonmonkey.com
//
var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();
var selFrames = tl.getSelectedFrames();
var frameLength = selFrames[2] - selFrames [1];
var last = selFrames[2] - 1;
var curLayer = tl.getSelectedLayers();
var selLayer = curLayer[0];
var newLayer = selLayer + 1;
var StartFrame = tl.currentFrame;


function symbCenter(elem) // finds center of a symbol and puts it in an array
{
	var mat = fl.getDocumentDOM().viewMatrix;
	var selArray = new Array;
	selArray[0] = elem;
	fl.getDocumentDOM().selection = selArray;
	var tp = fl.getDocumentDOM().getTransformationPoint();
	cpX = tp.x + elem.matrix.tx;
	cpY = tp.y + elem.matrix.ty;
	centerX = cpX + mat.tx;
	centerY = cpY + mat.ty;
	coordArray = new Array;
	coordArray[0] = centerX;
	coordArray[1] = centerY;
	return coordArray;
}

// make sure only 1 layer is selected
if (curLayer.length > 1)
{
	alert("Please select only one layer");
}
else
{
	// add new guide layer below current layer, reselect current layer, rewind playhead to beginning of frame selection
	tl.addNewLayer("guide", "guide", false);
	tl.setSelectedLayers(curLayer[0], true);
	tl.currentFrame = selFrames[1];
	while (tl.currentFrame < last)
	{
		var curFrame = tl.currentFrame;
		var symbStart = tl.layers[selLayer].frames[curFrame].elements[0];
		var start = symbCenter(symbStart); // get starting point for line
		var key = tl.layers[selLayer].frames[curFrame].startFrame; // find keyframe of current span
		var span = tl.layers[selLayer].frames[curFrame].duration; // find number of frames in current span
		tl.currentFrame = key + span; // go to next keyframe
		var curFrame = tl.currentFrame;
		var symbEnd = tl.layers[selLayer].frames[curFrame].elements[0];
		var end = symbCenter(symbEnd); //get ending point for line
		
		if (tl.currentFrame < selFrames[2]) 
		{
			// if current frame is within frame selection, draw a line from symbols previous position to its new position
			tl.setSelectedLayers(newLayer, true);
			doc.addNewLine({x:start[0], y:start[1]}, {x:end[0], y:end[1]});
			tl.setSelectedLayers(selLayer, true);
			//tl.currentFrame++
		}
	}
	tl.setSelectedFrames(selFrames);  // reselect original frame selection
	tl.currentFrame = StartFrame;  // return playhead to original frame
	tl.reorderLayer(newLayer, selLayer);
	//tl.layers[newLayer].layerType = "guided";
}