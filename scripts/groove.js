
const playButton = document.getElementById("play-button");
var now = Tone.now();
const sampler = new Tone.Sampler({
  urls: {
    "C4": "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    "A4": "A4.mp3",
    "C5": "C5.mp3",
    "A6": "A6.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

playButton.addEventListener("click", () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }

  //sampler.triggerAttackRelease(["E2", "B3", "E3","G#3","B4","D#4"],4);
  //console.log(chord("E","major",false,false));
  console.log(chord("E", "major", true, false));

  now = Tone.now();

  //sampler.triggerAttackRelease(chord("E","minor",true,false),4,now);

  sampler.triggerAttackRelease(chord("A", "major", false, false), 4, now);
  sampler.triggerAttackRelease(chord("A", "major", true, false), 4, now + 3);
  sampler.triggerAttackRelease(chord("A", "minor", false, false), 4, now + 6);
  sampler.triggerAttackRelease(chord("A", "minor", true, false), 4, now + 9);
  sampler.triggerAttackRelease(chord("A", "dom", false, true), 4, now + 12);

})

function chord(bass, quality, seventh, dominant) {
  const chord = [];

  switch (bass) {

    case "E":
      chord.push("E2", "B3", "B4", "E3");

      if (dominant) {
        chord.push("G#3", "D4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("G3", "D4");

        } else {
          chord.push("G#3", "D#4");
        }
        break;
      }

      chord.push("E4");
      if (quality == "minor") {
        chord.push("G3");
      } else {
        chord.push("G#3");
      }
      break;

    case "F":
      chord.push("F2", "C3", "F3", "C4");

      if (dominant) {
        chord.push("A4", "Eb4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("G#3", "D#4");

        } else {
          chord.push("A4", "E4");
        }
        break;
      }

      chord.push("F4");
      if (quality == "minor") {
        chord.push("G#3");
      } else {
        chord.push("A4");
      }
      break;

    case "F#":
      chord.push("F#2", "C#3", "F#3", "C#4");

      if (dominant) {
        chord.push("A#4", "E4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("A4", "E4");

        } else {
          chord.push("A#4", "F4");
        }
        break;
      }

      chord.push("F#4");
      if (quality == "minor") {
        chord.push("A4");
      } else {
        chord.push("A#4");
      }
      break;

    case "F#":
      chord.push("F#2", "C#3", "F#3", "C#4");

      if (dominant) {
        chord.push("A#4", "E4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("A4", "E4");

        } else {
          chord.push("A#4", "F4");
        }
        break;
      }

      chord.push("F#4");
      if (quality == "minor") {
        chord.push("A4");
      } else {
        chord.push("A#4");
      }
      break;

    case "G":
      chord.push("G2", "D3", "G3", "D4");

      if (dominant) {
        chord.push("B4", "F4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("A#4", "F4");

        } else {
          chord.push("B4", "F#4");
        }
        break;
      }

      chord.push("G4");
      if (quality == "minor") {
        chord.push("A#4");
      } else {
        chord.push("B4");
      }
      break;

    case "G#":
      chord.push("G#2", "D#3", "G#3", "D#4");

      if (dominant) {
        chord.push("C4", "F#4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("B4", "F#4");

        } else {
          chord.push("C4", "G4");
        }
        break;
      }

      chord.push("G#4");
      if (quality == "minor") {
        chord.push("B4");
      } else {
        chord.push("C4");
      }
      break;

    case "A":
      chord.push("A3", "E3", "A4", "E4");

      if (dominant) {
        chord.push("C#4", "G4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("C4", "G4");

        } else {
          chord.push("C#4", "G#4");
        }
        break;
      }

      chord.push("A5");
      if (quality == "minor") {
        chord.push("C4");
      } else {
        chord.push("C#4");
      }
      break;

  }
  return chord;
}