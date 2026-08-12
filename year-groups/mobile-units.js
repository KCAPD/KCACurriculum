
(function(){
  const mobile = () => window.matchMedia("(max-width: 700px)").matches;

  function cleanClone(detail){
    const clone = detail.cloneNode(true);
    clone.removeAttribute("hidden");
    clone.style.display = "";
    return clone;
  }

  function openModal(card){
    if(!mobile()) return;
    const modal = document.getElementById("mobile-unit-modal");
    const body = modal.querySelector(".mobile-unit-body");
    const title = modal.querySelector(".mobile-unit-title");
    const term = modal.querySelector(".mobile-unit-term");
    const detail = card.querySelector(".unit-detail");
    const question = card.querySelector("summary h2, summary h3, summary h4");

    if(!detail) return;

    const termEl = card.querySelector("summary > span:first-child, summary .term-tag");
    term.textContent = termEl ? termEl.textContent.trim() : "Curriculum unit";
    title.textContent = question ? question.textContent.trim() : "Explore this unit";

    body.innerHTML = "";
    body.appendChild(cleanClone(detail));

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("mobile-modal-open");
    modal.querySelector(".mobile-unit-close").focus();
  }

  function closeModal(){
    const modal = document.getElementById("mobile-unit-modal");
    if(!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden","true");
    document.body.classList.remove("mobile-modal-open");
  }

  function enhanceCards(){
    document.querySelectorAll(".unit-card").forEach((card, index) => {
      if(!card.querySelector(".unit-detail")) return;
      if(card.querySelector(".mobile-unit-open")) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mobile-unit-open";
      btn.textContent = "Explore this unit";
      btn.setAttribute("aria-haspopup","dialog");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(card);
      });

      const summary = card.querySelector("summary");
      if(summary) summary.appendChild(btn);
    });
  }

  function init(){
    enhanceCards();

    if(!document.getElementById("mobile-unit-modal")){
      const modal = document.createElement("div");
      modal.id = "mobile-unit-modal";
      modal.className = "mobile-unit-modal";
      modal.setAttribute("role","dialog");
      modal.setAttribute("aria-modal","true");
      modal.setAttribute("aria-hidden","true");
      modal.innerHTML = `
        <div class="mobile-unit-sheet">
          <div class="mobile-unit-sheet-head">
            <div>
              <span class="mobile-unit-term">Curriculum unit</span>
              <h2 class="mobile-unit-title">Explore this unit</h2>
            </div>
            <button type="button" class="mobile-unit-close" aria-label="Close unit">×</button>
          </div>
          <div class="mobile-unit-body"></div>
        </div>`;
      document.body.appendChild(modal);

      modal.querySelector(".mobile-unit-close").addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if(e.target === modal) closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
      });
    }

    // On mobile, prevent the native details toggle; use modal instead.
    document.querySelectorAll(".unit-card > summary").forEach(summary => {
      summary.addEventListener("click", (e) => {
        if(mobile() && !e.target.closest(".mobile-unit-open")){
          e.preventDefault();
        }
      });
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
