import * as Tone from 'tone'

const playButton = document.getElementById("play-button");
const sound = new Tone.Synth().toDestination();


playButton.addEventListener("click", () => {
    if(Tone.context.state != "running") {
        Tone.start();
    }
    sound.triggerAttackRelease("E2", "4n");
})