/*
	              AUTO-CENTER
	          	   by LeoV
   aligns all content in the timeline to the center of it.
     useful for effects inside movieclips and whatnot.

		HOW TO USE: 
	go to the first frame of the timeline,
	then click on this command. done!
*/

i = 0;
while(i < fl.getDocumentDOM().getTimeline().frameCount){
	fl.getDocumentDOM().selectAll();
	fl.getDocumentDOM().align("horizontal center", true);
	fl.getDocumentDOM().align("vertical center", true);
	fl.getDocumentDOM().getTimeline().currentFrame = fl.getDocumentDOM().getTimeline().currentFrame + 1;
	i++;
}