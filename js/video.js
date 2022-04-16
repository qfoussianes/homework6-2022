let video;
let volumeSlider;
let volume;
let videoTotalDuration;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	videoTotalDuration = video.duration
	volumeSlider =  document.querySelector("#slider")
	volume =  document.querySelector("#volume")
	volume.textContent = video.volume * 100
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	video.volume = 1;
	volumeSlider.value = video.volume * 100
	volume.textContent = video.volume * 100
});
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("Updated PlayBack Speed = ",video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("Updated PlayBack Speed = ",video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 15 > videoTotalDuration){
		video.currentTime = 0
	}else{
		video.currentTime = video.currentTime + 15
	}
	console.log("current location of the video = ",video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	let mutedBtn = document.querySelector("#mute")
	if(video.muted){
		mutedBtn.textContent = "Mute"
		video.muted = false
	}else{
		mutedBtn.textContent = "Unmute"
		video.muted = true
	}
});

document.getElementById("slider").addEventListener("input",function(){
	volume.textContent = volumeSlider.value
 	video.volume =  volumeSlider.value / 100
})

document.getElementById("vintage").addEventListener("click",function(){		
	console.log(video.classList.add("oldSchool"))
})

document.getElementById("orig").addEventListener("click",function(){		
	console.log(video.classList.remove("oldSchool"))
})

