/* Reference build behavior. No dependencies.
   Partner economics stay null until decided (brief section 9). */
window.SITE = Object.assign({
  PARTNER_PCT: null,   // e.g. 0.10 once decided. null shows the placeholder formula.
  PARTNER_CAP: null,   // e.g. 100000 once decided.
  MIN_STAFF_LABEL: "20"
}, window.SITE || {});

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");

  /* ---------- Eligibility check ---------- */
  const fit = document.getElementById("fit-form");
  if (fit) {
    const out = document.getElementById("fit-result");
    const staffSelect = document.getElementById("r-staff");

    const render = () => {
      const data = new FormData(fit);
      const staff = data.get("staff");
      const years = data.get("years");
      const systems = data.getAll("systems");

      if (!staff || !years) {
        out.className = "result is-empty";
        out.innerHTML = "<h3>Your result appears here</h3><p>Answer the first two questions to see whether a call is worth your time.</p>";
        return;
      }

      out.className = "result";
      if (staff === "u20") {
        out.innerHTML = "<h3>Not yet</h3><p>We currently work with firms of " + SITE.MIN_STAFF_LABEL + " or more staff, now or at their peak.</p>";
        return;
      }
      if (years === "u3") {
        out.innerHTML = "<h3>Not yet</h3><p>Buyers look for at least three years of records. If you have older archives, a call can confirm what counts.</p>" +
          '<a class="btn" href="#request">Request a valuation</a>';
        return;
      }
      if (systems.length === 0) {
        out.innerHTML = "<h3>Worth a call</h3><p>You meet the size and history criteria. Most owners aren't sure where everything lives. We work that out on the call.</p>" +
          '<a class="btn" href="#request">Request a valuation</a>';
      } else {
        out.innerHTML = "<h3>Likely a fit</h3><p>Your firm meets the criteria we screen for. The next step is a 30-minute call to confirm what you have.</p>" +
          '<a class="btn" href="#request">Request a valuation</a>';
      }
      if (staffSelect) {
        const map = { "20-49": "20-49", "50-199": "50-199", "200+": "200-499" };
        if (map[staff]) staffSelect.value = map[staff];
      }
    };

    fit.addEventListener("change", render);
    fit.addEventListener("submit", (e) => e.preventDefault());
  }

  /* ---------- Specimen toggle ---------- */
  document.querySelectorAll(".toggle").forEach((group) => {
    const doc = group.parentElement.querySelector("[data-mode]");
    const status = doc && doc.querySelector(".doc-foot");
    if (!doc) return;
    const spans = doc.querySelectorAll(".r");
    const text = {
      original: "Showing the original. The underlined details are the ones replaced before delivery. This version never leaves your systems.",
      licensed: "Showing the licensed copy. Labels stay consistent across every record, so the same person is always the same label."
    };

    group.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.show;
        if (doc.dataset.mode === mode) return;
        group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        const apply = () => {
          spans.forEach((s) => { s.textContent = mode === "original" ? s.dataset.o : s.dataset.l; });
          doc.dataset.mode = mode;
          if (status) status.textContent = text[mode];
        };
        if (reduceMotion) { apply(); return; }
        spans.forEach((s) => s.classList.add("is-swapping"));
        setTimeout(() => {
          apply();
          spans.forEach((s) => s.classList.remove("is-swapping"));
        }, 200);
      });
    });
  });

  /* ---------- Commission estimate ---------- */
  const range = document.getElementById("license-amount");
  if (range) {
    const amountOut = document.getElementById("amount-out");
    const shareOut = document.getElementById("share-out");
    const update = () => {
      const v = Number(range.value);
      amountOut.textContent = fmt(v) + (v >= Number(range.max) ? "+" : "");
      range.setAttribute("aria-valuetext", fmt(v));
      if (typeof SITE.PARTNER_PCT === "number") {
        let share = v * SITE.PARTNER_PCT;
        if (typeof SITE.PARTNER_CAP === "number") share = Math.min(share, SITE.PARTNER_CAP);
        shareOut.textContent = fmt(share);
      } else {
        shareOut.textContent = "[PARTNER %] of " + fmt(v);
      }
    };
    range.addEventListener("input", update);
    update();
  }

  /* ---------- Forms (not connected in the reference build) ---------- */
  document.querySelectorAll("form[data-confirm], #request-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const hp = form.querySelector('[name="company_website"]');
      if (hp && hp.value) return;
      if (!form.checkValidity()) {
        const first = form.querySelector(":invalid");
        if (status) status.textContent = "Please complete the highlighted field: " + (first.labels && first.labels[0] ? first.labels[0].textContent.trim() : "required field") + ".";
        if (first) first.focus();
        return;
      }
      if (status) status.textContent = form.dataset.confirm || "Valuation requested. We'll contact you within one business day.";
    });
  });
})();
