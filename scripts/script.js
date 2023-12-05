/*
  Play Btn Click Event Listener
 */
$("#play-btn").on("click", function( ) {
  console.log("Play");
  if (Tone.context.state !== "running") {
    Tone.start();
  }
  // play(progression("major", "E",true));
  playArpeggio(progression("major","E",true));

    // Change the pause button
    $("#play-btn-icon")
})

/*
  Random Btn Click Event Listener
 */
$("#random-btn").on("click", function ( ) {
  console.log("Shuffle")
  chordNumerals = randomChords(6);
  console.log("New chord progression: " + chordNumerals);
})

/*
  Advanced Settings Modal Btn Click Event Listener
 */
$("#advanced-menu-btn").on("click", function () {
  console.log("Settings" );
})