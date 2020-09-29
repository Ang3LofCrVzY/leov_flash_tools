/////////////////////////////////////
//
//Framme2SWF ver0.9
// http://www.yama-ko.net/
// (c)yama-ko.net some rights reserved.
//
//使い方 
//C:\Documents and Settings\ユーザ名\Local Settings\Application Data\Macromedia\Flash 8\ja\Configuration\Commands 
//あたりにjsflのまま放り込んでFlash起動すると「コマンド」に並ぶよ。 
//
////////////////////////////////////


// fla情報取得
dom_org = fl.getDocumentDOM();
	
	
// フレームコピー
fl.getDocumentDOM().getTimeline().copyFrames();


// flaを作成
fl.createDocument();
dom_tmp = fl.getDocumentDOM();


// ステージサイズとか色々設定
dom_tmp.height = dom_org.height;
dom_tmp.width = dom_org.width;
dom_tmp.frameRate = dom_org.frameRate;
dom_tmp.backgroundColor = dom_org.backgroundColor;



// ペースト
fl.getDocumentDOM().getTimeline().setSelectedFrames([0,0,1]);
fl.getDocumentDOM().getTimeline().pasteFrames();

// 保存、書き出し
fl.saveDocumentAs(dom_tmp);
dom_tmp.exportSWF();




