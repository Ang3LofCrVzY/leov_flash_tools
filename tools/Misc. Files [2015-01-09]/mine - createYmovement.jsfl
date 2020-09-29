var op = fl.outputPanel; 
var curDoc = fl.getDocumentDOM(); 

var amountToMovePrompt = prompt("move selction vertically by (+ = up, - = down)");
var amountToMove = new Number(amountToMovePrompt); 

//-----------------------------

if (amountToMovePrompt != null){
	
	var framesAmountPrompt = prompt("How many frames each tween should have?");
	var framesAmount = new Number(framesAmountPrompt);
	
	
	if (framesAmountPrompt != null){
		
		var newName = prompt("Give a name to symbol? (make sure it's unique)");
		if (newName != null){
			var newXmc = fl.getDocumentDOM().convertToSymbol("graphic", newName, "center");
		} else{
			var newXmc = fl.getDocumentDOM().convertToSymbol("graphic", "", "center");
		}
		
		curDoc.enterEditMode('inPlace');
		
		var tl = fl.getDocumentDOM().getTimeline();
		
		tl.insertKeyframe(framesAmount - 1);
		
		curDoc.selectAll();
		curDoc.moveSelectionBy({x:0, y: -amountToMove});
		
		tl.insertKeyframe(framesAmount * 2 - 1);
		
		curDoc.selectAll();
		curDoc.moveSelectionBy({x:0, y: amountToMove - 0});
		
		tl.layers[0].frames[0].tweenType = "motion";
		
		tl.layers[0].frames[0].tweenEasing = 100;
		
		tl.layers[0].frames[framesAmount - 1].tweenType = "motion";
		tl.layers[0].frames[framesAmount - 1].tweenEasing = -100;
		
		curDoc.exitEditMode();
	}
}