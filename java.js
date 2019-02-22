function nextImage(el){
	if (el.src.match("images/onekey.png")){
		el.src="images/twokey.png";
	} else if (el.src.match("images/twokey.png")){
		el.src="images/threekey.png";
	} else if (el.src.match("images/threekey.png")){
		el.src="images/keyfour.png";
	} else if (el.src.match("images/keyfour.png")){
		el.src="images/onekey.png";
	}
}


function playSound() {
	document.getElementById('you-win').play();
}