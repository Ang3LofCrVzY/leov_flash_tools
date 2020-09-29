// Search and Replace v1.0
// copyright 2007 Dave Wolfe
// dave@ironwagon.com
var doc = fl.getDocumentDOM();
var lib = doc.library;
var allItems = lib.items;
var selItems = lib.getSelectedItems();
var searchItems;
var nameList
var oldname;
var newname;
var xml = doc.xmlPanel(fl.configURI + "XULControls/SearchReplace.xml");
if(xml.dismiss == 'accept'){
	var searchFor = xml.searchFor;
	var replaceWith = xml.replaceWith;
	if(xml.searchType == "Search Selected Items"){
		searchItems = selItems;
		nameList = removePath(true);
	}else{
		searchItems = allItems;
		nameList = removePath(false);
	}
	if (searchItems.length == 0){
		alert("No items to Search!");
	}else{
		for(i = 0; i < searchItems.length; i++){
			var searchRegExp = new RegExp(searchFor,"g");
			oldname = nameList[i];
			newname = oldname.replace(searchRegExp, replaceWith);
			searchItems[i].name = newname;
		}
	}
}

function removePath(bSelItems){
	if(bSelItems){
		libSelPath=fl.getDocumentDOM().library.getSelectedItems();
	}else{
		libSelPath=fl.getDocumentDOM().library.items;
	}
	itemNames = new Array();
	for (a = 0; a < libSelPath.length; a++){
		charStart = libSelPath[a].name.lastIndexOf("/") + 1;
		itemNames[a] = libSelPath[a].name.substring(charStart);
	}
	return itemNames;
}