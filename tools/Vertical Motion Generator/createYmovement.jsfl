/*
-- Create Y Movement --
        -- by LeoV --
creates a graphic containing a tween with the selected instance moving 
up or down with the specified amount, for a specified amount of frames.
you'll probably have to edit the graphic later, making the 2nd tween a little shorter,
but this automates most of the process for you.
use this to help create curved motion without motion guides or doing it fbf.
*/

var op = fl.outputPanel; 
//gets output panel for debugging purposes
var curDoc = fl.getDocumentDOM(); 
//gets current document

var amountToMovePrompt = prompt("move selction vertically by (+ = up, - = down)");
var amountToMove = new Number(amountToMovePrompt); 
//converts the prompt variable to a number. this is because moveSelectionBy only works with number data types

//op.trace(amountToMove);
//op.trace("is amountToMove a number: " + amountToMove instanceof Number);
//if you uncomment the above lines the output panel will trace info about the amountToMove variable
//namely its value and data type

//-----------------------------

if (amountToMovePrompt != null){
	//if amountToMovePrompt is not null (in other words, if the user enters something), then run this stuff
	
	var framesAmountPrompt = prompt("How many frames each tween should have?");
	var framesAmount = new Number(framesAmountPrompt);
	
	//op.trace(framesAmount);
	//more debugging stuff
	
	if (framesAmountPrompt != null){
		
		var newName = prompt("Give a name to symbol? (make sure it's unique)");
		if (newName != null){
			var newXmc = fl.getDocumentDOM().convertToSymbol("graphic", newName, "center");
			//converts selection to a graphic, with the specified name 
			//and with its registration point in the center
		} else{
			var newXmc = fl.getDocumentDOM().convertToSymbol("graphic", "", "center");
			//otherwise, do the same, but give it a default unique name (symbol 1/2/3/4/etc.)
		}
		
		curDoc.enterEditMode('inPlace');
		//goes inside the selected symbol
		
		var tl = fl.getDocumentDOM().getTimeline();
		//gets timeline of the symbol
		
		tl.insertKeyframe(framesAmount - 1);
		//inserts a keyframe at the amount specified.
		//the reason there's an - 1 is because this function works with a zero-based index
		//so to get the "real" amount i have to subtract one from it
		
		curDoc.selectAll();
		curDoc.moveSelectionBy({x:0, y: -amountToMove});
		//moves selection up or down, based on the amount you typed in earlier
		
		tl.insertKeyframe(framesAmount * 2 - 1);
		//inserts a keyframe at the 2 times the amount specified. 
		//if i didn't multiply it by 2 it would simply do that to the same frame as earlier
		
		curDoc.selectAll();
		curDoc.moveSelectionBy({x:0, y: amountToMove - 0});
		//moves selection up or down, based on the amount you typed in earlier
		//the - 0 is a bug fix. if i simply left amountToMove as it is, it throws an error.
		//this has to do with the data type of the variable, but from what i can tell, it IS a number.
		//so yeah just ignore that. i don't know how to fix it in another way. #noop
		
		tl.layers[0].frames[0].tweenType = "motion";
		//goes to the first frame, and set the tween type of it to motion (for groups, symbols and bitmaps)
		
		tl.layers[0].frames[0].tweenEasing = 100;
		//sets easing of tween to 100 - starts fast, ends slow
		
		tl.layers[0].frames[framesAmount - 1].tweenType = "motion";
		tl.layers[0].frames[framesAmount - 1].tweenEasing = -100;
		//same as above, but the easing here is in reverse - starts slow, ends fast
		
		curDoc.exitEditMode();
	}
}