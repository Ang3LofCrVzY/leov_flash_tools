/*

ItemsToFrames - Aaron Steed

Takes a list of selected items from the library and dumps them sequentially on the timeline of a new clip

put the jsfl in: C:/Documents and Settings/user/Local Settings/Application Data/Adobe/Flash CS3/en/Configuration/Commands/

*/

fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var lib = doc.library;

var selectionList = lib.getSelectedItems().slice();

var name = prompt("Enter name of clip: ");

if(name != null && name.length > 0) {

	lib.addNewItem("movie clip", name);
	lib.editItem(name);
	var time = doc.getTimeline();
	for(var i = 0; i < selectionList.length-1; i++){
		time.insertBlankKeyframe(i);
	}
	for(var i = 0; i < selectionList.length; i++) {
		time.currentFrame = i;
		doc.addItem({x:0, y:0}, selectionList[i]);
		doc.selectAll();
		var inst = doc.selection[0];
		doc.moveSelectionBy({x:-inst.left, y:-inst.top});

	}
	
}