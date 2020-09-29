var doc = fl.getDocumentDOM();
var docSelArray = doc.selection;
if(docSelArray.length != 0) {
	for(var i = 0; i < docSelArray.length; i++) {
		doc.selectNone();
		var sel = docSelArray[i];
		var sLeft = Math.round(sel.left);
		var sTop = Math.round(sel.top);
		var sWidth = sel.width;
		var sHeight = sel.height;
		doc.selection = [sel];
		doc.setSelectionBounds({left:sLeft, top:sTop, right:sWidth + sLeft, bottom:sHeight + sTop});
	}
}