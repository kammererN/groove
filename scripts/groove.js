
const playButton = document.getElementById("play-button");
const sound = new Tone.Synth().toDestination();
const now = Tone.now();

playButton.addEventListener("click", () => {
    if(Tone.context.state !== "running") {
        Tone.start();
        console.log("jizz");
    }
    sound.triggerAttackRelease("E2", "4n", now);
    sound.triggerAttackRelease("B3", "4n", now + 0.2);
    sound.triggerAttackRelease("G#3", "4n", now + 0.4);
    sound.triggerAttackRelease("E3", "4n", now + 0.6);
    sound.triggerAttackRelease("B4", "4n", now + 0.8);
    sound.triggerAttackRelease("E4", "4n", now + 1);
    console.log(Tone.context.state);
})