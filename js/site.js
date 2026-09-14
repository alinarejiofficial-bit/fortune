document.documentElement.classList.add("js");

document.getElementById("navToggle")?.addEventListener("click", function () {
    const links = document.querySelector(".nav-links");
    const open = links?.classList.toggle("active");
    this.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelector(".nav-links")?.classList.remove("active");
    });
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

const heroSlides = document.querySelectorAll(".hero-slides .hero-photo");
const heroCopies = document.querySelectorAll("[data-hero-copy]");

const heroThemes = ["is-bailley", "is-bisleri", "is-fortune"];

function showHeroCopy(index) {
    heroCopies.forEach(function (copy) {
        copy.hidden = Number(copy.getAttribute("data-hero-copy")) !== index;
    });
    const hero = document.querySelector(".hero");
    if (!hero) return;
    heroThemes.forEach(function (name) {
        hero.classList.remove(name);
    });
    hero.classList.add(heroThemes[index] || "is-bailley");
}

if (heroSlides.length > 1 && !motionQuery.matches) {
    let heroIndex = 0;
    window.setInterval(function () {
        const current = heroSlides[heroIndex];
        heroIndex = (heroIndex + 1) % heroSlides.length;
        const next = heroSlides[heroIndex];
        next.classList.add("is-prep");
        void next.offsetWidth;
        current.classList.remove("is-active");
        current.classList.add("is-exit");
        next.classList.remove("is-prep", "is-exit");
        next.classList.add("is-active");
        showHeroCopy(heroIndex);
        window.setTimeout(function () {
            current.classList.remove("is-exit");
        }, 900);
    }, 5000);
}

const revealWatcher = new MutationObserver(function () {
    watchReveals(document);
});
revealWatcher.observe(document.body, { childList: true, subtree: true });
