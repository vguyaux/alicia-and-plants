// Variation 1: Postcard scrapbook
// Greetings-from-Daytona feel — layered cards, stamps, postmarks, taped corners.

(function () {
  const root = document.getElementById('v-postcard');
  const I = window.Illustrations;

  root.innerHTML = `
    <style>
      #v-postcard {
        font-family: "Inter", sans-serif;
        color: var(--ink);
        background:
          radial-gradient(ellipse at 20% 10%, rgba(233,182,74,0.18), transparent 55%),
          radial-gradient(ellipse at 85% 40%, rgba(167,201,214,0.22), transparent 55%),
          var(--sand);
        min-height: 100vh;
        overflow-x: hidden;
      }
      .pc-wrap { max-width: 1200px; margin: 0 auto; padding: 28px 40px 80px; }

      /* Nav */
      .pc-nav {
        display: flex; align-items: center; justify-content: space-between;
        padding: 8px 0 24px;
      }
      .pc-logo {
        font-family: "DM Serif Display", serif;
        font-size: 26px;
        color: var(--palm);
        letter-spacing: 0.02em;
        display: flex; align-items: center; gap: 10px;
      }
      .pc-logo .mark { width: 28px; height: 28px; color: var(--palm); }
      .pc-nav ul { list-style: none; display: flex; gap: 28px; margin: 0; padding: 0; font-size: 14px; }
      .pc-nav ul a { text-decoration: none; color: var(--ink); opacity: 0.75; }
      .pc-nav ul a:hover { opacity: 1; }
      .pc-cta {
        background: var(--palm); color: var(--cream);
        border: none; padding: 10px 18px;
        font-family: "Inter", sans-serif; font-size: 14px; font-weight: 500;
        cursor: pointer; border-radius: 2px;
        box-shadow: 3px 3px 0 var(--clay);
        transition: transform 0.15s;
      }
      .pc-cta:hover { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--clay); }

      /* Hero postcard */
      .pc-hero {
        position: relative;
        background: var(--cream);
        border: 1.5px solid var(--ink);
        padding: 56px 56px 56px 64px;
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 40px;
        box-shadow: 8px 8px 0 rgba(31,58,46,0.15);
      }
      .pc-hero::before {
        content: ""; position: absolute;
        top: 0; bottom: 0; left: 50%;
        border-left: 1px dashed var(--ink);
        opacity: 0.25;
      }
      .pc-stamp {
        position: absolute; top: -16px; right: 40px;
        width: 96px; height: 114px;
        background: var(--clay);
        border: 4px dashed var(--cream);
        outline: 1.5px solid var(--ink);
        padding: 8px;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        color: var(--cream);
        text-align: center;
        transform: rotate(6deg);
      }
      .pc-stamp .sun-ill { width: 40px; height: 40px; color: var(--cream); }
      .pc-stamp .sun-ill svg { stroke: currentColor; }
      .pc-stamp small { font-family: "DM Serif Display", serif; font-size: 11px; letter-spacing: 0.1em; margin-top: 4px; }
      .pc-postmark {
        position: absolute; top: 30px; right: 160px;
        width: 140px; height: 140px;
        border: 1.5px solid var(--ink); border-radius: 50%;
        opacity: 0.35;
        transform: rotate(-12deg);
        display: flex; align-items: center; justify-content: center;
        font-family: "DM Serif Display", serif;
        font-size: 10px; letter-spacing: 0.22em;
        text-align: center;
        color: var(--ink);
      }
      .pc-postmark::before {
        content: ""; position: absolute; inset: 8px;
        border: 1px dashed var(--ink); border-radius: 50%;
      }

      .pc-eyebrow {
        font-family: "Caveat", cursive;
        font-size: 22px;
        color: var(--clay);
        margin-bottom: 8px;
      }
      .pc-hero h1 {
        font-family: "DM Serif Display", serif;
        font-size: 72px;
        line-height: 0.98;
        font-weight: 400;
        margin: 0 0 24px;
        color: var(--palm-deep);
        letter-spacing: -0.01em;
      }
      .pc-hero h1 em {
        font-style: italic;
        color: var(--clay);
      }
      .pc-hero p.lead {
        font-size: 18px;
        max-width: 42ch;
        color: var(--ink);
        opacity: 0.85;
        margin: 0 0 32px;
      }
      .pc-hero .cta-row { display: flex; align-items: center; gap: 20px; }
      .pc-hero .cta-row a.ghost {
        font-size: 14px; text-decoration: none;
        border-bottom: 1px solid var(--ink);
        padding-bottom: 2px;
      }

      .pc-hero-right {
        position: relative;
        display: flex; align-items: center; justify-content: center;
      }
      .pc-hero-right .big-ill { width: 320px; height: 320px; color: var(--palm); }
      .pc-hero-right .accent-1 { position: absolute; top: 10px; right: 10px; width: 90px; color: var(--clay); }
      .pc-hero-right .accent-2 { position: absolute; bottom: 30px; left: 0; width: 110px; color: var(--sky-deep); }
      .pc-hero-right .handwritten {
        position: absolute; top: 40px; left: 20px;
        font-family: "Caveat", cursive; font-size: 22px;
        color: var(--palm); transform: rotate(-8deg);
      }
      .pc-hero-right .handwritten::after {
        content: ""; display: block; width: 60px;
        border-bottom: 1.5px solid var(--palm);
        margin-top: 2px;
      }

      /* Who I help strip */
      .pc-evidence { }
      .pc-ev-inner {
        background: var(--palm-deep);
        color: var(--cream);
        padding: 48px 56px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        position: relative;
        border: 1.5px solid var(--ink);
      }
      .pc-ev-stamp {
        position: absolute; top: -18px; left: 40px;
        background: var(--sun);
        color: var(--palm-deep);
        padding: 6px 14px 8px;
        display: flex; align-items: center; gap: 8px;
        transform: rotate(-2deg);
        border: 1.5px solid var(--ink);
      }
      .pc-ev-stamp .sun-ill { width: 22px; height: 22px; color: var(--palm-deep); }
      .pc-ev-stamp .sun-ill svg { stroke: currentColor; }
      .pc-ev-stamp small {
        font-family: "DM Serif Display", serif;
        font-size: 12px; letter-spacing: 0.15em;
      }
      .pc-ev-left .pc-eyebrow { color: var(--sun); }
      .pc-ev-left p em { color: var(--sun); font-style: italic; }
      .pc-ev-right {
        display: grid; grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
      .pc-ev-photo {
        background: var(--cream);
        padding: 8px 8px 20px;
        transform: rotate(var(--r, -1deg));
        box-shadow: 3px 3px 0 rgba(0,0,0,0.3);
        position: relative;
      }
      .pc-ev-photo .ts {
        position: absolute; top: 4px; right: 8px;
        font-family: "Inter", sans-serif;
        font-size: 9px; letter-spacing: 0.1em;
        color: var(--palm); opacity: 0.7;
      }
      .pc-ev-photo .slot {
        aspect-ratio: 1;
        background: repeating-linear-gradient(45deg, var(--sand-2) 0 8px, var(--sand-3) 8px 16px);
        display: flex; align-items: center; justify-content: center;
        color: var(--palm);
      }
      .pc-ev-photo .slot svg { width: 60%; }
      .pc-ev-photo .cap {
        font-family: "Caveat", cursive;
        font-size: 15px; color: var(--palm-deep);
        text-align: center; margin-top: 6px;
      }

      .pc-strip {
        display: flex; gap: 20px; align-items: center; justify-content: space-between;
        padding: 24px 20px;
        margin-top: 40px;
        border-top: 1.5px solid var(--ink);
        border-bottom: 1.5px solid var(--ink);
        font-family: "DM Serif Display", serif;
        font-size: 18px;
        color: var(--palm-deep);
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      .pc-strip > span:not(.dot) {
        display: inline-flex; flex-direction: column; align-items: center; line-height: 1.05; gap: 2px;
      }
      .pc-strip .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--clay); flex: none; }
      .pc-strip em { font-family: "Caveat", cursive; color: var(--clay); font-size: 18px; font-style: normal; font-weight: 400; }

      /* Services — layered postcards */
      .pc-services { margin-top: 80px; }
      .pc-section-head {
        display: flex; justify-content: space-between; align-items: flex-end;
        margin-bottom: 40px;
      }
      .pc-section-head h2 {
        font-family: "DM Serif Display", serif;
        font-size: 56px; font-weight: 400; margin: 0;
        color: var(--palm-deep);
        line-height: 1;
      }
      .pc-section-head h2 em { font-style: italic; color: var(--clay); }
      .pc-section-head p { max-width: 38ch; margin: 0; opacity: 0.8; font-size: 15px; }

      .pc-card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .pc-card {
        background: var(--cream);
        border: 1.5px solid var(--ink);
        padding: 28px 24px 24px;
        position: relative;
        min-height: 280px;
        transition: transform 0.2s;
      }
      .pc-card:hover { transform: translateY(-3px); }
      .pc-card:nth-child(3n+1) { transform: rotate(-0.6deg); background: var(--cream); }
      .pc-card:nth-child(3n+2) { transform: rotate(0.4deg); background: #f8ead0; }
      .pc-card:nth-child(3n+3) { transform: rotate(-0.3deg); background: #f2e9d5; }
      .pc-card:hover { transform: translateY(-4px) rotate(0deg); box-shadow: 4px 4px 0 var(--palm); }
      .pc-card .tape {
        position: absolute; top: -10px; left: 50%;
        width: 70px; height: 22px;
        background: rgba(233, 182, 74, 0.55);
        border-left: 1px dashed rgba(31,58,46,0.2);
        border-right: 1px dashed rgba(31,58,46,0.2);
        transform: translateX(-50%) rotate(-2deg);
      }
      .pc-card .ic { width: 64px; height: 64px; color: var(--palm); margin-bottom: 16px; }
      .pc-card h3 {
        font-family: "DM Serif Display", serif;
        font-size: 26px; font-weight: 400; margin: 0 0 8px;
        color: var(--palm-deep);
      }
      .pc-card p { margin: 0 0 16px; font-size: 14px; opacity: 0.82; line-height: 1.5; }
      .pc-card .price {
        font-family: "Caveat", cursive;
        font-size: 20px; color: var(--clay);
        position: absolute; bottom: 18px; right: 20px;
      }
      .pc-card .num {
        position: absolute; top: 14px; right: 18px;
        font-family: "DM Serif Display", serif;
        font-size: 14px; color: var(--palm); opacity: 0.5;
        letter-spacing: 0.15em;
      }

      /* About Alicia */
      .pc-about {
        margin-top: 100px;
        background: var(--palm-deep);
        color: var(--cream);
        padding: 64px;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 56px;
        align-items: center;
        position: relative;
      }
      .pc-about::before {
        content: ""; position: absolute;
        top: -10px; left: -10px; right: -10px; bottom: -10px;
        border: 1.5px solid var(--ink);
        z-index: -1;
      }
      .pc-polaroid {
        background: var(--cream);
        padding: 16px 16px 40px;
        transform: rotate(-3deg);
        box-shadow: 6px 6px 0 rgba(0,0,0,0.25);
      }
      .pc-polaroid .img-slot {
        width: 100%; aspect-ratio: 4/5;
        background:
          repeating-linear-gradient(45deg, var(--sand-2) 0 8px, var(--sand-3) 8px 16px);
        display: flex; align-items: center; justify-content: center;
        color: var(--palm); position: relative;
      }
      .pc-polaroid .img-slot::after {
        content: "ALICIA / PHOTO";
        position: absolute; bottom: 12px; left: 12px;
        font-family: "JetBrains Mono", monospace, monospace;
        font-size: 9px; letter-spacing: 0.2em;
        color: var(--palm); opacity: 0.7;
      }
      .pc-polaroid .img-slot svg { width: 60%; }
      .pc-polaroid .caption {
        margin-top: 14px;
        font-family: "Caveat", cursive;
        font-size: 22px; color: var(--palm); text-align: center;
      }
      .pc-about h2 {
        font-family: "DM Serif Display", serif;
        font-size: 52px; margin: 0 0 16px; font-weight: 400;
        line-height: 1;
      }
      .pc-about h2 em { font-style: italic; color: var(--sun); }
      .pc-about p { font-size: 17px; line-height: 1.7; margin: 0 0 16px; opacity: 0.92; }
      .pc-about .signature {
        font-family: "Caveat", cursive; font-size: 32px;
        color: var(--sun); margin-top: 20px;
      }

      /* How it works */
      .pc-how { margin-top: 100px; }
      .pc-steps {
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        border-top: 1.5px solid var(--ink);
        border-bottom: 1.5px solid var(--ink);
      }
      .pc-step {
        padding: 32px 24px;
        border-right: 1.5px solid var(--ink);
        position: relative;
      }
      .pc-step:last-child { border-right: none; }
      .pc-step .n {
        font-family: "DM Serif Display", serif;
        font-size: 48px; color: var(--clay); line-height: 1;
        font-style: italic;
      }
      .pc-step h4 {
        font-family: "DM Serif Display", serif;
        font-size: 22px; font-weight: 400; margin: 16px 0 6px;
        color: var(--palm-deep);
      }
      .pc-step p { font-size: 14px; margin: 0; opacity: 0.8; }

      /* FAQ */
      .pc-faq { margin-top: 100px; display: grid; grid-template-columns: 1fr 1.4fr; gap: 56px; }
      .pc-faq h2 { font-family: "DM Serif Display", serif; font-size: 52px; margin: 0; line-height: 1; color: var(--palm-deep); font-weight: 400; }
      .pc-faq h2 em { font-style: italic; color: var(--clay); }
      .pc-faq .q { border-top: 1px solid var(--ink); padding: 20px 0; cursor: pointer; }
      .pc-faq .q:last-child { border-bottom: 1px solid var(--ink); }
      .pc-faq .q h5 {
        font-family: "DM Serif Display", serif;
        font-size: 22px; font-weight: 400; margin: 0;
        color: var(--palm-deep);
        display: flex; justify-content: space-between;
      }
      .pc-faq .q .plus { color: var(--clay); font-family: "Inter", sans-serif; font-size: 20px; }
      .pc-faq .q p { margin: 8px 0 0; font-size: 14px; opacity: 0.8; max-width: 60ch; }

      /* CTA final */
      .pc-final {
        margin-top: 100px;
        background: var(--clay);
        color: var(--cream);
        padding: 80px 64px;
        position: relative;
        overflow: hidden;
        text-align: center;
      }
      .pc-final h2 {
        font-family: "DM Serif Display", serif;
        font-size: 72px; font-weight: 400; margin: 0 0 16px;
        line-height: 1;
      }
      .pc-final h2 em { font-style: italic; color: var(--sun); }
      .pc-final p { max-width: 48ch; margin: 0 auto 32px; opacity: 0.95; font-size: 17px; }
      .pc-final button {
        background: var(--cream); color: var(--ink);
        border: 1.5px solid var(--ink);
        padding: 14px 32px; font-size: 16px; font-weight: 500;
        cursor: pointer; font-family: inherit;
        box-shadow: 4px 4px 0 var(--palm-deep);
      }
      .pc-final .deco-l { position: absolute; top: 20px; left: 20px; width: 120px; color: var(--sun); opacity: 0.6; }
      .pc-final .deco-r { position: absolute; bottom: 0; right: 0; width: 180px; color: var(--cream); opacity: 0.35; }

      /* Footer */
      .pc-footer {
        margin-top: 60px;
        padding: 40px 0 0;
        display: flex; justify-content: space-between;
        font-size: 13px; opacity: 0.7;
        flex-wrap: wrap; gap: 20px;
      }
      .pc-footer .wave-ill { color: var(--sky-deep); opacity: 0.5; margin-top: 20px; }
    </style>

    <div class="pc-wrap">
      <!-- NAV -->
      <nav class="pc-nav">
        <div class="pc-logo">
          <span class="mark">${I.sprout()}</span>
          Alicia &amp; Plants
        </div>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Alicia</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button class="pc-cta">Book a free visit →</button>
      </nav>

      <!-- HERO -->
      <section class="pc-hero">
        <div class="pc-stamp">
          <span class="sun-ill">${I.sun()}</span>
          <small>DAYTONA<br/>BEACH · FL</small>
        </div>
        <div class="pc-postmark">BARRIER ISLAND<br/>· EST. 2023 ·</div>

        <div>
          <div class="pc-eyebrow">Hi, I'm Alicia — outdoor plants only 🌴</div>
          <h1>Your garden,<br/><em>looked after</em><br/>like family.</h1>
          <p class="lead">A boutique, one-woman <em>outdoor</em> plant care service on the Barrier Island. Patios, entryways, pool decks, courtyards, porches. I water, prune, revive, style, and generally dote — so your outdoor plants keep their glow while you live your life.</p>
          <div class="cta-row">
            <button class="pc-cta" style="padding: 14px 24px; font-size: 15px;">Book a free visit →</button>
            <a href="#services" class="ghost">or see what I do</a>
          </div>
        </div>

        <div class="pc-hero-right ill">
          <div class="handwritten">greetings<br/>from sunny FL</div>
          <div class="big-ill">${I.sawPalmetto()}</div>
          <div class="accent-1">${I.hibiscus()}</div>
          <div class="accent-2">${I.wave()}</div>
        </div>
      </section>

      <!-- EVIDENCE / PHOTO LOG -->
      <section class="pc-evidence" style="margin-top: 64px;">
        <div class="pc-ev-inner">
          <div class="pc-ev-stamp">
            <span class="sun-ill">${I.sun()}</span>
            <small>VISIT<br/>LOG</small>
          </div>
          <div class="pc-ev-left">
            <div class="pc-eyebrow" style="margin-bottom:12px;">while you're out →</div>
            <h2 style="font-family:'DM Serif Display',serif;font-size:48px;line-height:1;margin:0 0 18px;font-weight:400;color:var(--palm-deep);">Proof, <em style="font-style:italic;color:var(--clay);">every visit.</em></h2>
            <p style="font-size:16px;max-width:48ch;opacity:0.9;margin:0 0 12px;">What people actually want when they're not home isn't watering — it's <em>knowing.</em> So every single visit, I photograph each plant, jot what I did, and text you the log before I leave.</p>
            <p style="font-family:'Caveat',cursive;font-size:22px;color:var(--clay);margin:12px 0 0;">you see exactly what happened, on the day it happened.</p>
          </div>
          <div class="pc-ev-right">
            <div class="pc-ev-photo" style="--r:-2deg">
              <div class="ts">TUE · 09:42</div>
              <div class="slot ill">${I.sawPalmetto()}</div>
              <div class="cap">saw palmetto — checked</div>
            </div>
            <div class="pc-ev-photo" style="--r:1.8deg">
              <div class="ts">TUE · 09:58</div>
              <div class="slot ill">${I.beachSunflower()}</div>
              <div class="cap">beach sunflower — deadheaded</div>
            </div>
            <div class="pc-ev-photo" style="--r:-1deg">
              <div class="ts">TUE · 10:11</div>
              <div class="slot ill">${I.firebush()}</div>
              <div class="cap">firebush — two butterflies!</div>
            </div>
          </div>
        </div>
      </section>

      <!-- STRIP -->
      <div class="pc-strip">
        <span>Homeowners<em>with too many pots</em></span>
        <span class="dot"></span>
        <span>Beach rentals<em>&nbsp;</em></span>
        <span class="dot"></span>
        <span>Snowbirds<em>&nbsp;</em></span>
        <span class="dot"></span>
        <span>Pool decks<em>&nbsp;</em></span>
        <span class="dot"></span>
        <span>Patios<em>that deserve better</em></span>
      </div>

      <!-- SERVICES -->
      <section class="pc-services" id="services">
        <div class="pc-section-head">
          <h2>Outdoor, <em>only outdoor.</em></h2>
          <p>Pick a recurring rhythm, drop in for a rescue, or hand me the whole patio. I work alone, outside — it's just me and very strong opinions about drainage and salt spray.</p>
        </div>

        <div class="pc-card-grid">
          <div class="pc-card">
            <span class="tape"></span>
            <span class="num">01</span>
            <div class="ic">${I.wateringCan()}</div>
            <h3>Weekly &amp; biweekly care</h3>
            <p>Regular outdoor visits on a schedule that sticks. Watering, deadheading, pruning, and a sharp eye on what the sun and salt air are doing.</p>
            <span class="price">from $45/visit</span>
          </div>
          <div class="pc-card">
            <span class="tape"></span>
            <span class="num">02</span>
            <div class="ic">${I.umbrella()}</div>
            <h3>Vacation plant sitting</h3>
            <p>Going away? I'll check your patio and entryway while you're gone, send photo updates, and make sure the hibiscus doesn't stage a drought.</p>
            <span class="price">from $35/visit</span>
          </div>
          <div class="pc-card">
            <span class="tape"></span>
            <span class="num">03</span>
            <div class="ic">${I.sprout()}</div>
            <h3>Plant rescue &amp; revival</h3>
            <p>Sun-scorched? Wind-beaten? Mysteriously full of whitefly? I'll diagnose, triage, and nurse her back — or tell you honestly when it's time.</p>
            <span class="price">est. per plant</span>
          </div>
          <div class="pc-card">
            <span class="tape"></span>
            <span class="num">04</span>
            <div class="ic">${I.pot()}</div>
            <h3>Repotting &amp; refresh</h3>
            <p>New soil, right-sized pot, correct drainage for heavy rains. Pots that match your tile, your shutters, and your sensibility.</p>
            <span class="price">est. per project</span>
          </div>
          <div class="pc-card">
            <span class="tape"></span>
            <span class="num">05</span>
            <div class="ic">${I.palm()}</div>
            <h3>Patio install &amp; styling</h3>
            <p>Empty corner of the pool deck? Lanai needs that tropical glow? I source plants that thrive here, pick the pots, place them well.</p>
            <span class="price">est. per project</span>
          </div>
          <div class="pc-card">
            <span class="tape"></span>
            <span class="num">06</span>
            <div class="ic">${I.hibiscus()}</div>
            <h3>Coastal garden refresh</h3>
            <p>Salt air is a whole thing. Hibiscus, bougainvillea, sea grape, native grasses — planted right so they actually survive.</p>
            <span class="price">est. per project</span>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="pc-about" id="about">
        <div class="pc-polaroid">
          <div class="img-slot ill">${I.seagrape()}</div>
          <div class="caption">me &amp; a particularly dramatic sea grape</div>
        </div>
        <div>
          <h2>Just me, <em>some plants,</em><br/>and a good pair of shears.</h2>
          <p>I'm Alicia. I've lived on the Barrier Island most of my life, mostly outdoors — gardening, swimming, barefoot more often than not. This little business is an outdoor one on purpose: I care for plants where they belong, in the sun and salt air.</p>
          <p>No subcontractors, no van fleet, no upsell scripts. Just me, showing up on the day I said I would, using your hose and the quiet satisfaction of a perfectly drained pot.</p>
          <div class="signature">— Alicia</div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="pc-how" id="how">
        <div class="pc-section-head">
          <h2>How it <em>works</em>.</h2>
          <p>Low-key, no pressure. A text conversation, a first visit, then we see.</p>
        </div>
        <div class="pc-steps">
          <div class="pc-step">
            <span class="n">i.</span>
            <h4>Say hi</h4>
            <p>Text or email. Tell me how many plants, roughly, and where you live.</p>
          </div>
          <div class="pc-step">
            <span class="n">ii.</span>
            <h4>Free first visit</h4>
            <p>I come meet your plants, take notes, and send a simple plan.</p>
          </div>
          <div class="pc-step">
            <span class="n">iii.</span>
            <h4>Pick a rhythm</h4>
            <p>Weekly, biweekly, vacation-only, or one-off project. No contracts.</p>
          </div>
          <div class="pc-step">
            <span class="n">iv.</span>
            <h4>I show up</h4>
            <p>Same day each visit. Photo update after.</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="pc-faq" id="faq">
        <div>
          <h2>A few <em>asked</em><br/>things.</h2>
          <div style="margin-top: 20px;" class="ill">${I.muhlyGrass()}</div>
        </div>
        <div>
          <div class="q">
            <h5>Where do you work? <span class="plus">+</span></h5>
            <p>Barrier Island, Daytona Beach Shores, Wilbur-by-the-Sea, Ormond Beach, and a few spots over the bridge by request.</p>
          </div>
          <div class="q">
            <h5>Do you do indoor plants too? <span class="plus">+</span></h5>
            <p>No — outdoor only. Patios, entryways, courtyards, pool decks, porches, small garden beds. It's what I love and what I'm best at.</p>
          </div>
          <div class="q">
            <h5>What if my plant dies on your watch? <span class="plus">+</span></h5>
            <p>Plants are living things with opinions, and outdoor ones face storms, salt, and pests that aren't always preventable. I don't guarantee replacements — but I'll always be honest about what happened and why.</p>
          </div>
          <div class="q">
            <h5>Do you have a key / gate code? <span class="plus">+</span></h5>
            <p>Yep. Gate codes, side-gate keys, lockboxes — all handled discreetly. Fully secured.</p>
          </div>
          <div class="q">
            <h5>Can you pick my plants for me? <span class="plus">+</span></h5>
            <p>Absolutely. I'll source, deliver, pot, and place them where they'll actually thrive in your light and exposure. We can arrange this, but even better — we go together.</p>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="pc-final">
        <div class="deco-l ill">${I.palm()}</div>
        <div class="deco-r ill">${I.seagrape()}</div>
        <h2>Let's meet<br/><em>your plants.</em></h2>
        <p>Free first visit, no commitment. I'll come take a look, chat a bit, and send you a simple plan.</p>
        <button>Book a free visit →</button>
      </section>

      <!-- FOOTER -->
      <footer class="pc-footer">
        <div>
          <div style="font-family: 'DM Serif Display', serif; font-size: 20px; color: var(--palm);">Alicia &amp; Plants</div>
          <div>Barrier Island · Daytona Beach, FL</div>
        </div>
        <div>hello@aliciaandplants.com<br/>(386) 555-0143</div>
        <div class="wave-ill ill" style="width: 200px;">${I.wave()}</div>
        <div>© 2026 — watered with love</div>
      </footer>
    </div>
  `;
})();
