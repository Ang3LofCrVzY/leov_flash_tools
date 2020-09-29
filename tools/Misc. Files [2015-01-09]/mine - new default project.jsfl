fl.createDocument("timeline");
fl.getDocumentDOM().width= 640;
fl.getDocumentDOM().height= 360;
fl.getDocumentDOM().frameRate = 30;
fl.getDocumentDOM().getTimeline().addNewLayer("actionscript", "normal", false); //new layer 0
fl.getDocumentDOM().getTimeline().deleteLayer(0);
fl.getDocumentDOM().getTimeline().addNewLayer("notes", "guide", false); // layer 1
fl.getDocumentDOM().getTimeline().addNewLayer("sfx + music", "folder", false); // layer 2 (since i deleted the first one)
fl.getDocumentDOM().getTimeline().addNewLayer("music", "normal", false); // layer 3
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 1", "normal" ,false); // layer 4
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 2", "normal" ,false); // layer 5
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 3", "normal" ,false); // layer 6
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 4", "normal" ,false); // layer 7
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 5", "normal" ,false); // layer 8
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 6", "normal" ,false); // layer 9
fl.getDocumentDOM().getTimeline().addNewLayer("sfx 7", "normal" ,false); // layer 10
var parLayer = fl.getDocumentDOM().getTimeline().layers[2];
fl.getDocumentDOM().getTimeline().layers[3].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[4].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[5].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[6].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[7].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[8].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[9].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().layers[10].parentLayer = parLayer;
fl.getDocumentDOM().getTimeline().addNewLayer("overlays", "folder", false); // layer 11
fl.getDocumentDOM().getTimeline().layers[11].parentLayer = null;
fl.getDocumentDOM().getTimeline().addNewLayer("overlay layer 1", "normal", false); // layer 12
fl.getDocumentDOM().getTimeline().addNewLayer("overlay layer 2", "normal", false); // layer 13
fl.getDocumentDOM().getTimeline().layers[12].parentLayer = fl.getDocumentDOM().getTimeline().layers[11];
fl.getDocumentDOM().getTimeline().layers[13].parentLayer = fl.getDocumentDOM().getTimeline().layers[11];
fl.getDocumentDOM().getTimeline().addNewLayer("", "normal", false); //layer 14
fl.getDocumentDOM().getTimeline().layers[14].parentLayer = null;
fl.getDocumentDOM().getTimeline().addNewLayer("background", "folder", false); //layer 15
fl.getDocumentDOM().getTimeline().addNewLayer("bg layer 1", "normal", false); // layer 16
fl.getDocumentDOM().getTimeline().addNewLayer("bg layer 2", "normal", false); // layer 17
fl.getDocumentDOM().getTimeline().addNewLayer("bg layer 3", "normal", false); // layer 18
fl.getDocumentDOM().getTimeline().layers[16].parentLayer = fl.getDocumentDOM().getTimeline().layers[15];
fl.getDocumentDOM().getTimeline().layers[17].parentLayer = fl.getDocumentDOM().getTimeline().layers[15];
fl.getDocumentDOM().getTimeline().layers[18].parentLayer = fl.getDocumentDOM().getTimeline().layers[15];
fl.getDocumentDOM().getTimeline().expandFolder(false, true, -1);