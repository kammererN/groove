// Handles play-to-pause transition
function playToPauseHelper () {
    const playBtnJQuerySelector = "#play-btn";
    const playBtnIconJQuerySelector  = "#play-btn-icon";

    // Changes play btn icon
    console.log("Pause icon swapped in.")
    $(playBtnIconJQuerySelector).prop("icon", "mdi:pause");

    // Makes the btn outlined
    $(playBtnJQuerySelector).removeClass("btn-dark");
    $(playBtnJQuerySelector).addClass("btn-outline-dark");





}

// Handles pause-to-play transition
function pauseToPlayHelper () {
    const playBtnJQuerySelector = "#play-btn";
    const playBtnIconSelector  = "#play-btn-icon";

    // Changes pause btn icon
    console.log("Play icon swapped in.")
    $(playBtnIconSelector).prop("icon", "mdi:play");

    // Makes the btn filled
    $(playBtnIconSelector).addClass();

}