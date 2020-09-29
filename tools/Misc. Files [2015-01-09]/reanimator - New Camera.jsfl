/*
Copyright 2006-2007 Sockpuppet Pty Ltd. All Rights Reserved.
http://www.reanimator.net
*/

var doc = fl.getDocumentDOM ();
var lib = doc.library;
if (fl.getDocumentDOM ())
{
var camName = 'new Camera';
var lib = fl.getDocumentDOM().library;
var tl = fl.getDocumentDOM ().getTimeline();
var count = 1;
while (lib.itemExists (camName))
{
camName = 'new Camera ' + count;
count ++;
}
lib.addNewItem ('movie clip', camName);
var cam = lib.getSelectedItems ();
if (cam.length)
{
cam = cam[0];
if (cam.hasData("camera"))
{
alert(cam.name+" is Already a Camera.")
} else 
{
lib.editItem(cam.name);
var tl = doc.getTimeline ();
var halfStage = {w:doc.width*.5,h:doc.height*.5}; 
doc.addNewRectangle({left:-halfStage.w,top:-halfStage.h,right:halfStage.w,bottom:halfStage.h},0, true);
doc.addNewRectangle({left:-halfStage.w*.9,top:-halfStage.h*.9,right:halfStage.w*.9,bottom:halfStage.h*.9},0, true);
doc.addNewRectangle({left:-halfStage.w*.8,top:-halfStage.h*.8,right:halfStage.w*.8,bottom:halfStage.h*.8},0, true);
tl.addNewLayer("script","normal", true);
tl.layers[tl.currentLayer].frames[0].actionScript = '/*Copyright (c) 2006-2007 Sockpuppet Pty Ltd. All Rights Reserved.*/\nimport flash.geom.Matrix;\nimport flash.geom.Transform;\nimport flash.geom.ColorTransform;\nvar copyrightNotice = "Copyright (c) 2006-2007 Sockpuppet Pty Ltd. All Rights Reserved. http://www.reanimator.net";\nvar reanimator = new Transform(this);\nvar camera = new Transform(this._parent);\nvar w:Number = Stage.width;\nvar h:Number = Stage.height;\nthis._visible = false;\nthis.onEnterFrame = function () {\nthis._parent.filters = this.filters;\nvar stageMatrix:Matrix = reanimator.matrix;\ncamera.colorTransform = reanimator.colorTransform;\nstageMatrix.invert();\nstageMatrix.translate(w*.5, h*.5);\ncamera.matrix = stageMatrix;\n}';
cam.addData ("camera", "integer", 1);
doc.exitEditMode();
}
}
} else {
alert("You must have a document open.");
}