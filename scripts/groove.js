
const playButton = document.getElementById("play-button");
const sound = new Tone.Synth().toDestination();
var now ;

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
        console.log("jizz");
    }

    sampler.triggerAttackRelease(["E2", "B3", "E3","G#3","B4","D#4"],4);
    console.log(Tone.context.state);
})