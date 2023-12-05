// Play Btn Click Event Listener
$("#play-btn").on("click", function( ) {
    console.log("Play");
    if (Tone.context.state !== "running") {
        Tone.start();
    }
    // play(progression("major", "E",true));
    playArpeggio(progression("major","E",true));

})

// Random Btn Click Event Listener
$("#random-btn").on("click", function ( ) {
    console.log("Shuffle")
    chordNumerals = randomChords(6);
    console.log("New chord progression: " + chordNumerals);
})

// Advanced Menu Btn Event Listener
$("#advanced-menu-btn").on("click", function () {
    console.log("Settings" );
})