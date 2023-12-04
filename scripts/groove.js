
const playButton = document.getElementById("play-button");

const sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

playButton.addEventListener("click", () => {
    if(Tone.context.state !== "running") {
        Tone.start();
    }

    // sampler.triggerAttackRelease(["E2", "B3", "E3","G#3","B4","D#4"],4);
    sampler.triggerAttackRelease(chord("E"),4);
})

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function chord(bass,quality,seventh) {
    var chord = "[" ;

    switch(bass) {
        case "E":
            chord.concat("\"E2\",\"B3\",\"B4\""); 
    }
    return chord.concat("]") ;
}

console.log(chord("E"));
