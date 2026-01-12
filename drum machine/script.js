const drupPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
const powerButton = document.querySelector(".power-button");
const powerStatus = document.getElementById("power-status");
const bankButton = document.querySelector(".bank-button");
const bankStatus = document.getElementById("bank-status");
let isPower = true;

const kits = {
  heaterKit: [
    { id: "Heater-1", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" },
    { id: "Heater-2", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" },
    { id: "Heater-3", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" },
    { id: "Heater-4", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" },
    { id: "Clap", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" },
    { id: "Open-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" },
    { id: "Kick-n'-Hat", src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" },
    { id: "Kick", src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" },
    { id: "Closed-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" },
  ],
  pianokit: [
    { id: "Chord-1", src: "https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3" },
    { id: "Chord-2", src: "https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3" },
    { id: "Chord-3", src: "https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3" },
    { id: "Shaker", src: "https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3" },
    { id: "Open-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3" },
    { id: "Closed-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3" },
    { id: "Punchy-Kick", src: "https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3" },
    { id: "Side-Stick", src: "https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3" },
    { id: "Snare", src: "https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3" },
  ],
};

drupPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    if (isPower) {
      display.textContent = pad.id.split("-").join(" ");

      audio.currentTime = 0;
      audio.play();
    }
  });
});

const keyDown = (e) => {
  const audio = document.getElementById(e.key.toUpperCase());

  if (audio && isPower) {
    display.textContent = audio.closest("div").id.split("-").join(" ");
    audio.currentTime = 0;
    audio.play();
  }
};

const powerCheck = (e) => {
  isPower = e.target.checked;
  powerStatus.textContent = isPower ? "On" : "Off";
  !isPower && (display.textContent = ""); // Bak bu güzel
};

const bankCheck = (e) => {
  const isChecked = e.target.checked;
  if (isPower) {
    e.target.classList.toggle("bank-button");
    drupPads.forEach((pad, index) => {
      console.log(31);
      const kit = isChecked ? kits.heaterKit : kits.pianokit;
      bankStatus.textContent = isChecked ? "Heater Kit" : "Smooth Piano Kit";
      const audio = pad.querySelector("audio");
      pad.id = kit[index].id;
      audio.src = kit[index].src;
    });
  }
};

document.addEventListener("keydown", keyDown);
powerButton.addEventListener("click", powerCheck);
bankButton.addEventListener("click", bankCheck);
