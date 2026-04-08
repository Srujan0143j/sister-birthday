function start() {
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.gallery').classList.remove('hidden');

  document.getElementById('music').play();

  startSlider();
  startHearts();
}

// 🎞️ Auto Slideshow
function startSlider() {
  let slides = document.querySelectorAll('.slider img');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000);
}

// 💖 Floating Hearts Animation
function startHearts() {
  const canvas = document.getElementById("hearts");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
  }

  Heart.prototype.update = function () {
    this.y -= this.speed;
  };

  Heart.prototype.draw = function () {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.push(new Heart());

    hearts.forEach((h, i) => {
      h.update();
      h.draw();

      if (h.y < 0) hearts.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  animate();
}
