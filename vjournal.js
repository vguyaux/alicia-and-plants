// Variation 3: Field journal
// Handwritten notes, annotated sketches, graph paper, botanical-notebook energy

(function () {
  const root = document.getElementById('v-journal');
  const I = window.Illustrations;

  root.innerHTML = `
    <style>
      #v-journal {
        font-family: "Fraunces", serif;
        color: var(--ink);
        background:
          linear-gradient(var(--cream), var(--cream)),
          repeating-linear-gradient(0deg,
            rgba(38,86,65,0.05) 0 1px, transparent 1px 24px),
          repeating-linear-gradient(90deg,
            rgba(38,86,65,0.05) 0 1px, transparent 1px 24px);
        background-blend-mode: normal, multiply, multiply;
        min-height: 100vh;
        position: relative;
      }
      #v-journal::before {
        content: ""; position: fixed; inset: 0;
        background:
          repeating-linear-gradient(0deg,
            transparent 0 23px, rgba(31,58,46,0.06) 23px 24px),
          repeating-linear-gradient(90deg,
            transparent 0 23px, rgba(31,58,46,0.06) 23px 24px);
        pointer-events: none; z-index: 0;
      }
      .fj-wrap {
        max-width: 1180px; margin: 0 auto; padding: 32px 56px 80px;
        position: relative; z-index: 1;
      }

      /* Nav */
      .fj-nav {
        display: flex; justify-content: space-between; align-items: center;
        padding-bottom: 16px;
        border-bottom: 1.5px solid var(--ink);
      }
      .fj-logo {
        font-family: "Caveat", cursive;
        font-size: 32px; color: var(--palm-deep);
        display: flex; align-items: center; gap: 10px;
      }
      .fj-logo span { width: 32px; height: 32px; color: var(--palm); }
      .fj-nav ul {
        list-style: none; margin: 0; padding: 0;
        display: flex; gap: 24px;
        font-family: "Caveat", cursive; font-size: 22px;
      }
      .fj-nav ul a { text-decoration: none; color: var(--ink); border-bottom: 2px solid transparent; padding-bottom: 2px; }
      .fj-nav ul a:hover { border-color: var(--clay); }
      .fj-nav .cta {
        font-family: "Caveat", cursive; font-size: 22px;
        background: var(--palm-deep); color: var(--cream);
        padding: 8px 18px; border: none;
        cursor: pointer;
        transform: rotate(-1deg);
      }

      /* Header / date */
      .fj-date {
        display: flex; justify-content: space-between; align-items: baseline;
        margin: 20px 0;
        font-family: "Caveat", cursive; font-size: 22px;
        color: var(--clay);
      }
      .fj-date .pg { opacity: 0.6; }

      /* Hero */
      .fj-hero {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 48px;
        padding: 20px 0 48px;
        position: relative;
      }
      .fj-hero h1 {
        font-family: "DM Serif Display", serif;
        font-size: 96px;
        line-height: 0.96;
        margin: 0 0 24px;
        font-weight: 400;
        color: var(--palm-deep);
      }
      .fj-hero h1 .annot {
        font-family: "Caveat", cursive;
        font-size: 26px;
        color: var(--clay);
        font-weight: 400;
        display: inline-block;
        transform: rotate(-3deg);
        vertical-align: super;
        margin-left: -4px;
      }
      .fj-hero h1 .underline {
        position: relative;
        display: inline-block;
      }
      .fj-hero h1 .underline::after {
        content: ""; position: absolute; left: -4px; right: -4px; bottom: 2px;
        height: 10px; background: var(--sun); opacity: 0.45; z-index: -1;
      }
      .fj-hero p.lead {
        font-family: "Fraunces", serif;
        font-size: 19px; line-height: 1.6;
        max-width: 48ch; margin: 0 0 20px;
      }
      .fj-hero .note {
        font-family: "Caveat", cursive;
        font-size: 22px; color: var(--clay);
        margin: 12px 0 28px;
        display: flex; align-items: flex-start; gap: 10px;
      }
      .fj-hero .note::before { content: "✻"; color: var(--sun); font-size: 18px; margin-top: 4px; }

      .fj-hero .cta-row { display: flex; align-items: center; gap: 20px; }
      .fj-hero .book {
        background: var(--palm-deep); color: var(--cream);
        border: none; padding: 14px 24px;
        font-family: "Caveat", cursive;
        font-size: 22px;
        cursor: pointer;
        transform: rotate(-0.8deg);
        box-shadow: 4px 4px 0 var(--clay);
      }
      .fj-hero .circled {
        border: 1.5px solid var(--ink);
        border-radius: 40% 60% 55% 45% / 45% 55% 45% 55%;
        padding: 6px 14px;
        font-family: "Caveat", cursive;
        font-size: 20px;
        transform: rotate(2deg);
      }

      .fj-hero-right {
        position: relative;
        display: flex; align-items: center; justify-content: center;
        min-height: 460px;
      }
      .fj-hero-right .sketch { width: 380px; color: var(--palm); }
      .fj-hero-right .label {
        position: absolute;
        font-family: "Caveat", cursive;
        color: var(--clay);
        font-size: 20px;
        display: flex; align-items: center; gap: 6px;
      }
      .fj-hero-right .label .dash { display: inline-block; width: 40px; border-bottom: 1.5px dashed var(--clay); }
      .fj-hero-right .l1 { top: 80px; left: 10px; }
      .fj-hero-right .l2 { top: 200px; right: 0; }
      .fj-hero-right .l3 { bottom: 60px; left: 20px; }
      .fj-hero-right .pin {
        position: absolute;
        width: 12px; height: 12px;
        border-radius: 50%;
        background: var(--clay);
        border: 2px solid var(--cream);
        box-shadow: 0 0 0 1px var(--ink);
      }
      .fj-hero-right .p1 { top: 110px; left: 140px; }
      .fj-hero-right .p2 { top: 220px; right: 120px; }
      .fj-hero-right .p3 { bottom: 90px; left: 180px; }

      /* Evidence / photo-log callout */
      .fj-evidence {
        margin-top: 40px;
        background: var(--palm-deep);
        color: var(--cream);
        padding: 48px;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 40px;
        align-items: center;
      }
      .fj-evidence::before {
        content: ""; position: absolute;
        inset: 8px; border: 1px dashed var(--cream); opacity: 0.4;
        pointer-events: none;
      }
      .fj-evidence .tag {
        position: absolute; top: -14px; left: 40px;
        background: var(--sun); color: var(--palm-deep);
        font-family: "Caveat", cursive; font-size: 22px;
        padding: 4px 14px;
        transform: rotate(-2deg);
      }
      .fj-evidence h3 {
        font-family: "DM Serif Display", serif;
        font-size: 42px; font-weight: 400; margin: 0 0 16px;
        line-height: 1;
      }
      .fj-evidence h3 em { font-style: italic; color: var(--sun); }
      .fj-evidence p {
        font-family: "Fraunces", serif;
        font-size: 17px; line-height: 1.6; margin: 0 0 12px;
        opacity: 0.95;
      }
      .fj-evidence .caveat {
        font-family: "Caveat", cursive;
        font-size: 22px; color: var(--sun);
        margin-top: 8px;
      }
      .fj-photo-strip {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
      .fj-photo {
        background: var(--cream);
        padding: 8px 8px 24px;
        transform: rotate(var(--r, -1deg));
        box-shadow: 3px 3px 0 rgba(0,0,0,0.25);
        position: relative;
      }
      .fj-photo .slot {
        aspect-ratio: 1;
        background:
          repeating-linear-gradient(45deg, var(--sand-2) 0 8px, var(--sand-3) 8px 16px);
        display: flex; align-items: center; justify-content: center;
        color: var(--palm);
      }
      .fj-photo .slot svg { width: 60%; }
      .fj-photo .cap {
        font-family: "Caveat", cursive;
        font-size: 16px; color: var(--palm-deep);
        text-align: center; margin-top: 6px;
      }
      .fj-photo .ts {
        position: absolute; top: 4px; right: 8px;
        font-family: "Inter", sans-serif;
        font-size: 9px; letter-spacing: 0.1em;
        color: var(--palm); opacity: 0.7;
      }

      /* Services as notebook page */
      .fj-services { margin-top: 80px; position: relative; }
      .fj-sec-head {
        display: flex; justify-content: space-between; align-items: flex-end;
        padding-bottom: 12px;
        border-bottom: 1.5px solid var(--ink);
        margin-bottom: 32px;
      }
      .fj-sec-head h2 {
        font-family: "DM Serif Display", serif;
        font-size: 56px; margin: 0; font-weight: 400;
        line-height: 1; color: var(--palm-deep);
      }
      .fj-sec-head h2 em { font-style: italic; color: var(--clay); }
      .fj-sec-head .aside {
        font-family: "Caveat", cursive;
        font-size: 20px; color: var(--clay);
        max-width: 32ch; text-align: right;
      }

      .fj-svc-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 28px;
      }
      .fj-svc {
        background: var(--cream);
        border: 1.5px solid var(--ink);
        padding: 24px;
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 20px;
        align-items: start;
        position: relative;
      }
      .fj-svc::after {
        content: ""; position: absolute;
        top: 4px; left: 4px; right: -4px; bottom: -4px;
        border: 1.5px solid var(--ink);
        z-index: -1;
      }
      .fj-svc .ic {
        width: 100%; color: var(--palm);
        border-right: 1px dashed var(--ink);
        padding-right: 14px;
      }
      .fj-svc h3 {
        font-family: "DM Serif Display", serif;
        font-size: 26px; font-weight: 400; margin: 0 0 6px;
        color: var(--palm-deep);
      }
      .fj-svc .sub {
        font-family: "Caveat", cursive;
        font-size: 18px; color: var(--clay);
        margin-bottom: 10px;
      }
      .fj-svc p {
        font-family: "Fraunces", serif;
        font-size: 15px; line-height: 1.55; margin: 0 0 12px;
      }
      .fj-svc .meta {
        display: flex; justify-content: space-between; align-items: center;
        border-top: 1px dashed var(--ink);
        padding-top: 10px;
      }
      .fj-svc .meta .price {
        font-family: "DM Serif Display", serif;
        font-size: 18px; color: var(--palm-deep); font-style: italic;
      }
      .fj-svc .meta .arrow {
        font-family: "Caveat", cursive;
        font-size: 18px; color: var(--clay);
      }

      /* Map / area */
      .fj-area { margin-top: 80px; }
      .fj-map {
        background: var(--cream);
        border: 1.5px solid var(--ink);
        padding: 40px;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 40px;
        align-items: center;
        position: relative;
      }
      .fj-map h3 {
        font-family: "DM Serif Display", serif;
        font-size: 40px; margin: 0 0 16px; font-weight: 400;
        color: var(--palm-deep);
      }
      .fj-map h3 em { font-style: italic; color: var(--clay); }
      .fj-map ul {
        list-style: none; padding: 0; margin: 0;
        font-family: "Caveat", cursive;
        font-size: 22px; color: var(--ink);
      }
      .fj-map ul li { padding: 4px 0; display: flex; align-items: center; gap: 10px; }
      .fj-map ul li::before { content: "○"; color: var(--clay); }
      .fj-map .mini {
        font-family: "Fraunces", serif;
        font-size: 14px; opacity: 0.8; margin-top: 14px;
      }
      .fj-map .island {
        aspect-ratio: 3/4;
        background:
          repeating-linear-gradient(135deg, transparent 0 10px, rgba(106,159,176,0.15) 10px 11px),
          var(--sky);
        position: relative;
        border: 1.5px solid var(--ink);
      }
      .fj-map .island::before {
        content: ""; position: absolute; top: 10%; left: 30%; width: 25%; height: 80%;
        background: var(--sand-2);
        border: 1.5px solid var(--ink);
        transform: skewX(-8deg);
      }
      .fj-map .island .pin {
        position: absolute;
        width: 10px; height: 10px; border-radius: 50%;
        background: var(--clay);
        border: 2px solid var(--cream);
        box-shadow: 0 0 0 1px var(--ink);
      }
      .fj-map .island .pin span {
        position: absolute;
        left: 14px; top: -4px;
        font-family: "Caveat", cursive; font-size: 16px;
        white-space: nowrap;
      }
      .fj-map .island .p1 { top: 20%; left: 42%; }
      .fj-map .island .p2 { top: 38%; left: 40%; }
      .fj-map .island .p3 { top: 58%; left: 38%; }
      .fj-map .island .p4 { top: 78%; left: 36%; }
      .fj-map .island .compass {
        position: absolute; top: 16px; right: 16px;
        font-family: "DM Serif Display", serif;
        font-size: 16px; color: var(--ink);
        border: 1px solid var(--ink);
        border-radius: 50%;
        width: 40px; height: 40px;
        display: flex; align-items: center; justify-content: center;
      }
      .fj-map .island .ocean-label {
        position: absolute; top: 50%; left: 10%;
        font-family: "DM Serif Display", serif;
        font-style: italic; font-size: 18px;
        color: var(--palm-deep); opacity: 0.7;
        letter-spacing: 0.2em;
        transform: rotate(-90deg);
      }

      /* About */
      .fj-about {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 48px;
        align-items: center;
      }
      .fj-about .photo {
        background: var(--cream);
        padding: 16px 16px 48px;
        transform: rotate(-2.5deg);
        box-shadow: 6px 6px 0 rgba(31,58,46,0.15);
        position: relative;
      }
      .fj-about .photo .tape {
        position: absolute; top: -12px; left: 50%;
        width: 90px; height: 26px;
        background: rgba(233, 182, 74, 0.6);
        border-left: 1px dashed rgba(31,58,46,0.2);
        border-right: 1px dashed rgba(31,58,46,0.2);
        transform: translateX(-50%) rotate(-3deg);
      }
      .fj-about .photo .slot {
        aspect-ratio: 4/5;
        background:
          repeating-linear-gradient(45deg, var(--sand-2) 0 8px, var(--sand-3) 8px 16px);
        display: flex; align-items: center; justify-content: center;
        color: var(--palm);
      }
      .fj-about .photo .slot svg { width: 60%; }
      .fj-about .photo .cap {
        font-family: "Caveat", cursive;
        font-size: 20px; color: var(--palm-deep);
        text-align: center; margin-top: 10px;
      }
      .fj-about h2 {
        font-family: "DM Serif Display", serif;
        font-size: 56px; line-height: 1; margin: 0 0 20px;
        font-weight: 400; color: var(--palm-deep);
      }
      .fj-about h2 em { font-style: italic; color: var(--clay); }
      .fj-about p {
        font-family: "Fraunces", serif;
        font-size: 17px; line-height: 1.7; margin: 0 0 16px;
      }
      .fj-about .sig {
        font-family: "Caveat", cursive; font-size: 38px;
        color: var(--clay); margin-top: 18px;
      }

      /* How it works — checklist style */
      .fj-how { margin-top: 80px; }
      .fj-checklist {
        background: var(--cream);
        border: 1.5px solid var(--ink);
        padding: 36px 40px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px 48px;
      }
      .fj-check {
        display: grid;
        grid-template-columns: 48px 1fr;
        gap: 14px;
        align-items: start;
      }
      .fj-check .box {
        width: 36px; height: 36px;
        border: 1.5px solid var(--ink);
        display: flex; align-items: center; justify-content: center;
        font-family: "Caveat", cursive;
        font-size: 28px; color: var(--clay);
      }
      .fj-check h4 {
        font-family: "DM Serif Display", serif;
        font-size: 22px; margin: 0 0 4px; font-weight: 400;
        color: var(--palm-deep);
      }
      .fj-check p {
        font-family: "Fraunces", serif;
        font-size: 15px; margin: 0; opacity: 0.85;
      }
      .fj-check .annot {
        font-family: "Caveat", cursive;
        font-size: 18px; color: var(--clay);
        margin-top: 4px;
      }

      /* FAQ */
      .fj-faq { margin-top: 80px; }
      .fj-faq-grid {
        display: grid; grid-template-columns: 1fr 1.6fr; gap: 56px;
      }
      .fj-faq-grid h2 {
        font-family: "DM Serif Display", serif;
        font-size: 56px; line-height: 1; margin: 0;
        font-weight: 400; color: var(--palm-deep);
      }
      .fj-faq-grid h2 em { font-style: italic; color: var(--clay); }
      .fj-faq-list .q {
        border-bottom: 1.5px dashed var(--ink);
        padding: 18px 0;
      }
      .fj-faq-list .q:first-child { border-top: 1.5px dashed var(--ink); }
      .fj-faq-list h5 {
        font-family: "DM Serif Display", serif;
        font-size: 22px; font-weight: 400; margin: 0 0 6px;
        color: var(--palm-deep);
      }
      .fj-faq-list h5 span {
        font-family: "Caveat", cursive;
        color: var(--clay); margin-right: 10px;
      }
      .fj-faq-list p {
        font-family: "Fraunces", serif;
        font-size: 15px; margin: 0; opacity: 0.82; line-height: 1.55;
      }

      /* CTA */
      .fj-final {
        margin-top: 80px;
        padding: 70px 56px;
        background: var(--sun);
        color: var(--palm-deep);
        position: relative;
        border: 1.5px solid var(--ink);
        text-align: center;
      }
      .fj-final::after {
        content: ""; position: absolute;
        inset: -10px; border: 1.5px dashed var(--ink); pointer-events: none;
      }
      .fj-final h2 {
        font-family: "DM Serif Display", serif;
        font-size: 80px; line-height: 1; margin: 0 0 16px;
        font-weight: 400;
      }
      .fj-final h2 em { font-style: italic; color: var(--clay); }
      .fj-final p { font-family: "Fraunces", serif; font-size: 18px; max-width: 46ch; margin: 0 auto 28px; }
      .fj-final .book-btn {
        background: var(--palm-deep); color: var(--cream);
        border: none; padding: 16px 32px;
        font-family: "Caveat", cursive;
        font-size: 26px;
        cursor: pointer;
        transform: rotate(-1deg);
        box-shadow: 5px 5px 0 var(--clay);
      }

      /* Footer */
      .fj-foot {
        margin-top: 60px; padding-top: 24px;
        border-top: 1.5px solid var(--ink);
        display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px;
        font-family: "Caveat", cursive;
        font-size: 20px; color: var(--palm-deep);
      }
      .fj-foot .small { font-family: "Inter", sans-serif; font-size: 11px; letter-spacing: 0.2em; opacity: 0.6; text-transform: uppercase; }
    </style>

    <div class="fj-wrap">
      <!-- NAV -->
      <nav class="fj-nav">
        <div class="fj-logo">
          <span>${I.sprout()}</span>
          Alicia &amp; Plants
        </div>
        <ul>
          <li><a href="#services">services</a></li>
          <li><a href="#evidence">photo log</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#how">how</a></li>
          <li><a href="#faq">faq</a></li>
        </ul>
        <button class="cta">book a free visit →</button>
      </nav>

      <div class="fj-date">
        <span>Field journal · Barrier Island, FL</span>
        <span class="pg">pg. 01</span>
      </div>

      <!-- HERO -->
      <section class="fj-hero">
        <div>
          <h1>
            A garden <span class="annot">(patio, porch, pool deck)</span><br/>
            deserves <span class="underline">someone</span><br/>
            who <em style="font-family:'Fraunces',serif;color:var(--clay);font-weight:400;">shows up.</em>
          </h1>
          <p class="lead">I'm Alicia — a one-woman boutique <em>outdoor</em> plant care service on Daytona Beach's Barrier Island. Weekly visits, vacation coverage, rescues, repots, and small installs for patios, entryways, pool decks, and coastal gardens.</p>
          <div class="note">every visit ends with photo proof — so you always know what happened while you were out.</div>
          <div class="cta-row">
            <button class="book">book a free first visit →</button>
            <span class="circled">no contracts</span>
          </div>
        </div>
        <div class="fj-hero-right ill">
          <div class="sketch">${I.sawPalmetto()}</div>
          <span class="label l1"><span class="dash"></span> fan frond</span>
          <span class="label l2">dune native <span class="dash"></span></span>
          <span class="label l3"><span class="dash"></span> support stake</span>
          <span class="pin p1"></span>
          <span class="pin p2"></span>
          <span class="pin p3"></span>
        </div>
      </section>

      <!-- EVIDENCE / PHOTO LOG -->
      <section class="fj-evidence" id="evidence">
        <span class="tag">what you actually want while you're out ↓</span>
        <div>
          <h3>Evidence, <em>not promises.</em></h3>
          <p>The thing people ask for most isn't watering — it's <em>knowing.</em> Knowing what got done, what looked off, what's new.</p>
          <p>So every single visit, I photograph each plant, note what I did, and text you the log before I leave. You see the exact care your plants got, on the day it happened.</p>
          <div class="caveat">— visit logs, every time. no exceptions. ✻</div>
        </div>
        <div class="fj-photo-strip">
          <div class="fj-photo" style="--r: -2deg;">
            <div class="ts">TUE · 09:42</div>
            <div class="slot ill">${I.sawPalmetto()}</div>
            <div class="cap">saw palmetto — dune stand checked</div>
          </div>
          <div class="fj-photo" style="--r: 1.5deg;">
            <div class="ts">TUE · 09:58</div>
            <div class="slot ill">${I.beachSunflower()}</div>
            <div class="cap">beach sunflower — deadheaded</div>
          </div>
          <div class="fj-photo" style="--r: -1deg;">
            <div class="ts">TUE · 10:11</div>
            <div class="slot ill">${I.firebush()}</div>
            <div class="cap">firebush — butterflies!</div>
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section class="fj-services" id="services">
        <div class="fj-sec-head">
          <h2>Everything <em>I do</em></h2>
          <div class="aside">*pick one, mix a few — or hand me the whole leafy situation.</div>
        </div>
        <div class="fj-svc-grid">
          <div class="fj-svc">
            <div class="ic">${I.wateringCan()}</div>
            <div>
              <h3>Weekly &amp; biweekly care</h3>
              <div class="sub">same day, same time, every week — outdoors.</div>
              <p>Watering, deadheading, pruning, drainage check, pest scan. Photo log sent after every visit — so you always see exactly what happened.</p>
              <div class="meta"><span class="price">from $45/visit</span><span class="arrow">→</span></div>
            </div>
          </div>
          <div class="fj-svc">
            <div class="ic">${I.umbrella()}</div>
            <div>
              <h3>Vacation plant sitting</h3>
              <div class="sub">be away without the guilt.</div>
              <p>Scheduled check-ins while you're out. Every plant photographed, every visit logged. Mail and light plant-adjacent house stuff if helpful.</p>
              <div class="meta"><span class="price">from $35/visit</span><span class="arrow">→</span></div>
            </div>
          </div>
          <div class="fj-svc">
            <div class="ic">${I.sprout()}</div>
            <div>
              <h3>Plant rescue &amp; revival</h3>
              <div class="sub">sun-scorched? wind-beaten? whitefly? send it.</div>
              <p>Diagnosis, triage, and a slow nurse-back. Honest prognosis on what's saveable — no false promises. New care plan so it doesn't happen again.</p>
              <div class="meta"><span class="price">est. per plant</span><span class="arrow">→</span></div>
            </div>
          </div>
          <div class="fj-svc">
            <div class="ic">${I.pot()}</div>
            <div>
              <h3>Repotting &amp; refresh</h3>
              <div class="sub">new soil, correct drainage, fresh pot.</div>
              <p>Root check, right-sized pot, soil blend matched to the plant. Pots sourced to fit your home — not mine.</p>
              <div class="meta"><span class="price">est. per project</span><span class="arrow">→</span></div>
            </div>
          </div>
          <div class="fj-svc">
            <div class="ic">${I.palm()}</div>
            <div>
              <h3>Install &amp; styling</h3>
              <div class="sub">empty patios, fresh rentals.</div>
              <p>I source plants that fit your light, your salt exposure, and your survival odds. Delivered, placed, and cleaned up after.</p>
              <div class="meta"><span class="price">est. per project</span><span class="arrow">→</span></div>
            </div>
          </div>
          <div class="fj-svc">
            <div class="ic">${I.hibiscus()}</div>
            <div>
              <h3>Coastal garden refresh</h3>
              <div class="sub">salt-air survivors only.</div>
              <p>Hibiscus, sea grape, bougainvillea, native grasses. Planted right for wind, sun, and our particular island weather.</p>
              <div class="meta"><span class="price">est. per project</span><span class="arrow">→</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- AREA -->
      <section class="fj-area">
        <div class="fj-map">
          <div>
            <h3>Where I <em>wander.</em></h3>
            <ul>
              <li>Daytona Beach Shores</li>
              <li>Wilbur-by-the-Sea</li>
              <li>Ormond Beach</li>
              <li>Ponce Inlet</li>
              <li>select spots over the bridge</li>
            </ul>
            <p class="mini">Not sure if you're in range? Text me the street — I probably already know the nearest live oak.</p>
          </div>
          <div class="island">
            <div class="compass">N</div>
            <div class="ocean-label">ATLANTIC</div>
            <div class="pin p1"><span>Ormond</span></div>
            <div class="pin p2"><span>Daytona Shores</span></div>
            <div class="pin p3"><span>Wilbur</span></div>
            <div class="pin p4"><span>Ponce Inlet</span></div>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="fj-about" id="about">
        <div class="photo">
          <span class="tape"></span>
          <div class="slot ill">${I.seagrape()}</div>
          <div class="cap">me &amp; a very opinionated sea grape</div>
        </div>
        <div>
          <h2>Meet <em>Alicia.</em></h2>
          <p>I grew up on this barrier island, mostly outside. I've been gardening since I could walk and barefoot since before that. This little business is <em>outdoor only</em> on purpose: I care for plants where they belong — in the sun, wind, and salt air.</p>
          <p>It's still just me. No subcontractors, no van fleet, no upsell scripts. I show up on the day I said I would, use your garden hose, and have strong opinions about drainage.</p>
          <div class="sig">— Alicia</div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="fj-how" id="how">
        <div class="fj-sec-head">
          <h2>How it <em>works.</em></h2>
          <div class="aside">low-key. text-based. no sales funnels.</div>
        </div>
        <div class="fj-checklist">
          <div class="fj-check">
            <div class="box">✓</div>
            <div>
              <h4>Text me</h4>
              <p>Rough plant count, your neighborhood, a photo if you want.</p>
              <div class="annot">(386) 555-0143</div>
            </div>
          </div>
          <div class="fj-check">
            <div class="box">✓</div>
            <div>
              <h4>Free first visit</h4>
              <p>I meet your plants, take notes, send a simple plan the next day.</p>
              <div class="annot">usually 30 minutes</div>
            </div>
          </div>
          <div class="fj-check">
            <div class="box">✓</div>
            <div>
              <h4>Pick a rhythm</h4>
              <p>Weekly, biweekly, vacation-only, or a one-off project. No contracts.</p>
              <div class="annot">cancel anytime</div>
            </div>
          </div>
          <div class="fj-check">
            <div class="box">✓</div>
            <div>
              <h4>Photo log every visit</h4>
              <p>Every plant photographed, every action noted, texted to you before I leave.</p>
              <div class="annot">proof, not promises ✻</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="fj-faq" id="faq">
        <div class="fj-sec-head">
          <h2>A few <em>asked</em> things.</h2>
          <div class="aside">the ones people text before booking.</div>
        </div>
        <div class="fj-faq-grid">
          <div class="ill" style="width: 140px; color: var(--palm);">${I.muhlyGrass()}</div>
          <div class="fj-faq-list">
            <div class="q">
              <h5><span>Q.</span>Do I really get a photo of every plant, every visit?</h5>
              <p>Yes — always. You'll get a text before I leave with a photo of each plant and a one-line note on what I did. That's the whole point.</p>
            </div>
            <div class="q">
              <h5><span>Q.</span>Where do you service?</h5>
              <p>Barrier Island, Daytona Beach Shores, Wilbur-by-the-Sea, Ormond Beach, Ponce Inlet. A few exceptions over the bridge.</p>
            </div>
            <div class="q">
              <h5><span>Q.</span>Do you work indoors too?</h5>
              <p>No — outdoor plants only. Patios, entryways, courtyards, pool decks, porches, small garden beds. It's what I love and what I'm best at.</p>
            </div>
            <div class="q">
              <h5><span>Q.</span>What if a plant dies?</h5>
              <p>Outdoor plants face weather and pests that aren't always preventable. I don't guarantee replacements — but I'll always tell you honestly what happened and what to try next.</p>
            </div>
            <div class="q">
              <h5><span>Q.</span>Keys, codes, lockboxes?</h5>
              <p>All handled discreetly. Fully secured. References on request.</p>
            </div>
            <div class="q">
              <h5><span>Q.</span>Can you source plants for me?</h5>
              <p>Happily. I'll pick the plants, pick the pots, deliver, install, and clean up the soil confetti.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="fj-final">
        <h2>Let's meet <em>your plants.</em></h2>
        <p>First visit is free. I'll come take a look, chat a bit, and send you a simple plan.</p>
        <button class="book-btn">book a free visit →</button>
      </section>

      <!-- FOOTER -->
      <footer class="fj-foot">
        <div>Alicia &amp; Plants · Barrier Island, Daytona Beach FL</div>
        <div>hello@aliciaandplants.com · (386) 555-0143</div>
        <div class="small">© 2026 — watered with love</div>
      </footer>
    </div>
  `;
})();
