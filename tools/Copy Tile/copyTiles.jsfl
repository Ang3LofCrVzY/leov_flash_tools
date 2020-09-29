/**
 * copy tiles
 * Select some movieclips, type in the direction they should be pasted in (x or y), 
 * and the number of copies that should be made.
 *
 * @author LeoV
 * @year   2015
 */

var doc = fl.getDocumentDOM();
var docSelArray = doc.selection;
if(docSelArray.length != 0) {
	var directionPrompt = prompt("In what direction should the clips be copied?", "x or y");
	if(directionPrompt != null) {
		var direction = String(directionPrompt);
		var numCopiesPrompt = prompt("How many copies should be made?", "enter integer here");
		if(numCopiesPrompt != null) {
			var numCopies = Number(numCopiesPrompt);
			for(var j = 0; j < docSelArray.length; j++) {
				var sel = docSelArray[j];
				var sLeft = Math.round(sel.left);
				var sTop = Math.round(sel.top);
				var sWidth = sel.width;
				var sHeight = sel.height;
				for(var i = 0; i < numCopies; i++) {
					doc.selectNone();
					doc.selection = [sel];
					doc.clipCopy();
					doc.selectNone();
					doc.clipPaste(true);
					if(direction.toLowerCase() == "x") {
						doc.setSelectionBounds({left:sLeft + (sWidth * (i + 1)), top:sTop, right:(sWidth * (i + 2)) + sLeft, bottom:(sHeight) + sTop});
					} else if(direction.toLowerCase() == "y") {
						doc.setSelectionBounds({left:sLeft, top:sTop + (sHeight * (i + 1)), right:sWidth + sLeft, bottom:(sHeight * (i + 2)) + sTop});
					}
				}
			}
		}
	}
}