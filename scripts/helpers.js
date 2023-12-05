// Handles play-to-pause transition
function playToPauseHelper () {
    const playBtnIconJQuerySelector  = "#play-btn-icon";

    // Changes play btn icon
    console.log("Pause icon swapped in.")
    $(playBtnIconJQuerySelector).prop("icon", "mdi:pause");

}

// Handles pause-to-play transition
function pauseToPlayHelper () {
    const playBtnIconSelector  = "#play-btn-icon";

    // Changes pause btn icon
    console.log("Play icon swapped in.")
    $(playBtnIconSelector).prop("icon", "mdi:play");

}