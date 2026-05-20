const cheeToggle = document.getElementById("chee-toggle");
const cheeBox = document.getElementById("chee-box");
const cheeClose = document.getElementById("chee-close");
const cheeMessages = document.getElementById("chee-messages");

cheeToggle.addEventListener("click", () => {
  cheeBox.style.display = "block";
  cheeToggle.style.display = "none";
});

cheeClose.addEventListener("click", () => {
  cheeBox.style.display = "none";
  cheeToggle.style.display = "block";
});

function addCheeMessage(message) {
  cheeMessages.innerHTML += `<p><strong>Chee:</strong> ${message}</p>`;
  cheeMessages.scrollTop = cheeMessages.scrollHeight;
}

function chooseOption(option) {
  if (option === "style") {
    addCheeMessage(`
      Ouu okay period! What vibe are we going for?<br><br>
      <button class="chee-choice" onclick="recommendStyle('low')">Low maintenance</button>
      <button class="chee-choice" onclick="recommendStyle('birthday')">Birthday / glam</button>
      <button class="chee-choice" onclick="recommendStyle('vacation')">Vacation hair</button>
      <button class="chee-choice" onclick="recommendStyle('quick')">Cute but quick</button>
    `);
  }

  if (option === "policies") {
    addCheeMessage(`
      A $25 deposit is required to book. DM to confirm appointments.
      Squeeze-ins on off-days are an extra $15. Please read all policies before booking 💕
    `);
  }

  if (option === "prep") {
    addCheeMessage(`
      Please come with your hair washed, detangled, and product-free unless your service includes detangling.
      Blow-drying is not necessary as it is included in  the service.
      Please properly detangle your hair as it helps your appointment go smoother and keeps the final style neat.
    `);
  }

  if (option === "contact") {
    addCheeMessage(`
      You can contact me through Instagram or the contact page on styledbychee.com 💕
    `);
  }
}

function recommendStyle(vibe) {
  if (vibe === "low") {
    addCheeMessage(`
      I’d recommend knotless braids, twists, a Fulani braid down, or soft locs. 
      Cute, protective, and not too stressful to maintain.
    `);
  }

  if (vibe === "birthday") {
    addCheeMessage(`
      Birthday energy? For a guy I’d say; Stitch braids, Barrel twists, Cornrows into twists or invisible twists/two strands. 
      For a lady, I'd recommend; Fulani sew ins/quick weaves, any boho style a ponytail/updo, or a regular sew-in/quick weave.
      Something clean, bold, and picture-ready.
    `);
  }

  if (vibe === "vacation") {
    addCheeMessage(`
      For vacation, I’d recommend boho knotless with human hair, soft locs, or twists.
      Something cute that still looks good after a few days out.
    `);
  }

  if (vibe === "quick") {
    addCheeMessage(`
      If you want cute but quick, go for stitch braids, a ponytail, or a simple twist style.
      Girl… don’t book long or full knotless/boho styles if you hate sitting long 😭
    `);
  }
}
