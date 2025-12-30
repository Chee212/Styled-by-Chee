(function () {
    const root = document.getElementById("portfolioCarousel");
    if (!root) return;
  
    const track = root.querySelector(".carousel-track");
    const slides = Array.from(root.querySelectorAll(".carousel-slide"));
    const prevBtn = root.querySelector(".carousel-btn.prev");
    const nextBtn = root.querySelector(".carousel-btn.next");
    const dotsWrap = root.querySelector(".carousel-dots");
  
    let index = 0;
    const slideCount = slides.length;
  
    // Build dots
    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "carousel-dot" + (i === 0 ? " active" : "");
      b.setAttribute("aria-label", `Go to slide ${i + 1}`);
      b.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(b);
      return b;
    });
  
    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }
  
    function goTo(i) {
      index = (i + slideCount) % slideCount;
      update();
    }
  
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
  
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
  
    // Auto-rotate
    let timer = null;
    const INTERVAL_MS = 3500;
  
    function start() {
      stop();
      timer = setInterval(next, INTERVAL_MS);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }
  
    // Pause on hover/focus
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
  
    // Swipe support (mobile)
    let startX = 0;
    let dragging = false;
  
    root.addEventListener("touchstart", (e) => {
      dragging = true;
      startX = e.touches[0].clientX;
      stop();
    }, { passive: true });
  
    root.addEventListener("touchend", (e) => {
      if (!dragging) return;
      dragging = false;
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
  
      if (Math.abs(diff) > 40) {
        diff < 0 ? next() : prev();
      }
      start();
    }, { passive: true });
  
    // Kickoff
    update();
    start();
  })();
  