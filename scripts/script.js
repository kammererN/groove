// Play Btn Click Event Listener
$("#play-btn").on("click", function() {
    console.log("Play, Transport state: " + Tone.Transport.state);
    if (Tone.context.state !== "running") {
        console.log("Starting transport");
        Tone.Transport.start();
    } else {
        console.log("Stopping transport");
        Tone.Transport.stop();
    }
    play(progression("major", "E",true));
    // playArpeggio(progression("major", "E", true));
});

// Random Btn Click Event Listener
$("#random-btn").on("click", function ( ) {
    console.log("Shuffle")
    chordNumerals = randomChords(6);
    console.log("New chord progression: " + chordNumerals);
})

// Advanced Menu Btn Event Listener
$("#advanced-menu-btn").on("click", function () {
    console.log("Settings");
})