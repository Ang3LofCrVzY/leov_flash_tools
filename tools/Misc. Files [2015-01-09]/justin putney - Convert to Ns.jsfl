﻿//Convert to Ns//@author Justin Putney//@version 0.0.2//http://ajarproductions.comvar dom = fl.getDocumentDOM();var tl = dom.getTimeline();var sel = tl.getSelectedFrames();//fl.outputPanel.clear(); //DEBUG//History output for convert to frame-by-frame does not work in JSFL//tl.convertToKeyframes(%*d%*d); var result = prompt('Convert to (number of frames)');if(result != null) {	var targetFrames = parseInt(result);	//check to see if it's a number	if(isNaN(targetFrames) || targetFrames < 1) {		alert('The value entered is not a valid number.');	} else {		run();	}}function run() {	var sLength = sel.length;	//tl.setSelectedFrames([], true);	for(var s=0; s < sLength; s+=3){		var lnum = sel[s];		var sfnum = sel[s+1];		var efnum = sel[s+2];		var l = tl.layers[lnum];		tl.currentLayer = lnum;		var framesInSeq = 1;		var reqFrames = false;		for(var i=sfnum; i < efnum; i++){			if(i >= l.frameCount) break;			var iFrame = l.frames[i];			if(iFrame.elements.length < 1) continue;			var iTweenType = iFrame.tweenType;			if(iTweenType == 'IK pose' || iTweenType == 'motion object') {				i = iFrame.startFrame + iFrame.duration;				continue;			}			var iStart = iFrame.startFrame;			var isKey = (iStart == i);			if(i==sfnum) {				if(!isKey) {					tl.convertToKeyframes(i);				}				framesInSeq = 1;				continue;			}			//reqFrames = (framesInSeq+1 >= targetFrames);			framesInSeq++; //for current frame			/*fl.trace("i: " + i);			fl.trace('framesInSeq: ' + framesInSeq);			fl.trace('reqFrames: ' + (framesInSeq > targetFrames));			fl.trace("isKey: " + isKey);*/						if(framesInSeq > targetFrames){					if(!isKey) {					tl.setSelectedFrames(i, i+1, true);					tl.convertToKeyframes(i);					l.frames[i-1].tweenType = 'none';					/*fl.trace('convert!');					fl.trace('new startFrame: ' + l.frames[i].startFrame);*/				}				framesInSeq = 1;			} else {				if(isKey) tl.clearKeyframes(i);				//framesInSeq++;			}			//fl.trace("--------------");			//check to see if last frame has tween and is at the end			//tweenType may have changed			if(i == efnum-1 /*&& iTweenType !== 'none'*/) {				if(efnum == l.frameCount || l.frames[efnum].startFrame != iStart){					l.frames[i].tweenType = 'none';						l.frames[i-1].tweenType = 'none';	 //just in case				}			}		}	}	tl.setSelectedFrames(sel, true);}