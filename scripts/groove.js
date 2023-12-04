
const playButton = document.getElementById("play-button");
const sound = new Tone.Synth().toDestination();


playButton.addEventListener("click", () => {
    if(Tone.context.state !== "running") {
        Tone.start();
        console.log("jizz");
    }
    sound.triggerAttackRelease("E2", "4n");
    console.log(Tone.context.state);
})