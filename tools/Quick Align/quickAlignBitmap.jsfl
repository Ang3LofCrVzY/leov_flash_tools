/*
align selected items
by LeoV
request by Jaycie
------------
takes selected items from library, adds them to timeline and align to whatever set position you type in.
*/
if (fl.getDocumentDOM()){
	var itemCount = 1;
	var itemName = "alignedclip";
	var doc = fl.getDocumentDOM();
	var lib = doc.library;
	var i = 0;
	var sItems = lib.getSelectedItems();
	var alignType = prompt("How do you want to align these?", "left, right, top, bottom, centerxy, centery, centerx");
	if(alignType != null){
		while (lib.itemExists (itemName)){
			itemName = "alignedclip" + itemCount;
			itemCount ++;
		}
		lib.addNewItem('movie clip', itemName);
		lib.editItem(itemName);
		while(i < sItems.length){
			doc.getTimeline().insertBlankKeyframe();
			lib.addItemToDocument({x:0, y:0}, sItems[i].name);
			doc.selectAll();
			if(alignType == "left"){
				fl.getDocumentDOM().align("left", true);
			} else if(alignType == "right"){
				fl.getDocumentDOM().align("right", true);
			} else if(alignType == "top"){
				fl.getDocumentDOM().align("top", true);
			} else if(alignType == "bottom"){
				fl.getDocumentDOM().align("bottom", true);
			} else if(alignType == "centerxy"){
				fl.getDocumentDOM().align("horizontal center", true);
				fl.getDocumentDOM().align("vertical center", true);
			} else if(alignType == "centerx"){
				fl.getDocumentDOM().align("horizontal center", true);
			} else if(alignType == "centery"){
				fl.getDocumentDOM().align("vertical center", true);
			}
			doc.selectNone();
			i++;
		}
		doc.getTimeline().removeFrames(0,1);
	}
	} else {
		alert("You need a document open.");
}
	

