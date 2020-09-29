var timeline = fl.getDocumentDOM().getTimeline();
//gets timeline from the currently open document
var selFrames = timeline.getSelectedFrames();
//gets the array with 3 integers, containing the following:
//1 - layer index
//2 - starting frame of the selection
//3 - ending frame of the selection
if (selFrames[1] != null){
alert("Your selection contains: " + (selFrames[2] - selFrames[1]) + " frame(s)");
}