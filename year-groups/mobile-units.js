
(function(){
  "use strict";

  const isMobile = () => window.matchMedia("(max-width: 700px)").matches;
  let lastTrigger = null;

  function getModal(){
    return document.getElementById("mobile-unit-modal");
  }

  function buildModal(){
    if(getModal()) return getModal();

    const modal = document.createElement("div");
    modal.id = "mobile-unit-modal";
    modal.className = "mobile-unit-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
      <div class="mobile-unit-sheet" role="document">
        <div class="mobile-unit-sheet-head">
          <div>
            <span class="mobile-unit-term">Curriculum unit</span>
            <h2 class="mobile-unit-title">Explore this unit</h2>
          </div>
          <button type="button" class="mobile-unit-close" aria-label="Close unit details">×</button>
        </div>
        <div class="mobile-unit-body"></div>
      </div>`;

    document.body.appendChild(modal);

    modal.querySelector(".mobile-unit-close").addEventListener("click", closeModal);

    modal.addEventListener("click", function(e){
      if(e.target === modal) closeModal();
    });

    document.addEventListener("keydown", function(e){
      if(e.key === "Escape" && modal.classList.contains("is-open")){
        closeModal();
      }
    });

    return modal;
  }

  function openModal(card, trigger){
    if(!isMobile() || !card) return;

    const detail = card.querySelector(".unit-detail");
    if(!detail) return;

    const modal = buildModal();
    const body = modal.querySelector(".mobile-unit-body");
    const title = modal.querySelector(".mobile-unit-title");
    const term = modal.querySelector(".mobile-unit-term");

    const question = card.querySelector("summary h2, summary h3, summary h4");
    const termEl = card.querySelector("summary > span:first-child, summary .term-tag");

    term.textContent = termEl ? termEl.textContent.trim() : "Curriculum unit";
    title.textContent = question ? question.textContent.trim() : "Explore this unit";

    body.innerHTML = "";
    const clonedDetail = detail.cloneNode(true);
    clonedDetail.removeAttribute("hidden");
    clonedDetail.style.display = "block";
    body.appendChild(clonedDetail);

    lastTrigger = trigger || null;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("mobile-modal-open");

    requestAnimationFrame(function(){
      const close = modal.querySelector(".mobile-unit-close");
      if(close) close.focus({preventScroll:true});
    });
  }

  function closeModal(){
    const modal = getModal();
    if(!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("mobile-modal-open");

    if(lastTrigger && typeof lastTrigger.focus === "function"){
      try { lastTrigger.focus({preventScroll:true}); } catch(e) { lastTrigger.focus(); }
    }
    lastTrigger = null;
  }

  function enhanceCards(){
    document.querySelectorAll(".unit-card").forEach(function(card, index){
      const detail = card.querySelector(".unit-detail");
      const summary = card.querySelector(":scope > summary");
      if(!detail || !summary) return;

      // Remove any older mobile buttons left inside the card/summary.
      card.querySelectorAll(".mobile-unit-open").forEach(function(btn){
        btn.remove();
      });

      // Button must sit OUTSIDE <details>, otherwise closed details hide it.
      let button = card.nextElementSibling;
      if(!(button && button.classList.contains("mobile-unit-open"))){
        button = document.createElement("button");
        button.type = "button";
        button.className = "mobile-unit-open";
        button.textContent = "Explore this unit";
        button.setAttribute("aria-haspopup", "dialog");
        button.setAttribute("aria-controls", "mobile-unit-modal");
        card.insertAdjacentElement("afterend", button);
      }

      button.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        openModal(card, button);
      });

      // Prevent native expand/collapse on phone; explicit button opens the modal.
      summary.addEventListener("click", function(e){
        if(isMobile()){
          e.preventDefault();
        }
      });
    });
  }

  function init(){
    buildModal();
    enhanceCards();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
