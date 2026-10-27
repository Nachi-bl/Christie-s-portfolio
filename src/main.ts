import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("Missing #app");

const hireMailto =
  "mailto:bchris1161@gmail.com?subject=Project%20inquiry%20%E2%80%94%20Christy";

app.innerHTML = `
  <div class="page">
    <header class="topbar">
      <div class="topbar__pill">
        <div class="topbar__sideMenu" id="topbarMobileNav" aria-hidden="true">
          <nav class="nav nav--left" aria-label="Primary">
            <a class="nav__link" href="#home">Home</a>
            <a class="nav__link" href="#about">About</a>
            <a class="nav__link" href="#services">Service</a>
          </nav>

          <nav class="nav nav--right" aria-label="Secondary">
            <a class="nav__link" href="#project">Resume</a>
            <a class="nav__link" href="#portfolio">Project</a>
            <a class="nav__link nav__link--cta" href="#contact">Contact Us</a>
          </nav>
        </div>

        <a class="logo" href="#home" aria-label="Christy">
          <span class="logo__mark" aria-hidden="true">C</span>
          <span class="logo__text">Christy</span>
        </a>

        <button
          type="button"
          class="topbar__menuBtn"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="topbarMobileNav"
        >
          <span class="topbar__menuIcon" aria-hidden="true"></span>
        </button>
      </div>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero__hello">
          <span class="hero__helloBubble">Hello!</span>
        </div>

        <h1 class="hero__title">
          I’m <span class="accent">Christy</span>,<br />
          Product Designer
        </h1>

        <div class="hero__grid">
          <div class="heroAside">
            <div class="quoteCard">
              <div class="quoteCard__mark">“</div>
              <p class="quoteCard__text">
                Christy’s exceptional product design combines creativity, functionality, and user-focused experiences to create modern digital solutions that solve real-world problems.
              </p>
            </div>

          </div>

          <div class="heroMetrics">
            <div class="heroStats">
              <div class="stars" aria-label="5 stars">
                <span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span>
              </div>
              <div class="heroStats__big">3+ Years</div>
              <div class="heroStats__label">Experience</div>
              <div class="heroStats__rule" aria-hidden="true"></div>
            </div>

            <div class="heroMeta">
              <div class="heroMeta__big">10+</div>
              <div class="heroMeta__label">Client Served</div>
            </div>
          </div>

          <div class="heroPortrait" aria-hidden="true">
            <div class="heroPortrait__stage">
              <svg
                class="heroPortrait__arc"
                viewBox="0 0 200 100"
                preserveAspectRatio="xMidYMax meet"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id="heroArcGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff6a3d" />
                    <stop offset="55%" stop-color="#ff5a2a" />
                    <stop offset="100%" stop-color="#e84e1f" />
                  </linearGradient>
                </defs>
                <path fill="url(#heroArcGrad)" d="M0,100 A100,100 0 0,1 200,100 Z" />
              </svg>
              <img
                class="heroPortrait__img"
                src="/christy-hero.png"
                alt=""
                decoding="async"
              />
              <span class="heroPortrait__spark" aria-hidden="true">★</span>
              <div class="heroActions">
                <a class="btn btn--primary btn--small" href="#project">Portfolio <span aria-hidden="true">↗</span></a>
                <a class="btn btn--ghost btn--small" href="${hireMailto}">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about" id="about" aria-label="About"></section>

      <section class="services" id="services">
        <div class="services__panel">
          <div class="services__head">
            <h2 class="services__title">My <span class="accent2">Services</span></h2>
            <p class="services__subtitle">
              Delivering creative digital solutions including web design,
               landing pages, and UI/UX experiences tailored to your brand.
      
            </p>
          </div>

          <div class="serviceCards">
            <article class="serviceCard">
              <div class="serviceCard__label">UI/UX Design</div>
              <div class="serviceCard__media sprite sprite--uiux" aria-hidden="true">
                <div class="serviceShot">
                  <div class="serviceShot__chrome">
                    <span class="serviceShot__traffic" aria-hidden="true"><span></span><span></span><span></span></span>
                    <span class="serviceShot__url">luxury-estate — Preview</span>
                  </div>
                  <div class="serviceShot__viewport">
                    <img
                      class="serviceCard__img serviceCard__img--uiux"
                      src="/services/luxury-estate.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <button class="serviceCard__go" aria-label="Open UI/UX Design">↗</button>
            </article>

            <article class="serviceCard serviceCard--active">
              <div class="serviceCard__label">Web Design</div>
              <div class="serviceCard__media sprite sprite--web" aria-hidden="true">
                <div class="serviceShot">
                  <div class="serviceShot__chrome">
                    <span class="serviceShot__traffic" aria-hidden="true"><span></span><span></span><span></span></span>
                    <span class="serviceShot__url">yoggo.studio — Preview</span>
                  </div>
                  <div class="serviceShot__viewport">
                    <img
                      class="serviceCard__img serviceCard__img--web"
                      src="/services/yoggo-studio.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <button class="serviceCard__go serviceCard__go--active" aria-label="Open Web Design">↗</button>
            </article>

            <article class="serviceCard">
              <div class="serviceCard__label">Landing Page</div>
              <div class="serviceCard__media sprite sprite--landing" aria-hidden="true">
                <div class="serviceShot">
                  <div class="serviceShot__chrome">
                    <span class="serviceShot__traffic" aria-hidden="true"><span></span><span></span><span></span></span>
                    <span class="serviceShot__url">ev-product — Preview</span>
                  </div>
                  <div class="serviceShot__viewport">
                    <img
                      class="serviceCard__img serviceCard__img--landing"
                      src="/services/ev-product.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <button class="serviceCard__go" aria-label="Open Landing Page">↗</button>
            </article>
          </div>
        </div>
      </section>

      <section class="experience" id="project">
        <h2 class="experience__title">My Work Experience</h2>

        <div class="timeline">
          <div class="timeline__col">
            <div class="role">
              <div class="role__org">Employed at Afresh Center</div>
              <div class="role__dates">Sep 2024- Till Date</div>
            </div>
            <div class="role">
              <div class="role__org">Helpman School of Continuing</div>
              <div class="role__dates">Aug 2024 - Sep 2025</div>
            </div>
            <div class="role">
              <div class="role__org">Popswit</div>
              <div class="role__dates">Sep 2025 - Till Date</div>
            </div>
          </div>

          <div class="timeline__mid" aria-hidden="true">
            <div class="timeline__dot timeline__dot--active"></div>
            <div class="timeline__line"></div>
            <div class="timeline__dot"></div>
            <div class="timeline__line"></div>
            <div class="timeline__dot timeline__dot--active"></div>
          </div>

          <div class="timeline__col">
            <div class="job">
              <div class="job__title">Visual Designer</div>
              <div class="job__desc">Creating visually appealing and user-friendly designs for websites and digital products with a focus on creativity, branding, and modern user experience.</div>
            </div>
            <div class="job">
              <div class="job__title">UI/UX Designer</div>
              <div class="job__desc">Designing intuitive interfaces and improving user interaction through wireframes, prototypes, and responsive layouts using modern design tools.</div>
            </div>
            <div class="job">
              <div class="job__title">Web Designer</div>
              <div class="job__desc">Building responsive and functional websites using HTML, CSS, JavaScript, and React while ensuring performance and accessibility across devices</div>
            </div>
          </div>
        </div>
      </section>

      <section class="hire" id="hire">
        <div class="hire__panel">
          <div class="hire__visual" aria-hidden="true">
            <div class="hire__circle"></div>
            <img class="hire__photo" src="/portrait.png" alt="Christy" />
            <div class="hire__dots"></div>
          </div>

          <div class="hire__content">
            <div class="hire__headline">Why You <span class="accent">Hire Me</span> for Your Next Projects?</div>
            <p class="hire__text">
              I bring creativity, problem-solving skills, and a strong passion for delivering clean, user-friendly, and responsive digital experiences. <br />
              I’m dedicated to quality work, continuous learning, and helping brands turn ideas into impactful products.
            </p>

            <div class="hire__stats">
              <div class="hire__stat">
                <div class="hire__statBig">10+</div>
                <div class="hire__statLabel">Project Completed</div>
              </div>
              <div class="hire__stat">
                <div class="hire__statBig">10+</div>
                <div class="hire__statLabel">Industry Covered</div>
              </div>
            </div>

            <a class="btn btn--outline btn--small" href="${hireMailto}">Hire Me</a>
          </div>
        </div>
      </section>

      <section class="portfolio" id="portfolio">
        <div class="portfolio__head">
          <h2 class="portfolio__title">Let’s Have a Look at my <span class="accent">Portfolio</span></h2>
          <button class="btn btn--primary btn--small" id="portfolioNext">See More <span aria-hidden="true">→</span></button>
        </div>

        <div class="portfolio__carouselWrap">
          <button
            type="button"
            class="portfolio__arrow portfolio__arrow--prev"
            id="portfolioPrev"
            aria-label="Previous portfolio projects"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div class="portfolio__carousel" id="portfolioCarousel">
            <div class="portfolio__track" id="portfolioTrack">
            <a class="portfolio__card" href="https://popswit.com" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/popswit.png" alt="PopSwit - Spring Rolls & Popcorn" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">PopSwit</span>
                <span class="tag tag--light">Landing Page</span>
              </div>
            </a>
            <a class="portfolio__card" href="https://afresh.center" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/afresh.png" alt="AfRESH - Innovation Hub" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">AfRESH</span>
                <span class="tag tag--light">Web Design</span>
              </div>
            </a>
            <a class="portfolio__card" href="https://gatewav.com" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/gatewav.png" alt="GateWav - Event Tickets" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">GateWav</span>
                <span class="tag tag--light">Web App</span>
              </div>
            </a>
            <a class="portfolio__card" href="https://afresh.academy" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/afresh-academy-card-2026.png" alt="AfRESH Academy - Training Platform" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">AfRESH Academy</span>
                <span class="tag tag--light">Web App</span>
              </div>
            </a>
            <a class="portfolio__card" href="https://genius.ng" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/geniuswav.png" alt="GeniusWav - Talent Platform" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">GeniusWav</span>
                <span class="tag tag--light">Web App</span>
              </div>
            </a>
            <a class="portfolio__card" href="https://joscity.com" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/joscity.png" alt="JosCity - Events & Traditions" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">JosCity</span>
                <span class="tag tag--light">Web App</span>
              </div>
            </a>
            <a class="portfolio__card" href="https://knowrist.com" target="_blank" rel="noopener noreferrer">
              <img class="portfolio__img" src="/projects/knowrist.png" alt="Knowrist - Quiz Platform" />
              <div class="portfolio__overlay">
                <span class="portfolio__cardTitle">Knowrist</span>
                <span class="tag tag--light">Dashboard</span>
              </div>
            </a>
            </div>
          </div>
          <button
            type="button"
            class="portfolio__arrow portfolio__arrow--next"
            id="portfolioNextArrow"
            aria-label="Next portfolio projects"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </section>
      <section class="testimonial" id="testimonial">
        <div class="testimonial__inner">
          <div class="testimonial__left">
            <div class="testimonial__portrait">
              <img class="testimonial__portraitImg" src="/testimonial-client.png" alt="Client" />
            </div>
          </div>

          <div class="testimonial__card">
            <div class="testimonial__logoMark" aria-hidden="true">
              <span class="testimonial__logoDot testimonial__logoDot--1"></span>
              <span class="testimonial__logoDot testimonial__logoDot--2"></span>
              <span class="testimonial__logoDot testimonial__logoDot--3"></span>
            </div>

            <div class="testimonial__quoteIcon" aria-hidden="true">"</div>

            <h2 class="testimonial__heading">Client<br />Testimonial</h2>

            <div class="testimonial__stars" aria-label="5 stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>

            <p class="testimonial__text">
              “Working with Christy was one of the best decisions for our brand. The attention to detail, creativity, and professionalism brought our vision to life perfectly. Our website now looks modern, feels user-friendly, and has greatly improved customer engagement.”
            </p>

            <div class="testimonial__author">Nachi</div>

            <div class="testimonial__actions" aria-hidden="true">
              <button class="testimonial__actionBtn" aria-label="Expand">↗</button>
              <button class="testimonial__actionBtn" aria-label="Refresh">↻</button>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="footer" id="contact">
      <div class="footer__top">
        <h2 class="footer__cta">Let's connect</h2>
        <a class="btn btn--primary" href="${hireMailto}">Hire me <span aria-hidden="true">↗</span></a>
      </div>

      <div class="footer__divider"></div>

      <div class="footer__main">
        <div class="footer__brand">
          <div class="footer__logo">
            <span class="footer__logoMark">C</span>
            <span class="footer__logoText">Christy</span>
          </div>
          <p class="footer__desc">
            Christy crafts modern digital experiences that blend creativity, strategy, and seamless user interaction. Passionate about building visually stunning and user-focused designs that leave lasting impressions.
          </p>
          <div class="footer__socials">
            <a class="footer__social" href="https://www.facebook.com/share/1JCCoE33An/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a class="footer__social" href="https://www.behance.net/christy11_61" target="_blank" rel="noopener noreferrer" aria-label="Behance">Bē</a>
            <a class="footer__social" href="https://x.com/Bellaqueen1161" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">𝕏</a>
          </div>
        </div>

        <div class="footer__col footer__col--nav">
          <h3 class="footer__colTitle">Navigation</h3>
          <a class="footer__colLink" href="#home">Home</a>
          <a class="footer__colLink" href="#about">About</a>
          <a class="footer__colLink" href="#services">Services</a>
          <a class="footer__colLink" href="#project">Experience</a>
          <a class="footer__colLink" href="#portfolio">Portfolio</a>
          <a class="footer__colLink" href="#testimonial">Testimonials</a>
        </div>

        <div class="footer__col footer__col--contact">
          <h3 class="footer__colTitle">Contact</h3>
          <a class="footer__colLink" href="tel:+2348053770290">+234 8053770290</a>
          <a class="footer__colLink" href="mailto:bchris1161@gmail.com">bchris1161@gmail.com</a>
        </div>
      </div>

      <div class="footer__divider"></div>

      <div class="footer__bottom">
        <span>Copyright © 2026 <span class="accent">Christy</span>. All Rights Reserved.</span>
        <span class="footer__legal">User Terms & Conditions | Privacy Policy</span>
      </div>
    </footer>
  </div>
`;

const portfolioCarousel = document.getElementById("portfolioCarousel");
const portfolioSeeMore = document.getElementById("portfolioNext");
const portfolioPrevBtn = document.getElementById("portfolioPrev");
const portfolioNextArrowBtn = document.getElementById("portfolioNextArrow");

function getPortfolioScrollStep(el: HTMLElement): number {
  const card = el.querySelector(".portfolio__card") as HTMLElement | null;
  return (card?.offsetWidth ?? 320) + 16;
}

function scrollPortfolioBy(direction: 1 | -1) {
  if (!portfolioCarousel) return;
  const step = getPortfolioScrollStep(portfolioCarousel);
  portfolioCarousel.scrollBy({
    left: direction * step,
    behavior: "smooth",
  });
}

function updatePortfolioArrowState() {
  if (!portfolioCarousel || !portfolioPrevBtn || !portfolioNextArrowBtn) return;
  const { scrollLeft, scrollWidth, clientWidth } = portfolioCarousel;
  const maxScroll = scrollWidth - clientWidth;
  const eps = 4;
  portfolioPrevBtn.toggleAttribute("disabled", scrollLeft <= eps);
  portfolioNextArrowBtn.toggleAttribute(
    "disabled",
    scrollLeft >= maxScroll - eps,
  );
}

if (portfolioCarousel) {
  portfolioSeeMore?.addEventListener("click", () => scrollPortfolioBy(1));
  portfolioPrevBtn?.addEventListener("click", () => scrollPortfolioBy(-1));
  portfolioNextArrowBtn?.addEventListener("click", () => scrollPortfolioBy(1));
  portfolioCarousel.addEventListener("scroll", () =>
    requestAnimationFrame(updatePortfolioArrowState),
  );
  window.addEventListener("resize", () =>
    requestAnimationFrame(updatePortfolioArrowState),
  );
  updatePortfolioArrowState();
}

const navSectionOrder = [
  "home",
  "about",
  "services",
  "project",
  "portfolio",
  "testimonial",
  "hire",
  "contact",
] as const;

function setActiveNavByHash(hash: string) {
  const root = document.querySelector<HTMLDivElement>("#app");
  if (!root) return;
  const navLinks = root.querySelectorAll<HTMLAnchorElement>(
    ".topbar__pill .nav__link",
  );
  if (!navLinks.length) return;
  const normalized = hash.startsWith("#") ? hash : `#${hash}`;
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("nav__link--active", href === normalized);
  });
}

function updateNavFromScroll() {
  const probe = window.scrollY + Math.min(140, window.innerHeight * 0.18);
  let activeHash = "#home";
  for (const id of navSectionOrder) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= probe + 1) activeHash = `#${id}`;
  }
  setActiveNavByHash(activeHash);
}

if (app) {
  const topbar = app.querySelector<HTMLElement>(".topbar");
  const menuBtn = app.querySelector<HTMLButtonElement>(".topbar__menuBtn");

  function setMobileMenuOpen(open: boolean) {
    topbar?.classList.toggle("topbar--menu-open", open);
    document.body.classList.toggle("menu-open", open);
    menuBtn?.setAttribute("aria-expanded", String(open));
    menuBtn?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document
      .getElementById("topbarMobileNav")
      ?.setAttribute("aria-hidden", String(!open));
  }

  menuBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!topbar?.classList.contains("topbar--menu-open"));
  });

  document.addEventListener("click", (e) => {
    if (!topbar?.classList.contains("topbar--menu-open")) return;
    const target = e.target as HTMLElement;
    if (
      target.closest(".topbar__sideMenu") ||
      target.closest(".topbar__menuBtn")
    ) {
      return;
    }
    setMobileMenuOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMobileMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880) setMobileMenuOpen(false);
  });

  const navLinks = app.querySelectorAll<HTMLAnchorElement>(
    ".topbar__pill .nav__link",
  );
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href?.startsWith("#")) setActiveNavByHash(href);
      setMobileMenuOpen(false);
    });
  });

  app
    .querySelector<HTMLAnchorElement>(".topbar__pill .nav__link--cta")
    ?.addEventListener("click", () => setMobileMenuOpen(false));

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        updateNavFromScroll();
      });
    },
    { passive: true },
  );

  window.addEventListener("hashchange", () => {
    const h = window.location.hash;
    if (h) setActiveNavByHash(h);
  });

  if (window.location.hash) setActiveNavByHash(window.location.hash);
  else updateNavFromScroll();

  const mobileHeroMq = window.matchMedia("(max-width: 880px)");

  /** Desktop: align portrait to services. Mobile: metrics sit above portrait. */
  function syncHeroPortraitSeat() {
    const stage = app!.querySelector<HTMLElement>(".heroPortrait__stage");
    const panel = document.querySelector<HTMLElement>(".services__panel");
    const img = app!.querySelector<HTMLImageElement>(".heroPortrait__img");
    if (!stage || !panel || !img) return;

    if (mobileHeroMq.matches) {
      stage.style.setProperty("--img-seat-bottom", "0px");
      return;
    }

    const gap =
      panel.getBoundingClientRect().top - stage.getBoundingClientRect().bottom;
    stage.style.setProperty("--img-seat-bottom", `${-gap}px`);

    const delta =
      panel.getBoundingClientRect().top - img.getBoundingClientRect().bottom;
    if (Math.abs(delta) > 0.5) {
      const seat = parseFloat(
        getComputedStyle(stage).getPropertyValue("--img-seat-bottom"),
      );
      stage.style.setProperty("--img-seat-bottom", `${seat - delta}px`);
    }
  }

  let portraitSyncScheduled = false;
  function schedulePortraitSeatSync() {
    if (portraitSyncScheduled) return;
    portraitSyncScheduled = true;
    requestAnimationFrame(() => {
      portraitSyncScheduled = false;
      syncHeroPortraitSeat();
      requestAnimationFrame(syncHeroPortraitSeat);
    });
  }

  const heroPortraitImg = app.querySelector<HTMLImageElement>(".heroPortrait__img");
  if (heroPortraitImg) {
    if (heroPortraitImg.complete) schedulePortraitSeatSync();
    else
      heroPortraitImg.addEventListener("load", schedulePortraitSeatSync, {
        once: true,
      });
  }

  const portraitStage = app.querySelector<HTMLElement>(".heroPortrait__stage");
  const servicesPanel = document.querySelector<HTMLElement>(".services__panel");
  if (portraitStage && servicesPanel && "ResizeObserver" in window) {
    const ro = new ResizeObserver(schedulePortraitSeatSync);
    ro.observe(portraitStage);
    ro.observe(servicesPanel);
  }

  window.addEventListener("resize", schedulePortraitSeatSync);
  mobileHeroMq.addEventListener("change", schedulePortraitSeatSync);
  document.fonts?.ready.then(schedulePortraitSeatSync);
  schedulePortraitSeatSync();
  window.addEventListener("load", schedulePortraitSeatSync);
}


