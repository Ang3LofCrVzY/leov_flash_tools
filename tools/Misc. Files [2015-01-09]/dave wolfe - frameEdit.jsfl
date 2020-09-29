//
// Copyright © 2006 David Wolfe dave@ironwagon.com
//
var doc = fl.getDocumentDOM();
var curFrame = doc.getTimeline().currentFrame;
var first = doc.getElementProperty ("firstFrame");
var symbLoop = doc.getElementProperty ("loop");

if (symbLoop == "single frame")
{
	doc.enterEditMode('inPlace');
	fl.getDocumentDOM().getTimeline().currentFrame = first;
}
else
{
	doc.enterEditMode('inPlace');
	fl.getDocumentDOM().getTimeline().currentFrame = curFrame;
}