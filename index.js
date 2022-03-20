var audio = new Audio();

function loadAudio() {

	audio.preload = "auto";

	audio.src = "/魔王魂 シャイニングスター.mp3";

	audio.load();
}

function playAudioLoop() {
	audio.loop = true;
	
	audio.play();
}
