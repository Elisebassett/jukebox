class Jukebox {
	constructor() {
		this.audio = document.getElementsByTagName('audio')[0]; 
	}
	playSong(){
		this.audio.play();
	}
	pauseSong(){
		this.audio.pause();
	}

	stopSong(){
		this.audio.load();
	}

	loadSong(n){
		this.audio.setAttribute('src', n);
		this.audio.load();
		this.audio.play();
	}
}

var jukebox = new Jukebox();

////Play and Stop Listeners////
document.getElementById('start').addEventListener('click', function(){
	jukebox.playSong();
});

document.getElementById('pause').addEventListener('click', function(){
	jukebox.pauseSong();
});

document.getElementById('stop').addEventListener('click', function(){
	jukebox.stopSong();
});
/////

source_array = ['songs/in_my_place.mp3','songs/lighthouse.mp3', 'songs/glosoli.mp3', 'songs/photograph.mp3']


////Loading Listeners////
document.getElementById('coldplay').addEventListener('click', function(){
	jukebox.loadSong(source_array[0]);
});
document.getElementById('lighthouse').addEventListener('click', function(){
	jukebox.loadSong(source_array[1]);
});
document.getElementById('sigur_ros').addEventListener('click', function(){
	jukebox.loadSong(source_array[2]);
});
document.getElementById('arcade_fire').addEventListener('click', function(){
	jukebox.loadSong(source_array[3]);
});
/////