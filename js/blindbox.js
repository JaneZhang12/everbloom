(function () {
  var openBtn = document.getElementById("openBlindBoxBtn");
  var overlay = document.getElementById("blindBoxModal");
  var closeBtn = document.getElementById("closeBlindBox");
  var boxVisual = document.getElementById("blindBoxVisual");
  var prizeReveal = document.getElementById("prizeReveal");
  var prizeImg = document.getElementById("prizeImg");
  var prizeName = document.getElementById("prizeName");
  var prizeDesc = document.getElementById("prizeDesc");
  var openAgain = document.getElementById("openAgainBtn");

  var pool = [
    {
      name: "郁金香 · 冬奥记忆",
      desc: "经典复刻款，丝网塑形与渐变上色，寓意生命绽放。",
      img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&q=80",
    },
    {
      name: "波斯菊 · 暖阳",
      desc: "层次花瓣手工组装，轻盈灵动，适合家居与礼赠。",
      img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
    },
    {
      name: "金鱼 · 吉祥",
      desc: "仿生造型与金属丝骨架结合，寓意年年有余。",
      img: "https://images.unsplash.com/photo-1459411552884-841db9bfd3cc?w=400&q=80",
    },
    {
      name: "盲盒限定 · 晨露玫瑰",
      desc: "万物皆可花系列隐藏款，粉白渐变，限量主题。",
      img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&q=80",
    },
  ];

  function randomPrize() {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function openModal() {
    if (!overlay) return;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    resetAnimation();
    runSequence();
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    resetAnimation();
  }

  function resetAnimation() {
    if (boxVisual) {
      boxVisual.classList.remove("shake", "explode");
      boxVisual.style.display = "";
    }
    if (prizeReveal) {
      prizeReveal.classList.remove("show");
    }
  }

  function runSequence() {
    var p = randomPrize();
    if (boxVisual) {
      boxVisual.style.display = "flex";
      boxVisual.classList.add("shake");
    }
    window.setTimeout(function () {
      if (boxVisual) {
        boxVisual.classList.remove("shake");
        boxVisual.classList.add("explode");
      }
    }, 2200);
    window.setTimeout(function () {
      if (boxVisual) boxVisual.style.display = "none";
      if (prizeImg) prizeImg.src = p.img;
      if (prizeImg) prizeImg.alt = p.name;
      if (prizeName) prizeName.textContent = p.name;
      if (prizeDesc) prizeDesc.textContent = p.desc;
      if (prizeReveal) prizeReveal.classList.add("show");
    }, 2900);
  }

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay)
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
  if (openAgain)
    openAgain.addEventListener("click", function () {
      resetAnimation();
      runSequence();
    });
})();
