i = 0;
while(i < fl.getDocumentDOM().getTimeline().frameCount){
	fl.getDocumentDOM().selectAll();
	fl.getDocumentDOM().align("horizontal center", true);
	fl.getDocumentDOM().align("vertical center", true);
	fl.getDocumentDOM().getTimeline().currentFrame = fl.getDocumentDOM().getTimeline().currentFrame + 1;
	i++;
}