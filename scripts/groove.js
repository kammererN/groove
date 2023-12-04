
const playButton = document.getElementById("play-button");
var now = Tone.now();
const major = [0,2,4,5,7,9] ;
const notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G","A","A#","B","C","C#","D","D#","E","F","F#","G","G"] ;
const majorQuality = ["M","m","m","M","M","m"] ;
const duration = 4 ;
const timeInBetween = 3 ;

const sampler = new Tone.Sampler({
  urls: {
    "C4": "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    "A4": "A4.mp3",
    "C5": "C5.mp3",
    "F#5": "Fs5.mp3",
    "A2": "A2.mp3",
    "D#2": "Ds2.mp3",
    "C2": "C2.mp3",
    "C3": "C3.mp3",
    "D#3": "Ds3.mp3",
    "A6": "A6.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

playButton.addEventListener("click", () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }
  
  play(progression(4,"major","E"));
})


function play(chordProgression) {

  now = Tone.now();
  for(i = 0; i<chordProgression.length; i++) {
    sampler.triggerAttackRelease(chordProgression[i],duration,now + (i * timeInBetween));
  }
}

function chord(bass,quality,seventh,dominant) {
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

    case "A#":
      chord.push("A#3", "F3", "A#4", "F4");

      if (dominant) {
        chord.push("D4", "G#4");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("C#4", "G#4");

        } else {
          chord.push("D4", "A5");
        }
        break;
      }

      chord.push("A#5");
      if (quality == "minor") {
        chord.push("C#4");
      } else {
        chord.push("D4");
      }
      break;

    case "B":
      chord.push("B3", "F#3", "B4", "F#4");

      if (dominant) {
        chord.push("D#4", "A5");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("D4", "A5");

        } else {
          chord.push("D#4", "A#5");
        }
        break;
      }

      chord.push("B5");
      if (quality == "minor") {
        chord.push("D4");
      } else {
        chord.push("D#4");
      }
      break;

    case "C":
      chord.push("C3", "G3", "C4", "G4");

      if (dominant) {
        chord.push("E4", "A#5");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("D#4", "A#5");

        } else {
          chord.push("E4", "B5");
        }
        break;
      }

      chord.push("C5");
      if (quality == "minor") {
        chord.push("D#3");
      } else {
        chord.push("E3");
      }
      break;

    case "C#":
      chord.push("C#3", "G#3", "C#4", "G#4");

      if (dominant) {
        chord.push("F4", "B5");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("E4", "B5");

        } else {
          chord.push("F4", "C5");
        }
        break;
      }

      chord.push("C#5");
      if (quality == "minor") {
        chord.push("E4");
      } else {
        chord.push("F4");
      }
      break;

    case "D":
      chord.push("D3", "A4", "D4", "A5");

      if (dominant) {
        chord.push("F#4", "C5");
        break;
      }

      if (seventh) {

        if (quality == "minor") {
          chord.push("F4", "C5");

        } else {
          chord.push("F#4", "C#5");
        }
        break;
      }

      chord.push("D5");
      if (quality == "minor") {
        chord.push("F4");
      } else {
        chord.push("F#4");
      }
      break;

      case "D#":
        chord.push("D#3", "A#4", "D#4", "A#5");
  
        if (dominant) {
          chord.push("G4", "C#5");
          break;
        }
  
        if (seventh) {
  
          if (quality == "minor") {
            chord.push("F#4", "C#5");
  
          } else {
            chord.push("G4", "D5");
          }
          break;
        }
  
        chord.push("D#5");
        if (quality == "minor") {
          chord.push("F#4");
        } else {
          chord.push("G4");
        }
        break;

  }
  return chord;

}

function progression(numOfChords,scale,key) {
  const prog_chord = randomChords(numOfChords);
  const chordProgression = [] ;
  let keyIndex = notes.indexOf(key);

  if(scale=="major") {
    for(i=0; i < prog_chord.length; i++) {
      chordProgression.push(chord(notes[keyIndex+prog_chord[i],major[prog_chord[i]]],false,false));
    }
  }

  return chordProgression ;
}

function randomChords(numOfChords) {

  const num = [];
  for(let i = 0; i !=numOfChords; i++) {
    num.push(Math.floor((Math.random()*6) + 1));
  }
  return num ;
}

