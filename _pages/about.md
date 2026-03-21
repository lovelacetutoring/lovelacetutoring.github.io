---
layout: page
permalink: /about/
---

<!-- Google Fonts — same as rest of site -->
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet">

<style>
  :root {
    --ink:       #12120f;
    --ink-soft:  #3d3d38;
    --ink-muted: #7a7a72;
    --paper:     #f8f6f0;
    --cream:     #efe9da;
    --gold:      #c8a84b;
    --gold-dark: #9c7e2e;
    --teal:      #1d6b5c;
    --teal-light:#e4f0ee;
    --rule:      rgba(18,18,15,0.12);
  }

  body, p, li, a, span {
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
  }

  /* ── Page wrapper ── */
  .about-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 3.5rem 5vw 5rem;
    animation: fadeUp 0.7s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Header ── */
  .about-eyebrow {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 0.7rem;
  }

  .about-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
    color: var(--ink);
    margin: 0 0 2.8rem;
  }

  /* ── Intro block: floated photo ── */
  .intro-block {
    margin-bottom: 3.5rem;
  }

  .photo-float {
    float: right;
    width: 110px;
    margin: 0 0 1rem 2rem;
    border: 1px solid var(--rule);
  }

  .photo-float img {
    width: 100%;
    display: block;
  }

  .photo-placeholder {
    width: 110px;
    aspect-ratio: 3 / 4;
    background: var(--cream);
    border: 1px solid var(--rule);
    float: right;
    margin: 0 0 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .photo-placeholder svg {
    opacity: 0.3;
  }

  .photo-placeholder-label {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
    text-align: center;
    padding: 0 0.3rem;
  }

  .bio-text p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--ink-soft);
    margin: 0 0 1rem;
  }

  .bio-text p:last-child { margin-bottom: 0; }

  .bio-clearfix::after {
    content: '';
    display: table;
    clear: both;
  }

  /* ── Results highlight strip ── */
  .results-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 600px) {
    .results-strip { grid-template-columns: 1fr; }
  }

  .result-card {
    background: #0f5244;
    padding: 1.4rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .result-number {
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    color: var(--gold);
    line-height: 1;
  }

  .result-label {
    font-size: 0.82rem;
    color: rgba(248,246,240,0.82);
    line-height: 1.4;
  }

  /* ── Company section ── */
  .company-block {
    margin-bottom: 3.5rem;
  }

  .company-layout {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 2rem;
    align-items: start;
  }

  @media (max-width: 560px) {
    .company-layout {
      grid-template-columns: 1fr;
    }
  }

  .company-photo {
    width: 100%;
    border: 1px solid var(--rule);
  }

  .company-photo img {
    width: 100%;
    height: auto;
    display: block;
  }

  .company-photo-placeholder {
    width: 100%;
    aspect-ratio: 1;
    background: var(--cream);
    border: 1px solid var(--rule);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .company-photo-placeholder-label {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
    text-align: center;
    padding: 0 0.5rem;
  }

  .company-body {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--ink-soft);
  }

  .company-body p { margin: 0 0 1rem; }
  .company-body p:last-child { margin-bottom: 0; }

  /* ── Question snippets ── */
  .snippets-block {
    margin-bottom: 3.5rem;
  }

  .snippets-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 0.4rem;
  }

  .snippet-item {
    border-left: 3px solid var(--gold);
    padding: 0.8rem 1.2rem;
    background: var(--cream);
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--ink-soft);
    font-style: italic;
  }

  .snippet-topic {
    display: inline-block;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.65rem;
    font-style: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 0.3rem;
  }

  /* ── Stat strip ── */
  .stat-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0;
    border: 1px solid var(--rule);
    margin-bottom: 3.5rem;
  }

  .stat-item {
    padding: 0.9rem 1rem;
    border-right: 1px solid var(--rule);
  }

  .stat-item:last-child {
    border-right: none;
  }

  @media (max-width: 500px) {
    .stat-item {
      border-right: none;
      border-bottom: 1px solid var(--rule);
    }
    .stat-item:last-child { border-bottom: none; }
  }

  .stat-number {
    font-family: 'DM Serif Display', serif;
    font-size: 1.3rem;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.2rem;
  }

  .stat-label {
    font-size: 0.68rem;
    color: var(--ink-muted);
    line-height: 1.3;
  }

  /* ── Section shared ── */
  .divider-line {
    width: 100%;
    height: 1px;
    background: var(--rule);
    margin: 0 0 2.8rem;
  }

  .section-label {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-muted);
    margin-bottom: 0.6rem;
  }

  .section-heading {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    color: var(--ink);
    margin: 0 0 1.4rem;
  }

  /* ── Teaching philosophy ── */
  .philosophy-block {
    margin-bottom: 3.5rem;
  }

  .philosophy-body {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--ink-soft);
    max-width: 680px;
  }

  .philosophy-body p {
    margin: 0 0 1rem;
  }

  .pull-quote {
    border-left: 3px solid var(--gold);
    padding: 0.6rem 0 0.6rem 1.4rem;
    margin: 1.8rem 0;
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    font-style: italic;
    color: var(--ink);
    line-height: 1.5;
  }

  /* ── Background ── */
  .background-block {
    margin-bottom: 3.5rem;
  }

  .background-body {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--ink-soft);
    max-width: 680px;
  }

  .background-body p { margin: 0 0 1rem; }

  /* ── What I can help with ── */
  .help-block {
    margin-bottom: 3.5rem;
  }

  .help-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 0.4rem;
  }

  .help-item {
    background: var(--cream);
    padding: 1.2rem 1.3rem;
    border: 1px solid var(--rule);
    transition: border-color 0.2s;
  }

  .help-item:hover {
    border-color: var(--gold-dark);
  }

  .help-item-title {
    font-weight: 500;
    font-size: 0.92rem;
    color: var(--ink);
    margin-bottom: 0.3rem;
  }

  .help-item-detail {
    font-size: 0.82rem;
    color: var(--ink-muted);
    line-height: 1.5;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 0.02em;
  }

  /* ── CTA ── */
  .about-cta {
    background: var(--teal);
    padding: 2.4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }

  @media (min-width: 560px) {
    .about-cta {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .about-cta-text {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.1rem, 2.2vw, 1.45rem);
    color: #f8f6f0;
    margin: 0;
    line-height: 1.35;
  }

  .about-cta-btn {
    flex-shrink: 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--teal);
    background: var(--paper);
    padding: 0.75rem 1.8rem;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    white-space: nowrap;
  }

  .about-cta-btn:hover {
    background: #fff;
    transform: translateY(-2px);
    color: var(--teal);
    text-decoration: none;
  }
</style>

<div class="about-page">

  <p class="about-eyebrow">About me</p>
  <h2 class="about-title">About me</h2>

  <!-- ── Intro: floated photo + bio ── -->
  <div class="intro-block bio-clearfix">

    <div class="photo-float">
          <img src="/images/girl.png" alt="Mary">
        </div>

    <div class="bio-text">
      <p>
        Hi, I'm Mary! I read Mathematics at the University of Edinburgh, and I will shortly begin my PhD in Computer Science. I have worked as a software engineer and researcher, and I enjoy teaching on the side.
      </p>
      <p>
        About 5 years ago, I applied for a teaching assistant position for the Discrete Maths course. Since then, I have tutored 7 courses, ranging from Functional Programming to Scientific Computation, and have also worked privately with undergraduates tackling demanding university modules, as well as high school students preparing for final exams.s
      </p>
    </div>

  </div>

  <!-- ── Results highlight ── -->
  <div class="results-strip">
    <div class="result-card">
      <span class="result-number">100%</span>
      <span class="result-label">Of undergraduate tutees achieved a first in their university exam</span>
    </div>
    <div class="result-card">
      <span class="result-number">100%</span>
      <span class="result-label">Of A-Level &amp; IB students met their university conditional offer</span>
    </div>
    <div class="result-card">
      <span class="result-number">20+</span>
      <span class="result-label">Students tutored 1:1 (15 undergraduates, 7 high school students)</span>
    </div>
  </div>

  <!-- ── Stats strip ── -->
  <div class="stat-strip">
    <div class="stat-item">
      <p class="stat-number">4+</p>
      <p class="stat-label">Years tutoring</p>
    </div>
    <div class="stat-item">
      <p class="stat-number">A-Level<br>&amp; IB</p>
      <p class="stat-label">Exam revision</p>
    </div>
    <div class="stat-item">
      <p class="stat-number">Undergrad</p>
      <p class="stat-label">Uni support</p>
    </div>
    <div class="stat-item">
      <p class="stat-number">1-to-1</p>
      <p class="stat-label">or small groups<br>(2&ndash;3 students)</p>
    </div>
    <!-- <div class="stat-item">
      <p class="stat-number">Masterclass</p>
      <p class="stat-label">ML &middot; Formal Verification<br>&amp; more</p>
    </div> -->
  </div>

  <!-- ── Company ── -->
  <hr class="divider-line">
  <div class="company-block">
    <p class="section-label">The company</p>
    <h2 class="section-heading">Lovelace Tutoring</h2>
    <div class="company-layout">

      <div class="company-photo-placeholder">
        <!--
          TO ADD A PHOTO:
          Replace this entire <div class="company-photo-placeholder"> block with:
          <div class="company-photo">
            <img src="/images/your-company-photo.jpg" alt="Company Name">
          </div>
        -->
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
          <rect x="4" y="8" width="40" height="32" rx="2" stroke="#3d3d38" stroke-width="1.5"/>
          <circle cx="16" cy="20" r="4" stroke="#3d3d38" stroke-width="1.5"/>
          <path d="M4 36l10-8 8 6 8-10 14 12" stroke="#3d3d38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="company-photo-placeholder-label">Company photo</span>
      </div>

      <div class="company-body">
        <p>
          Ada Lovelace was a leading 19th-century mathematician, widely considered the world’s first programmer.

          [Company Name] was founded with a simple idea: that the best way to learn Maths and Computer Science is through focused, personalised sessions — not crowded classrooms or one-size-fits-all resources.
        </p>
        <p>
          Rigorous teaching, genuine curiosity, and a belief that anyone can develop confidence in these subjects with the right support. The goal is always the same — real understanding, not just the right answer.
        </p>
      </div>

    </div>

    <!-- Questions explored — inside company section -->
    <div style="margin-top: 2rem;">
      <p class="section-label" style="margin-bottom:0.8rem;">From our sessions</p>
      <div class="snippets-list">

        <div class="snippet-item">
          <span class="snippet-topic">Machine Learning</span><br>
          What is an explanation of a machine learning output? How can we ensure explanations do not divulge any information?
        </div>

        <div class="snippet-item">
          <span class="snippet-topic">Probability</span><br>
          Two players A and B each toss a fair coin. A stops when he gets two consecutive heads; B stops when she gets a head followed by a tail. Who is more likely to stop first?
        </div>

        <div class="snippet-item">
          <span class="snippet-topic">Graph Theory</span><br>
          What does it mean for two graphs to be isomorphic? Is there a general algorithm that can detect this?
        </div>

        <!-- ADD MORE SNIPPETS HERE — copy the block above and update the topic and question -->

      </div>
    </div>

  </div>

  <!-- ── Teaching philosophy ── -->
  <hr class="divider-line">
  <div class="philosophy-block">
    <p class="section-label">How I teach</p>
    <h2 class="section-heading">My approach</h2>
    <div class="philosophy-body">
      <!--
        REPLACE with your own philosophy.
        Think about: how you structure sessions, how you diagnose gaps,
        how you adapt to different learners.
      -->
      <p>
        I believe the best tutoring isn't about re-teaching a textbook — it's about uncovering exactly where understanding breaks down and rebuilding from there. Before anything else, I take time to understand how a student thinks, not just what they know.
      </p>

      <blockquote class="pull-quote">
        "Understanding why something works matters more than memorising that it does."
      </blockquote>

      <p>
        Sessions are structured but flexible. We might work through exam technique one week and spend the next entirely on one concept that deserves more space. I find that students make the most progress when they feel comfortable asking questions — so creating that environment is always the first priority.
      </p>
      <p>
        <!-- REPLACE or remove this paragraph -->
        I have experience with [SQA / AQA / OCR / Edexcel — list your exam boards], and I tailor every session to the specific syllabus and assessment style a student is working towards.
      </p>
    </div>
  </div>

  <!-- ── Background ── -->
  <hr class="divider-line">
  <div class="background-block">
    <p class="section-label">Background</p>
    <h2 class="section-heading">Education &amp; experience</h2>
    <div class="background-body">
      <!--
        REPLACE with your real background.
        Keep it concise — 2 paragraphs is enough.
      -->
      <p>
        I graduated with a degree in [Your Subject] from [Your University], where I developed a strong foundation in both the theoretical and applied sides of Maths and Computer Science. During my studies I [brief relevant detail — e.g. "tutored fellow students informally" or "worked as a teaching assistant"].
      </p>
      <p>
        Since then I've built up [X] years of one-to-one tutoring experience, working with students preparing for [exams / specific courses]. I stay up to date with curriculum changes and mark scheme expectations so that the advice I give is always relevant and exam-ready.
      </p>
    </div>
  </div>

  <!-- ── What I can help with ── -->
  <hr class="divider-line">
  <div class="help-block">
    <p class="section-label">What I can help with</p>
    <h2 class="section-heading">Services</h2>
    <div class="help-grid">

      <div class="help-item">
        <p class="help-item-title">Exam Revision</p>
        <p class="help-item-detail">A-Level Maths &middot; Further Maths &middot; CS &middot; IB Maths SL/HL &middot; IB CS SL/HL</p>
        <!-- REPLACE with your real rate -->
        <p class="help-item-detail" style="margin-top:0.6rem; color:var(--gold-dark); font-family:'DM Sans',sans-serif;">£35/hr</p>
      </div>

      <div class="help-item">
        <p class="help-item-title">Undergraduate Support</p>
        <p class="help-item-detail">Linear Algebra &middot; Algorithms &amp; Data Structures &middot; Logic &middot; Graph Theory &middot; Combinatorics &middot; Functional Programming &middot; Numerical Computation</p>
        <!-- REPLACE with your real rate -->
        <p class="help-item-detail" style="margin-top:0.6rem; color:var(--gold-dark); font-family:'DM Sans',sans-serif;">£50/hr</p>
      </div>

      <div class="help-item">
        <p class="help-item-title">Masterclasses</p>
        <p class="help-item-detail">Machine Learning &middot; Formal Verification &middot; more available upon request</p>
        <!-- REPLACE with your real rate -->
        <p class="help-item-detail" style="margin-top:0.6rem; color:var(--gold-dark); font-family:'DM Sans',sans-serif;">£60/hr</p>
      </div>

    </div>
  </div>

  <!-- ── CTA ── -->
  <div class="about-cta">
    <p class="about-cta-text">Ready to get started?<br>I'd love to hear about your goals.</p>
    <a href="/contact" class="about-cta-btn">Get in touch →</a>
  </div>

</div>
