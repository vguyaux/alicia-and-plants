// Variation 2: Editorial magazine
// Big serif, strong grid, lots of whitespace, botanical magazine energy

(function () {
  const root = document.getElementById('v-editorial');
  const I = window.Illustrations;

  root.innerHTML = `
    <style>
      #v-editorial {
        font-family: "Fraunces", serif;
        color: var(--ink);
        background: var(--cream);
        min-height: 100vh;
      }
      .ed-wrap { max-width: 1280px; margin: 0 auto; padding: 0 56px 80px; }

      /* Masthead */
      .ed-mast {
        border-bottom: 1px solid var(--ink);
        padding: 20px 0 14px;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: baseline;
        gap: 40px;
      }
      .ed-mast .left, .ed-mast .right {
        font-family: "Inter", sans-serif;
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .ed-mast .right { text-align: right; }
      .ed-mast .title {
        font-family: "DM Serif Display", serif;
        font-size: 48px;
        letter-spacing: 0.01em;
        line-height: 1;
        color: var(--palm-deep);
        text-align: center;
        font-weight: 400;
      }
      .ed-submast {
        border-bottom: 3px double var(--ink);
        padding: 10px 0;
        display: flex; justify-content: space-between;
        font-family: "Inter", sans-serif;
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
      .ed-submast nav { display: flex; gap: 28px; }
      .ed-submast nav a { text-decoration: none; color: var(--ink); }

      /* Hero */
      .ed-hero {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 56px;
        padding: 60px 0 80px;
        border-bottom: 1px solid var(--ink);
        align-items: end;
      }
      .ed-hero .kicker {
        font-family: "Inter", sans-serif;
        font-size: 12px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: var(--clay);
        margin-bottom: 20px;
      }
      .ed-hero h1 {
        font-family: "DM Serif Display", serif;
        font-size: 128px;
        line-height: 0.92;
        font-weight: 400;
        margin: 0 0 32px;
        color: var(--palm-deep);
        letter-spacing: -0.02em;
      }
      .ed-hero h1 em {
        font-family: "Fraunces", serif;
        font-style: italic;
        font-weight: 300;
        color: var(--clay);
      }
      .ed-hero .dek {
        font-family: "Fraunces", serif;
        font-size: 20px;
        line-height: 1.5;
        max-width: 52ch;
        margin: 0 0 32px;
        font-weight: 400;
      }
      .ed-hero .byline {
        font-family: "Inter", sans-serif;
        font-size: 11px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .ed-hero .byline em { color: var(--clay); font-style: normal; font-weight: 600; }
      .ed-hero-right {
        position: relative;
        height: 480px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
      .ed-hero-right .main-ill { width: 100%; height: 100%; color: var(--palm); }
      .ed-hero-right .caption {
        position: absolute; bottom: -8px; right: 0;
        font-family: "Inter", sans-serif;
        font-size: 10px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        opacity: 0.6;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
      }

      .ed-cta-inline {
        display: inline-flex; align-items: center; gap: 14px;
        font-family: "Inter", sans-serif;
        font-size: 14px; font-weight: 500;
        text-decoration: none;
        color: var(--ink);
        border-bottom: 1.5px solid var(--ink);
        padding-bottom: 4px;
        margin-top: 16px;
      }
      .ed-cta-inline::after {
        content: "→"; font-size: 18px; color: var(--clay);
      }

      /* Evidence / photo log */
      .ed-evidence {
        padding: 80px 0;
        border-bottom: 1px solid var(--ink);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
      }
      .ed-ev-right { display: grid; grid-template-columns: 1fr; gap: 16px; }
      .ed-ev-photo {
        display: grid;
        grid-template-columns: 120px 1fr 120px;
        gap: 20px;
        align-items: center;
        padding: 14px 0;
        border-top: 1px dashed var(--ink);
      }
      .ed-ev-photo:last-child { border-bottom: 1px dashed var(--ink); }
      .ed-ev-photo .ts {
        font-family: "Inter", sans-serif;
        font-size: 11px; letter-spacing: 0.22em;
        color: var(--clay); text-transform: uppercase;
      }
      .ed-ev-photo .slot {
        aspect-ratio: 4/3;
        background: repeating-linear-gradient(45deg, var(--sand-2) 0 8px, var(--sand-3) 8px 16px);
        display: flex; align-items: center; justify-content: center;
        color: var(--palm);
      }
      .ed-ev-photo .slot svg { width: 50%; }
      .ed-ev-photo .cap {
        font-family: "DM Serif Display", serif;
        font-style: italic;
        font-size: 16px; color: var(--palm-deep);
      }

      /* Pullquote / strip */
      .ed-pullquote {
        padding: 60px 0;
        border-bottom: 1px solid var(--ink);
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 40px;
        align-items: center;
      }
      .ed-pullquote .side {
        font-family: "Inter", sans-serif;
        font-size: 10px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        opacity: 0.6;
      }
      .ed-pullquote .side.right { text-align: right; }
      .ed-pullquote blockquote {
        font-family: "DM Serif Display", serif;
        font-style: italic;
        font-size: 40px;
        line-height: 1.2;
        margin: 0;
        text-align: center;
        color: var(--palm-deep);
        font-weight: 400;
      }
      .ed-pullquote blockquote::before, .ed-pullquote blockquote::after {
        content: "“"; color: var(--clay); font-size: 60px; vertical-align: -20px;
      }
      .ed-pullquote blockquote::after { content: "”"; }

      /* Services index */
      .ed-services {
        padding: 80px 0;
        border-bottom: 1px solid var(--ink);
      }
      .ed-sec-label {
        display: flex; justify-content: space-between; align-items: baseline;
        margin-bottom: 40px;
        padding-bottom: 10px;
        border-bottom: 1.5px solid var(--ink);
      }
      .ed-sec-label h2 {
        font-family: "DM Serif Display", serif;
        font-size: 48px; font-weight: 400; margin: 0;
        color: var(--palm-deep);
      }
      .ed-sec-label h2 em { font-style: italic; color: var(--clay); }
      .ed-sec-label .nav-no {
        font-family: "Inter", sans-serif;
        font-size: 11px; letter-spacing: 0.25em;
        text-transform: uppercase; opacity: 0.6;
      }

      .ed-svc-list .ed-svc {
        display: grid;
        grid-template-columns: 80px 1fr 120px 180px 120px;
        gap: 32px;
        padding: 32px 0;
        border-bottom: 1px solid var(--ink);
        align-items: center;
        cursor: pointer;
        transition: background 0.15s;
      }
      .ed-svc-list .ed-svc:hover { background: var(--sand); }
      .ed-svc .n {
        font-family: "Inter", sans-serif;
        font-size: 14px; letter-spacing: 0.2em;
        color: var(--clay); font-weight: 500;
      }
      .ed-svc h3 {
        font-family: "DM Serif Display", serif;
        font-size: 32px; margin: 0;
        font-weight: 400;
        color: var(--palm-deep);
      }
      .ed-svc h3 em { font-style: italic; color: var(--clay); font-family: "Fraunces", serif; }
      .ed-svc .ic { width: 80px; height: 80px; color: var(--palm); }
      .ed-svc p {
        font-family: "Fraunces", serif;
        font-size: 15px; margin: 0; opacity: 0.8; line-height: 1.5;
      }
      .ed-svc .price {
        font-family: "Inter", sans-serif;
        font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
        text-align: right; opacity: 0.7;
      }
      .ed-svc .price strong { display: block; font-size: 18px; color: var(--palm-deep); letter-spacing: 0; text-transform: none; margin-top: 4px; font-family: "DM Serif Display", serif; font-weight: 400; }

      /* Feature — About Alicia */
      .ed-feature {
        padding: 100px 0;
        border-bottom: 1px solid var(--ink);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }
      .ed-feature .col-img {
        aspect-ratio: 4/5;
        background: var(--sand-2);
        position: relative;
        display: flex; align-items: center; justify-content: center;
        color: var(--palm);
      }
      .ed-feature .col-img::after {
        content: "PORTRAIT · ALICIA";
        position: absolute; bottom: 12px; left: 12px;
        font-family: "Inter", monospace, sans-serif;
        font-size: 10px; letter-spacing: 0.25em;
        opacity: 0.7;
      }
      .ed-feature .col-img::before {
        content: "";
        position: absolute; inset: 0;
        background:
          repeating-linear-gradient(45deg,
            transparent 0 20px,
            rgba(31,58,46,0.04) 20px 21px);
      }
      .ed-feature .col-img svg { width: 55%; position: relative; z-index: 1; }
      .ed-feature .col-text .kicker {
        font-family: "Inter", sans-serif;
        font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
        color: var(--clay); margin-bottom: 24px;
      }
      .ed-feature h2 {
        font-family: "DM Serif Display", serif;
        font-size: 72px;
        line-height: 1;
        margin: 0 0 32px;
        font-weight: 400;
        color: var(--palm-deep);
      }
      .ed-feature h2 em { font-style: italic; color: var(--clay); font-family: "Fraunces", serif; font-weight: 400; }
      .ed-feature .col-text p {
        font-family: "Fraunces", serif;
        font-size: 17px; line-height: 1.7; margin: 0 0 20px;
      }
      .ed-feature .col-text p:first-of-type::first-letter {
        font-family: "DM Serif Display", serif;
        font-size: 72px;
        float: left;
        line-height: 0.9;
        padding: 8px 12px 0 0;
        color: var(--clay);
      }
      .ed-feature .sig {
        font-family: "Caveat", cursive;
        font-size: 36px;
        color: var(--palm);
        margin-top: 24px;
      }

      /* Specimen strip */
      .ed-specimens {
        padding: 60px 0;
        border-bottom: 1px solid var(--ink);
      }
      .ed-spec-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
      }
      .ed-spec {
        text-align: center;
        padding: 16px 0;
      }
      .ed-spec .ic { width: 70px; height: 70px; margin: 0 auto 10px; color: var(--palm); }
      .ed-spec .sci {
        font-family: "DM Serif Display", serif;
        font-style: italic;
        font-size: 14px;
        color: var(--palm-deep);
      }
      .ed-spec .com {
        font-family: "Inter", sans-serif;
        font-size: 10px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        opacity: 0.65;
        margin-top: 2px;
      }

      /* How it works */
      .ed-how {
        padding: 80px 0;
        border-bottom: 1px solid var(--ink);
      }
      .ed-how-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border-top: 1px solid var(--ink);
      }
      .ed-how-step {
        padding: 40px 24px;
        border-right: 1px solid var(--ink);
      }
      .ed-how-step:last-child { border-right: none; }
      .ed-how-step .n {
        font-family: "DM Serif Display", serif;
        font-style: italic;
        font-size: 72px;
        color: var(--clay);
        line-height: 0.9;
      }
      .ed-how-step h4 {
        font-family: "DM Serif Display", serif;
        font-size: 24px; font-weight: 400; margin: 20px 0 8px;
        color: var(--palm-deep);
      }
      .ed-how-step p {
        font-family: "Fraunces", serif;
        font-size: 15px; margin: 0; opacity: 0.82;
      }

      /* FAQ */
      .ed-faq {
        padding: 80px 0;
        border-bottom: 1px solid var(--ink);
        display: grid; grid-template-columns: 1fr 1.8fr; gap: 56px;
      }
      .ed-faq h2 {
        font-family: "DM Serif Display", serif;
        font-size: 64px; font-weight: 400; margin: 0 0 24px;
        line-height: 0.95;
        color: var(--palm-deep);
      }
      .ed-faq h2 em { font-style: italic; color: var(--clay); font-family: "Fraunces", serif; }
      .ed-faq-list .row {
        display: grid; grid-template-columns: 60px 1fr;
        gap: 20px;
        padding: 24px 0;
        border-top: 1px solid var(--ink);
      }
      .ed-faq-list .row:last-child { border-bottom: 1px solid var(--ink); }
      .ed-faq-list .n {
        font-family: "DM Serif Display", serif;
        font-style: italic;
        color: var(--clay);
        font-size: 24px;
      }
      .ed-faq-list h5 {
        font-family: "DM Serif Display", serif;
        font-size: 22px; font-weight: 400; margin: 0 0 8px;
        color: var(--palm-deep);
      }
      .ed-faq-list p {
        font-family: "Fraunces", serif;
        font-size: 15px; margin: 0; opacity: 0.82; line-height: 1.6;
      }

      /* Closing */
      .ed-close {
        padding: 120px 0 80px;
        text-align: center;
        position: relative;
      }
      .ed-close .big {
        font-family: "DM Serif Display", serif;
        font-size: 140px;
        line-height: 0.95;
        color: var(--palm-deep);
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      .ed-close .big em { font-style: italic; color: var(--clay); font-family: "Fraunces", serif; font-weight: 300; }
      .ed-close .dek {
        font-family: "Fraunces", serif;
        font-size: 20px; max-width: 40ch; margin: 24px auto 40px;
      }
      .ed-close button {
        background: var(--palm-deep); color: var(--cream);
        border: none;
        padding: 18px 40px;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        cursor: pointer;
      }
      .ed-close .deco {
        position: absolute; color: var(--palm); opacity: 0.4;
      }
      .ed-close .deco.l { left: 0; top: 80px; width: 140px; }
      .ed-close .deco.r { right: 0; top: 140px; width: 140px; transform: scaleX(-1); }

      /* Colophon footer */
      .ed-colo {
        padding-top: 40px;
        border-top: 3px double var(--ink);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        font-family: "Inter", sans-serif;
        font-size: 12px;
      }
      .ed-colo h6 {
        font-family: "Inter", sans-serif;
        font-size: 10px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        margin: 0 0 10px;
        opacity: 0.6;
      }
      .ed-colo .loc { font-family: "DM Serif Display", serif; font-size: 18px; color: var(--palm-deep); }
    </style>

    <div class="ed-wrap">
      <!-- MASTHEAD -->
      <div class="ed-mast">
        <div class="left">Vol. 003 · Spring · No. 14</div>
        <div class="title">Alicia &amp; Plants</div>
        <div class="right">Daytona Beach · Barrier Island</div>
      </div>
      <div class="ed-submast">
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div>Est. 2023 — est. since the dracaena</div>
      </div>

      <!-- HERO -->
      <section class="ed-hero">
        <div>
          <div class="kicker">Outdoor plant care · one woman, many patios</div>
          <h1>The quiet art of <em>keeping things alive</em>, outdoors.</h1>
          <div class="dek">A one-woman <em>outdoor</em> plant care practice on Daytona's Barrier Island. Weekly visits, vacation coverage, rescues, repots, and small installs for patios, entryways, pool decks, and courtyards. Insured, witty, and genuinely into this.</div>
          <a href="#" class="ed-cta-inline">Book a free first visit</a>
          <div class="byline" style="margin-top: 32px;">Kept by <em>Alicia</em> · since 2023</div>
        </div>
        <div class="ed-hero-right ill">
          <div class="main-ill">${I.palm()}</div>
          <div class="caption">Cocos nucifera · no. 01</div>
        </div>
      </section>

      <!-- EVIDENCE -->
      <section class="ed-evidence">
        <div class="ed-ev-left">
          <div class="kicker" style="font-family:'Inter',sans-serif;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:var(--clay);margin-bottom:20px;">The visit log · photographed proof</div>
          <h2 style="font-family:'DM Serif Display',serif;font-size:64px;line-height:0.98;margin:0 0 24px;font-weight:400;color:var(--palm-deep);">What you <em style="font-style:italic;color:var(--clay);font-family:'Fraunces',serif;">actually</em> want<br/>while you're away.</h2>
          <p style="font-family:'Fraunces',serif;font-size:18px;line-height:1.6;max-width:50ch;margin:0 0 16px;">It's rarely the watering itself. It's the not-knowing. So every single visit, I photograph each plant, note what was done, and send you the full log before I leave.</p>
          <p style="font-family:'Fraunces',serif;font-size:18px;line-height:1.6;max-width:50ch;margin:0;font-style:italic;">You see the exact care your plants got — on the day it happened, in your own inbox.</p>
        </div>
        <div class="ed-ev-right">
          <div class="ed-ev-photo">
            <div class="ts">TUE · 09:42</div>
            <div class="slot ill">${I.sawPalmetto()}</div>
            <div class="cap">Serenoa repens · dune stand, checked for storm damage</div>
          </div>
          <div class="ed-ev-photo">
            <div class="ts">TUE · 09:58</div>
            <div class="slot ill">${I.beachSunflower()}</div>
            <div class="cap">Helianthus debilis · deadheaded along the walkway</div>
          </div>
          <div class="ed-ev-photo">
            <div class="ts">TUE · 10:11</div>
            <div class="slot ill">${I.firebush()}</div>
            <div class="cap">Hamelia patens · in full bloom — butterflies noted</div>
          </div>
        </div>
      </section>

      <!-- PULL QUOTE -->
      <div class="ed-pullquote">
        <div class="side">Field note · 04.02.26</div>
        <blockquote>Plants don't need much. They just need someone who shows up on Tuesday — rain, sun, or salt wind.</blockquote>
        <div class="side right">— Alicia, to a peace lily</div>
      </div>

      <!-- SERVICES -->
      <section class="ed-services" id="services">
        <div class="ed-sec-label">
          <h2>Services &amp; <em>rhythms</em></h2>
          <div class="nav-no">§ 01 / 04</div>
        </div>

        <div class="ed-svc-list">
          <div class="ed-svc">
            <div class="n">01 —</div>
            <div class="ic ill">${I.wateringCan()}</div>
            <h3>Weekly &amp; <em>biweekly care</em></h3>
            <p>A standing appointment with your outdoor plants. Watering, pruning, deadheading, drainage check, and a quiet moment with each pot.</p>
            <div class="price">From<strong>$45 / visit</strong></div>
          </div>
          <div class="ed-svc">
            <div class="n">02 —</div>
            <div class="ic ill">${I.umbrella()}</div>
            <h3>Vacation <em>plant sitting</em></h3>
            <p>Scheduled check-ins on your patio and entryway while you're away. Photo updates after every visit. Mail run, too, if that helps.</p>
            <div class="price">From<strong>$35 / visit</strong></div>
          </div>
          <div class="ed-svc">
            <div class="n">03 —</div>
            <div class="ic ill">${I.sprout()}</div>
            <h3>Rescue &amp; <em>revival</em></h3>
            <p>The sun-scorched, wind-beaten, mysteriously-bug-infested. I diagnose, treat, and rebuild a care plan so it doesn't happen again.</p>
            <div class="price">Estimated<strong>per plant</strong></div>
          </div>
          <div class="ed-svc">
            <div class="n">04 —</div>
            <div class="ic ill">${I.pot()}</div>
            <h3>Repotting &amp; <em>refresh</em></h3>
            <p>Root check, new soil blend, correctly-sized drainage. Pots sourced to match your home — not mine.</p>
            <div class="price">Estimated<strong>per project</strong></div>
          </div>
          <div class="ed-svc">
            <div class="n">05 —</div>
            <div class="ic ill">${I.palm()}</div>
            <h3>Install &amp; <em>styling</em></h3>
            <p>Empty patios and vacation-rental turnovers. I source plants that fit the light, the salt exposure, and the likelihood of survival.</p>
            <div class="price">Estimated<strong>per project</strong></div>
          </div>
          <div class="ed-svc">
            <div class="n">06 —</div>
            <div class="ic ill">${I.hibiscus()}</div>
            <h3>Coastal <em>garden refresh</em></h3>
            <p>Salt-air survivors: hibiscus, sea grape, bougainvillea, native grasses. Planted right so they last.</p>
            <div class="price">Estimated<strong>per project</strong></div>
          </div>
        </div>
      </section>

      <!-- FEATURE -->
      <section class="ed-feature" id="about">
        <div class="col-img ill">${I.seagrape()}</div>
        <div class="col-text">
          <div class="kicker">The keeper · a brief profile</div>
          <h2>Meet <em>Alicia.</em></h2>
          <p>Born and raised on the Barrier Island, Alicia keeps a small, intentional <em>outdoor</em> plant care practice between the bridge and the ocean. She works outside, with outdoor plants — patios, entryways, courtyards, pool decks, and coastal gardens. She doesn't run a fleet. She doesn't sell subscriptions you can't cancel. She shows up on the day she said she would, usually with coffee, definitely with a jug of filtered water, and always with a strong take on your drainage situation.</p>
          <p>The business began, as these things do, with a neighbor's request for vacation watering and a snake plant that had quietly given up. It has grown — like most good things — slowly, by word of mouth.</p>
          <div class="sig">— Alicia</div>
        </div>
      </section>

      <!-- SPECIMENS -->
      <section class="ed-specimens">
        <div class="ed-sec-label">
          <h2>Island <em>specimens</em></h2>
          <div class="nav-no">§ 02 / 04</div>
        </div>
        <div class="ed-spec-grid">
          <div class="ed-spec"><div class="ic ill">${I.palm()}</div><div class="sci">Sabal palmetto</div><div class="com">Cabbage palm</div></div>
          <div class="ed-spec"><div class="ic ill">${I.seagrape()}</div><div class="sci">Coccoloba uvifera</div><div class="com">Sea grape</div></div>
          <div class="ed-spec"><div class="ic ill">${I.hibiscus()}</div><div class="sci">Hibiscus rosa-sinensis</div><div class="com">Hibiscus</div></div>
          <div class="ed-spec"><div class="ic ill">${I.sawPalmetto()}</div><div class="sci">Serenoa repens</div><div class="com">Saw palmetto</div></div>
          <div class="ed-spec"><div class="ic ill">${I.beachSunflower()}</div><div class="sci">Helianthus debilis</div><div class="com">Beach sunflower</div></div>
          <div class="ed-spec"><div class="ic ill">${I.firebush()}</div><div class="sci">Hamelia patens</div><div class="com">Firebush</div></div>
          <div class="ed-spec"><div class="ic ill">${I.muhlyGrass()}</div><div class="sci">Muhlenbergia capillaris</div><div class="com">Pink muhly grass</div></div>
          <div class="ed-spec"><div class="ic ill">${I.plumeria()}</div><div class="sci">Plumeria rubra</div><div class="com">Frangipani</div></div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="ed-how" id="how">
        <div class="ed-sec-label">
          <h2>The <em>process</em></h2>
          <div class="nav-no">§ 03 / 04</div>
        </div>
        <div class="ed-how-grid">
          <div class="ed-how-step">
            <div class="n">i.</div>
            <h4>A text</h4>
            <p>Start with a text or email. Rough plant count, your neighborhood, and a photo if you want.</p>
          </div>
          <div class="ed-how-step">
            <div class="n">ii.</div>
            <h4>First visit</h4>
            <p>Free, on me. I meet your plants, take notes, and write up a plan the next day.</p>
          </div>
          <div class="ed-how-step">
            <div class="n">iii.</div>
            <h4>A rhythm</h4>
            <p>Weekly, biweekly, vacation-only, or a one-off project. No contracts, cancel anytime.</p>
          </div>
          <div class="ed-how-step">
            <div class="n">iv.</div>
            <h4>The care</h4>
            <p>Same weekday each visit. A short photo update after. Invoice at the end of the month.</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="ed-faq" id="faq">
        <div>
          <h2>Asked <em>and answered</em></h2>
          <div class="ill" style="width: 160px; color: var(--palm); margin-top: 20px;">${I.fern()}</div>
        </div>
        <div class="ed-faq-list">
          <div class="row">
            <div class="n">Q.01</div>
            <div>
              <h5>Where do you service?</h5>
              <p>Barrier Island, Daytona Beach Shores, Wilbur-by-the-Sea, Ormond Beach. A few exceptions over the bridge.</p>
            </div>
          </div>
          <div class="row">
            <div class="n">Q.02</div>
            <div>
              <h5>Indoor plants too?</h5>
              <p>No — outdoor only. Patios, entryways, courtyards, pool decks, porches, small garden beds.</p>
            </div>
          </div>
          <div class="row">
            <div class="n">Q.03</div>
            <div>
              <h5>What happens if a plant dies?</h5>
              <p>Outdoor plants live with storms, salt, and pests that aren't always preventable. I don't guarantee replacements — but I'll always tell you honestly what happened and what to try next.</p>
            </div>
          </div>
          <div class="row">
            <div class="n">Q.04</div>
            <div>
              <h5>Keys, codes, access?</h5>
              <p>Handled discreetly and securely. Fully secured. References on request.</p>
            </div>
          </div>
          <div class="row">
            <div class="n">Q.05</div>
            <div>
              <h5>Do you source plants too?</h5>
              <p>Yes. I'll pick the plants, pick the pots, deliver, install, and clean up the soil confetti.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CLOSE -->
      <section class="ed-close">
        <div class="deco ill l">${I.palm()}</div>
        <div class="deco ill r">${I.palm()}</div>
        <div class="big"><em>Let's</em><br/>begin.</div>
        <p class="dek">A first visit costs nothing. I'll come meet your plants and send a simple, honest plan.</p>
        <button>Book a free visit</button>
      </section>

      <!-- COLOPHON -->
      <footer class="ed-colo">
        <div>
          <h6>Studio</h6>
          <div class="loc">Alicia &amp; Plants</div>
          <div style="opacity: 0.7; margin-top: 4px;">Barrier Island · Daytona Beach, FL</div>
        </div>
        <div>
          <h6>Contact</h6>
          <div>hello@aliciaandplants.com</div>
          <div style="opacity: 0.7;">(386) 555-0143</div>
        </div>
        <div>
          <h6>Hours</h6>
          <div>Tues — Sat</div>
          <div style="opacity: 0.7;">Sundays for the garden</div>
        </div>
        <div>
          <h6>Colophon</h6>
          <div style="opacity: 0.7;">Set in DM Serif Display<br/>&amp; Fraunces. Watered on Tuesdays.</div>
        </div>
      </footer>
    </div>
  `;
})();
