//
// Tween 2 Keys version 1.0
// copyright © 2006 David Wolfe dave@ironwagon.com
//
var tl = fl.getDocumentDOM().getTimeline();
var selFrames = tl.getSelectedFrames();
//
// converts selected frames to keyframes
// removes the tween
//
tl.convertToKeyframes();
tl.setFrameProperty("tweenType", "none");
//
// gets the selected frames and layers
// goes through each selected layer and clears every other keyframe in the selection
//
for(n=0; n<selFrames.length; n+=3)
{
	layerNum=selFrames[n];
	first=selFrames[n+1];
	last=selFrames[n+2]-1;
	tl.setSelectedLayers(layerNum, false);
	tl.currentFrame=first+1;
	tl.clearKeyframes(first+1, first+2);
	while(tl.currentFrame<last)
	{
		tl.currentFrame+=2;
		if(tl.currentFrame<last)
		{
			tl.clearKeyframes(tl.currentFrame, tl.currentFrame+1);
		}
	}
}
//
// clears selection
//
tl.setSelectedFrames([]);
tl.currentFrame=last;