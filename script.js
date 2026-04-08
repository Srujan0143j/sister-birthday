// Typing animation
new Typed("#typing", {
  strings: [
    "You are my strength 💖",
    "My best friend 👭",
    "My forever support 🌸"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

function showSections() {
  document.querySelectorAll('.fade').forEach(el => {
    setTimeout(() => el.classList.add('show'), 300);
  });
}

function start() {
  document.querySelector('.hero').style.display = 'none';

  document.querySelector('.gallery').classList.remove('hidden');
  document.querySelector('.video').classList.remove('hidden');
  document.querySelector('.secret').classList.remove('hidden');

  showSections();

  document.getElementById('music').play();
}

// Password lock
function checkPass() {
  let pass = document.getElementById("pass").value;

  if (pass === "akka123") {
    document.getElementById("secretText").innerText =
      "You are not just my sister… you are my happiness, my guide, and my forever hero 💖";

    // Show final + fireworks
    document.querySelector('.final').classList.remove('hidden');
    firework();
  } else {
    alert("Wrong password 😅");
  }
}

// Fireworks effect
function firework() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
