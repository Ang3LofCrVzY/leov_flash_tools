/////////////////////////////////////
//
//階段状にフレームを挿入 ver1.0
//
// http://www.yama-ko.net/
// (c)Mattari Factory some rights reserved.
//
//使い方 
//C:\Documents and Settings\ユーザ名\Local Settings\Application Data\Macromedia\Flash 8\ja\Configuration\Commands 
//あたりにjsflのまま放り込んでFlash起動すると「コマンド」に並ぶよ。 
//
////////////////////////////////////

// ダイアログを開く
var insertStairlyDialog = fl.getDocumentDOM().xmlPanel(fl.configURI+"XULControls/FrameSequencer.xml");

//OKボタンが押されたら
if (insertStairlyDialog.dismiss == "accept") {

	//ダイアログの入力情報を取得
	
	//間隔フレーム数。数データに変換。
	diff = Number(insertStairlyDialog.st_diff);
	
	//ずらし方
	how = insertStairlyDialog.st_how;
	
	//階段の上下
	order = insertStairlyDialog.st_order;

	//flashのタイムラインとかを扱うため変数に格納
	dom = fl.getDocumentDOM();
	tl = dom.getTimeline();
	
	//現在選択されているフレーム範囲を配列として取得
	selectedFrames = tl.getSelectedFrames();

	//縦一列じゃないと困るからエラーチェック。実はてきとー。
	if((selectedFrames[2] - selectedFrames[1]) != 1){
		alert('フレームの選択範囲を縦一列にして下さい');
	} 

	//ちゃんと縦一列を選んでいたら
	else {

		//選択フレーム範囲の縦の長さ＝レイヤー数と、一番上が何枚目のレイヤーかを格納
		n = (selectedFrames.length / 3);
		sfhead = selectedFrames[0];

		//レイヤー数分の配列を用意して
		var diffarray = new Array(n);

		//入力条件にあわせて、i番目のレイヤーに何フレーム挿入するか配列内に計算しておく

		//「間隔ずつ」レイヤーをずらすなら
		if (how == 'layer'){
			//公差＝間隔の単純な等差数列。上のレイヤーからだんだん挿入数が増える。
			if (order == 'goLow'){
				for (i = 0; i < n; i++){
					diffarray[i] = Math.round(diff * (i));
				}
			//上り階段のときは、下のレイヤーほど挿入数が減るから逆に。
			} else if (order == 'goHigh'){
				for (i = 0; i < n; i++){
					diffarray[i] = Math.round(diff * (n - i - 1));
				}
			}

		//「間隔」を全てのレイヤーで均等に配分するなら
		} else if (how =='total'){
			if (order == 'goLow'){
				//間隔をレイヤー数で割ったものが公差。代入直前で四捨五入して整数値に。
				for (i = 0; i < n; i++){
					diffarray[i] = Math.round(diff / n * i);
				}
			} else if (order == 'goHigh'){
				for (i = 0; i < n; i++){
					diffarray[i] =Math.round(diff / n * (n - i - 1));
				}
			}

		//「間隔」幅内でランダムにずらすなら
		} else if (how =='random'){
			for (i = 0; i < n; i++){
				diffarray[i] = Math.round(Math.random() * diff);
			}
		}

		//配列が用意できたので、i番目のレイヤーに配列のi番目の値の分だけフレームを挿入
		for (i = 0; i < n; i++){
			tl.setSelectedFrames([sfhead +i, selectedFrames[1] , selectedFrames[2]], true);
			tl.insertFrames(diffarray[i]);
		}
	}
}
