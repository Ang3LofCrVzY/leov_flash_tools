//Change compression of selected images to lossless -- by LeoV --
var txtconfirm = confirm("Change the compression type of the selected images to lossless?");
//the confirm function returns two values (it's a boolean), true (when you click OK) or false (when you click on cancel).
if (txtconfirm == true)
{
	//if it's true, this stuff runs
	var selItems = fl.getDocumentDOM().library.getSelectedItems();
	//first, get all the selected items and store them in an array
	for (i = 0; i < selItems.length; i++) {
		//then loop through every one of those items, until we reach the end of the array
	    selItems[i] = selItems[i].compressionType = "lossless";
		//and set the compression type to lossless.
	}
	alert("Done!");
}