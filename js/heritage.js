(function () {
  var modal = document.getElementById("videoModal");
  var closeBtn = document.getElementById("closeVideoModal");
  var playerCover = document.getElementById("playerCover");
  var playerTitle = document.getElementById("videoModalTitle");
  var playerDuration = document.getElementById("playerDuration");
  var playerLoading = document.getElementById("playerLoading");

  function openModal(card) {
    if (!modal) return;
    var title = card.getAttribute("data-title") || "";
    var duration = card.getAttribute("data-duration") || "00:00";
    var cover = card.getAttribute("data-cover") || "";
    if (playerTitle) playerTitle.textContent = title;
    if (playerDuration) playerDuration.textContent = duration;
    if (playerCover) {
      playerCover.src = cover;
      playerCover.alt = title;
    }
    if (playerLoading) {
      playerLoading.style.display = "block";
      window.setTimeout(function () {
        if (playerLoading) playerLoading.style.display = "none";
      }, 900);
    }
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".video-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(card);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card);
      }
    });
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal)
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
})();
