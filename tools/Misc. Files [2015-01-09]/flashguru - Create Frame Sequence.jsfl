var dom=fl.getDocumentDOM()
var timeline=dom.getTimeline()
var selectedFrames=timeline.getSelectedFrames()
var numFrames=selectedFrames.length
if(numFrames>0)
{
	frameIndex=0
	newLayerIndex=timeline.addNewLayer()
	var selectedFrames=timeline.getSelectedFrames()
	newLayer=timeline.layers[newLayerIndex]
	for(var f=0;f<numFrames;f+=3)
	{
		cLayer=selectedFrames[f]
		startFrame=selectedFrames[f+1]
		endFrame=selectedFrames[f+2]
		timeline.setSelectedLayers(cLayer,true)
		timeline.setSelectedFrames(startFrame,endFrame,true)
		timeline.copyFrames()
		if(startFrame>endFrame)
		{
			maxFrame=startFrame
			minFrame=endFrame
		}
		else
		{
			maxFrame=endFrame
			minFrame=startFrame
		}
		timeline.setSelectedLayers(newLayerIndex,true)
		timeline.setSelectedFrames(frameIndex,frameIndex+(maxFrame-minFrame),true)
		frameIndex+=(maxFrame-minFrame)
		timeline.pasteFrames()
	}
}


