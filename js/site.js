document.documentElement.classList.add("js");

document.getElementById("navToggle")?.addEventListener("click", function () {
    document.querySelector(".nav-links")?.classList.toggle("active");
});

const revealSelector = [
    ".feature-box",
    ".about-image",
    ".about-content",
    ".why-content",
    ".why-box",
    ".section-header",
    ".product-card",
    ".contact-card",
    ".contact-form",
    ".page-banner .container",
    ".detail-photo",
    ".detail > div",
    ".catalog-group .section-header",
    ".view-all-container"
].join(",");

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

function watchReveals(root) {
    if (motionQuery.matches) return;
    (root || document).querySelectorAll(revealSelector).forEach(function (el, index) {
        if (el.dataset.reveal) return;
        el.dataset.reveal = "1";
        el.classList.add("reveal");
        const siblings = el.parentElement ? el.parentElement.children : [];
        let order = 0;
        for (let i = 0; i < siblings.length; i++) {
            if (siblings[i] === el) {
                order = i;
                break;
            }
        }
        el.style.transitionDelay = (order % 8) * 70 + "ms";
        revealObserver.observe(el);
    });
}

watchReveals(document);

const revealWatcher = new MutationObserver(function () {
    watchReveals(document);
});
revealWatcher.observe(document.body, { childList: true, subtree: true });
