 var songs=["Music 1.mp3",
 			"Music 2.mp3",
 			"Music 3.mp3",
 			"Music 4.mp3"];

var songTitle=document.getElementById('songTitle');
var songSlider=document.getElementById('songSlider');
var currentTime=document.getElementById('currentTime');
var duration=document.getElementById('duration');
var volumeSlider=document.getElementById('volumeSlider');
var nextSongTitle=document.getElementById('nextSongTitle');
var song=new Audio();
var currentSong=0;
window.onload=loadSong;
function loadSong(){
	song.src = "songs/" + songs[currentSong];
	if(currentSong<songs.length)
	{
songTitle.textContent = (currentSong +1) + ". "+ songs[currentSong ];
}
else{
	songTitle.textContent = ( 1) + ". "+ songs[0];
}
	if(currentSong == songs.length-1)
	{
		nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[0];
	}else{
	nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
}
	song.playbackRate = 1;
	song.volume = volumeSlider.value;
	setTimeout(showDuration, 1000);
}

setInterval(updateSongSlider, 1000);
function convertTim (secs){
	var min = Math.floor(secs/60);
	var sec = secs % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}
function updateSongSlider (){
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTim(c);
	if(song.ended)
	{
	next();
	}
}

function convertTime (secs){
	var min = Math.floor(secs/60);
	var sec = secs % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}
function showDuration(){
	var d= Math.floor(song.duration);
	songSlider.setAttribute("max",d);
	duration.textContent=convertTime(d);
}
function playOrPauseSong(img){
song.playbackRate = 1;
	if(song.paused)
	{
		song.play();
		img.src = "play.png";


	}else{
		song.pause();
		img.src = "pause.png";

	}
}
function next(){
	if(currentSong<songs.length-1)
	{
	currentSong = currentSong + 1 % songs.length;
	loadSong();
	var x = document.getElementById("my");
	x.src="pause.png";

}else{
	currentSong = 0;
	loadSong();
	var x = document.getElementById("my");
	x.src="pause.png";
}

	}
function previous(){
	currentSong --;
	currentSong = (currentSong < 0) ? songs.length-1 : currentSong;
	loadSong();
}
function seekSong(){
	song.currentTime = songSlider.value;
	currentTime.textContent = convertTime(song.currentTime);
}
function adjustVolume(){
	song.volume = volumeSlider.value;
	
}
function increasePlaybackRate(){
	song.playbackRate += 0.5;
}
function decreasePlaybackRate(){
	song.playbackRate -= 0.5;
	songSlider.value -= 0.5;
}
function mute(){
song.volume-=0.1
volumeSlider.value-=0.1;
}

function mute1(){
song.volume+=0.1
volumeSlider.value+=0.5;
}
var slideIndex =1;
showSlides(slideIndex);
function getID(s){
	slideIndex=s;

	currentSong=parseInt(s-1);
	loadSong();
	var x = document.getElementById("my");
	x.src="play.png";
	song.play();
	plusSlides(s);
	currentSlide(s);
}
function play1(){
	song.pause();
	var x = document.getElementById("my");
		x.src = "pause.png";
       x.style.color = 'red';
}
function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);

}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==1) {
  	document.getElementById("mu").innerHTML = "music1";
  	document.getElementById("si").innerHTML = "singer1";

  }
  else if (n==2) {
  	document.getElementById("mu").innerHTML = "music2";
  	document.getElementById("si").innerHTML = "singer2";
  }
  else if(n==3){
  	document.getElementById("mu").innerHTML = "music3";
  	document.getElementById("si").innerHTML = "singer3";
  }
   else if(n==4){
  	document.getElementById("mu").innerHTML = "music4";
  	document.getElementById("si").innerHTML = "singer4";
  }
  if (n > slides.length) 
  	{
  		slideIndex = 1
  	}    
  if (n < 1)
   {
   	slideIndex = slides.length
   }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



































