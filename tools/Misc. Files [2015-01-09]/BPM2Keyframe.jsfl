/////////////////////////////////////
//
//BPM2Keyframe ver1.0
//
// http://www.yama-ko.net/
// (c)yama-ko.net some rights reserved.
//
//使い方 
//C:\Documents and Settings\ユーザ名\Local Settings\Application Data\Macromedia\Flash 8\ja\Configuration\Commands 
//あたりにjsflのまま放り込んでFlash起動すると「コマンド」に並ぶよ。 
//
////////////////////////////////////

// ダイアログを開く
var insertStairlyDialog = fl.getDocumentDOM().xmlPanel(fl.configURI+"Commands/BPM2Keyframe.xml");

//OKボタンが押されたら
if (insertStairlyDialog.dismiss == "accept") {
	
	// 入力を取得
	sec=  Number(insertStairlyDialog.st_sec);
	bpm = Number(insertStairlyDialog.st_bpm);
	mark =  Number(insertStairlyDialog.st_mark);
	correction = Number(insertStairlyDialog.st_correction);
	
	 // fla情報取得
	dom = fl.getDocumentDOM();
	tl = dom.getTimeline();
	fps = dom.frameRate;
	

	//現在選択されているフレーム範囲を配列として取得
	selectedFrames = tl.getSelectedFrames();
	
	//エラーチェック。実はてきとー。
	if(sec <=0 || bpm<=0 || mark<=0){
		alert('入力の値が不正です');
	}

	else if((selectedFrames[2] - selectedFrames[1]) != 1){
		alert('フレームの選択範囲を縦一列にして下さい');
	} 
	
	
	else {
		// 音ずれ補正値
		REMAP = 720;
		var pastFrame = 0;
		for(i = 0; fps*sec > pastFrame; i++){
			pastFrame = Math.round(60*fps*i*(REMAP-correction)/REMAP/bpm);
		
			// 選択
			tl.setSelectedFrames(selectedFrames[1]+ pastFrame, selectedFrames[2]+ pastFrame);
		
			// 変換
			tl.insertKeyframe();
			
			if(i % mark == 0){
				tl.setFrameProperty('name', ((i/mark)+1));
				tl.setFrameProperty('labelType', 'comment');
			}
		}
	}	
}
