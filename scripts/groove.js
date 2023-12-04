
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

    //sampler.triggerAttackRelease(["E2", "B3", "E3","G#3","B4","D#4"],4);
    console.log(chord("E","minor","no","dom"));
    sampler.triggerAttackRelease(chord("E","minor","no","dom"),4);
	
})

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function chord(bass,quality,seventh,dominant) {
    const chord = [];

    switch(bass) {

        case "E":
            chord.push("E2","B3","B4");
             
            if(dominant=="dom") {
              chord.push("G#3","D4");
              break;
            }
            if(quality == "minor") {
              chord.push("G3");
            } else {
              chord.push("G#3")
            }

            if(seventh == "7") {
              chord.push("D#4");
            } else {
              chord.push("E4");
            }
            break;
        
            case "F":
              chord.push("F2","C3","F4");

              if(dominant=="dom") {
                chord.push("G#3","D#4");
                break;
              }
              if(quality == "minor") {
                chord.push("G3");
              } else {
                chord.push("G#3")
              }
  
              if(seventh == "7") {
                chord.push("D#4");
              } else {
                chord.push("E4");
              }
            break;
    }
    return chord ;
}

