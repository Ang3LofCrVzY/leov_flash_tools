var DEBUG = false;

function clone(xamt, yamt, xgap, ygap) {
	var doc = fl.getDocumentDOM();
	var selarr = doc.selection;
	if(selarr.length > 0) {
		for(var q = 0; q < selarr.length; q++) {
			var sel = selarr[q];
			var sLeft = Math.round(sel.left);
			var sTop = Math.round(sel.top);
			var sWidth = sel.width;
			var sHeight = sel.height;
			for(var j = 0; j <= Math.abs(yamt); j++) {
				for(var i = 0; i <= Math.abs(xamt); i++) {
					if(j == 0 && i == 0) continue;
					doc.selectNone();
					doc.selection = [sel];
					doc.clipCopy();
					doc.selectNone();
					doc.clipPaste(true);
					var l, r, b, t;
					l = sLeft + (sWidth * (i) + xgap * (i)) * sign(xamt);
					r = sLeft + (xgap * (i) + sWidth * (i + sign(xamt))) * sign(xamt);
					t = sTop + (sHeight * (j) + ygap * (j)) * sign(yamt);
					b = sTop + (ygap * (j) + sHeight * (j + sign(yamt))) * sign(yamt);
					if(DEBUG) {
						fl.trace("left: " + l);
						fl.trace("right: " + r);
						fl.trace("top: " + t);
						fl.trace("bottom: " + b);
					}
					doc.setSelectionBounds({left:l, top:t, right:r, bottom:b});
				}
			}
		}
	} else {
		alert("You must select something first!");
	}
}

function sign(val) {
	if(val >= 0) return 1;
	if(val < 0) return -1;
}