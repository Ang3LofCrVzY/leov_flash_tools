// Draw String
function drawString(str, posX, posY, unit) {
	var pos = {x:Number(posX), y:Number(posY)}
	var offset = pos.x;
	var len = str.length;
	for (var i = 0; i < len; i++) {
		drawChar(str.charAt(i), pos, unit);
		pos.x = offset + 1.5 * unit * (i + 1);
	}
}
// Draw character
function drawChar(character, pos, unit) {
	fl.drawingLayer.moveTo(pos.x, pos.y);
	switch (character) {
	case "0" :
	case "8" :
		fl.drawingLayer.lineTo(pos.x + unit, pos.y);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		fl.drawingLayer.lineTo(pos.x, pos.y + unit * 2);
		fl.drawingLayer.lineTo(pos.x, pos.y);
		if (character == "8") {
			fl.drawingLayer.moveTo(pos.x, pos.y + unit);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		}
		break;
	case "1" :
		fl.drawingLayer.lineTo(pos.x + unit / 2, pos.y);
		fl.drawingLayer.lineTo(pos.x + unit / 2, pos.y + unit * 2);
		fl.drawingLayer.moveTo(pos.x, pos.y + unit * 2);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		break;
	case "2" :
	case "3" :
	case "5" :
		fl.drawingLayer.lineTo(pos.x + unit, pos.y);
		fl.drawingLayer.moveTo(pos.x, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		fl.drawingLayer.moveTo(pos.x, pos.y + unit * 2);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		if (character == "2") {
			fl.drawingLayer.moveTo(pos.x + unit, pos.y);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
			fl.drawingLayer.moveTo(pos.x, pos.y + unit);
			fl.drawingLayer.lineTo(pos.x, pos.y + unit * 2);
		}
		if (character == "3") {
			fl.drawingLayer.moveTo(pos.x + unit, pos.y);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		}
		if (character == "5") {
			fl.drawingLayer.moveTo(pos.x, pos.y);
			fl.drawingLayer.lineTo(pos.x, pos.y + unit);
			fl.drawingLayer.moveTo(pos.x + unit, pos.y + unit);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		}
		break;
	case "4" :
	case "6" :
		fl.drawingLayer.lineTo(pos.x, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		if (character == "4") {
			fl.drawingLayer.moveTo(pos.x + unit, pos.y);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		}
		if (character == "6") {
			fl.drawingLayer.moveTo(pos.x, pos.y + unit);
			fl.drawingLayer.lineTo(pos.x, pos.y + unit * 2);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		}
		break;
	case "7" :
	case "9" :
		fl.drawingLayer.lineTo(pos.x + unit, pos.y);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		if (character == "9") {
			fl.drawingLayer.moveTo(pos.x, pos.y);
			fl.drawingLayer.lineTo(pos.x, pos.y + unit);
			fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		}
		break;
	case "." :
		fl.drawingLayer.moveTo(pos.x + unit / 2, pos.y + unit * 2);
		fl.drawingLayer.lineTo(pos.x + unit / 2, pos.y + unit * 1.5);
		break;
	case "p":
		fl.drawingLayer.moveTo(pos.x, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x, pos.y + unit * 3);
		fl.drawingLayer.moveTo(pos.x, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		fl.drawingLayer.lineTo(pos.x, pos.y + unit * 2);
		break;
	case "x":
		fl.drawingLayer.moveTo(pos.x, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit * 2);
		fl.drawingLayer.moveTo(pos.x + unit, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x, pos.y + unit * 2);
		break;
	case "+":
		fl.drawingLayer.moveTo(pos.x - unit / 2, pos.y);
		fl.drawingLayer.lineTo(pos.x + unit / 2, pos.y);
		fl.drawingLayer.moveTo(pos.x, pos.y - unit / 2);
		fl.drawingLayer.lineTo(pos.x, pos.y + unit / 2);
		break;
	case "º":
		fl.drawingLayer.lineTo(pos.x + unit, pos.y);
		fl.drawingLayer.lineTo(pos.x + unit, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x, pos.y + unit);
		fl.drawingLayer.lineTo(pos.x, pos.y);
		break;
	}
}
