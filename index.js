class Jukebox {
	constructor() {
		this.audio = document.getElementsByTagName('audio')[0]; 
	}
	playSong(){
		this.audio.play();
	}
	stopSong(){
		this.audio.pause();
	}

	loadSong(song){
		audio.innertHTML();
	}
}

class Song {
	constructor(name,artist,id){
		this.name = name;
		this.artist = artist;
		this.id = document.getElementById(id);
	}
}

document.getElementById("start").addEventListener('click', function(){
	jukebox.playSong();
});

document.getElementById("stop").addEventListener('click', function(){
	jukebox.stopSong();
});

var jukebox = new Jukebox();
var coldplay = new Song("In My Place","Coldplay","coldplay");
console.log(jukebox.songs);

