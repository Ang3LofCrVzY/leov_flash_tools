/*
Random Selector Movieclip v2
by LeoV - 2014
*/

var doc = fl.getDocumentDOM ();
var lib = doc.library;
if (fl.getDocumentDOM ())
{
	var selectorName = "selector";
	var lib = fl.getDocumentDOM().library;
	var tl = fl.getDocumentDOM ().getTimeline();
	var itemsToAdd = fl.getDocumentDOM().library.getSelectedItems();
	var count = 1;
	while (lib.itemExists (selectorName))
	{
	selectorName = 'selector ' + count;
	count ++;
	}
	lib.addNewItem('movie clip', selectorName);
	fl.getDocumentDOM().library.addItemToDocument({x:0, y:0}, selectorName);
	var selectorActions = fl.getDocumentDOM().selection[0].actionScript
    = "/* \nRandom Selector Movieclip v2 \nby LeoV - 2014 \n*/ \nonClipEvent(load) { \ngotoAndStop((random((this._totalframes)+3))); \n}";
	var sel = lib.getSelectedItems ();
	if (sel.length)
	{
	sel = sel[0];
	if (sel.hasData("selector"))
	{
	alert(sel.name+" is already a selector.")
	} else 
	{
	lib.editItem(sel.name);
	var tl = doc.getTimeline ();
	var i = 0;
	var fCount = fl.getDocumentDOM().getTimeline().frameCount;
	while (i < itemsToAdd.length) {
		lib.addItemToDocument({x:0, y:0}, itemsToAdd[i].name);
		if(i < itemsToAdd.length - 1){
			tl.insertBlankKeyframe();
		}
		i++;
	}
	tl.addNewLayer("script","normal", true);
	tl.layers[tl.currentLayer].frames[0].actionScript = 'stop();';
	sel.addData ("selector", "integer", 1);
	doc.exitEditMode();
	lib.editItem(sel.name);
	}
	}
	} else {
	alert("You should have a document open.");
}