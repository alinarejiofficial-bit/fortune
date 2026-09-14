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
    const theme = heroThemes[index] || "is-bailley";
    [document.body, hero].forEach(function (el) {
        if (!el) return;
        heroThemes.forEach(function (name) {
            el.classList.remove(name);
        });
        el.classList.add(theme);
    });
}

if (heroSlides.length > 1) {
    let heroIndex = 0;
    let heroTimer = 0;
    const heroDots = document.querySelectorAll("[data-hero-dot]");
    const heroSection = document.querySelector(".hero");

    function updateHeroDots(index) {
        heroDots.forEach(function (dot) {
            const active = Number(dot.getAttribute("data-hero-dot")) === index;
            dot.classList.toggle("is-active", active);
            dot.setAttribute("aria-current", active ? "true" : "false");
        });
    }

    function goToHero(index, direction) {
        const nextIndex = (index + heroSlides.length) % heroSlides.length;
        if (nextIndex === heroIndex) return;
        const current = heroSlides[heroIndex];
        const next = heroSlides[nextIndex];
        const forward = direction !== "prev";
        next.classList.add(forward ? "is-prep" : "is-prep-prev");
        void next.offsetWidth;
        current.classList.remove("is-active");
        current.classList.add(forward ? "is-exit" : "is-exit-prev");
        next.classList.remove("is-prep", "is-prep-prev", "is-exit", "is-exit-prev");
        next.classList.add("is-active");
        heroIndex = nextIndex;
        showHeroCopy(heroIndex);
        updateHeroDots(heroIndex);
        window.setTimeout(function () {
            current.classList.remove("is-exit", "is-exit-prev");
        }, 900);
    }

    function startHeroTimer() {
        if (motionQuery.matches) return;
        window.clearInterval(heroTimer);
        heroTimer = window.setInterval(function () {
            goToHero(heroIndex + 1, "next");
        }, 5000);
    }

    document.querySelector(".hero-next")?.addEventListener("click", function () {
        goToHero(heroIndex + 1, "next");
        startHeroTimer();
    });
    document.querySelector(".hero-prev")?.addEventListener("click", function () {
        goToHero(heroIndex - 1, "prev");
        startHeroTimer();
    });
    heroDots.forEach(function (dot) {
        dot.addEventListener("click", function () {
            const target = Number(dot.getAttribute("data-hero-dot"));
            goToHero(target, target > heroIndex ? "next" : "prev");
            startHeroTimer();
        });
    });

    let touchStartX = 0;
    heroSection?.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    heroSection?.addEventListener("touchend", function (event) {
        const delta = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) < 48) return;
        if (delta < 0) goToHero(heroIndex + 1, "next");
        else goToHero(heroIndex - 1, "prev");
        startHeroTimer();
    }, { passive: true });

    startHeroTimer();
}

const toTop = document.querySelector(".to-top");
if (toTop) {
    const hero = document.querySelector(".hero");
    function toggleToTop() {
        const passed = hero
            ? window.scrollY > hero.offsetTop + hero.offsetHeight - 80
            : window.scrollY > 480;
        toTop.hidden = !passed;
    }
    toggleToTop();
    window.addEventListener("scroll", toggleToTop, { passive: true });
    toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: motionQuery.matches ? "auto" : "smooth" });
    });
}

const revealWatcher = new MutationObserver(function () {
    watchReveals(document);
});
revealWatcher.observe(document.body, { childList: true, subtree: true });
