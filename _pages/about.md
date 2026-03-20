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

  /* ── Company section ── */
  .company-block {
    margin-bottom: 3.5rem;
  }

  .company-body {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--ink-soft);
    max-width: 680px;
  }

  .company-body p { margin: 0 0 1rem; }
  .company-body p:last-child { margin-bottom: 0; }

  /* ── Stat strip ── */
  .stat-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0;
    border: 1px solid var(--rule);
    margin-bottom: 3.5rem;
  }

  .stat-item {
    padding: 1.4rem 1.6rem;
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
    font-size: 2rem;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .stat-label {
    font-size: 0.78rem;
    color: var(--ink-muted);
    line-height: 1.4;
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
  <h1 class="about-title">About me</h1>

  <!-- ── Intro: floated photo + bio ── -->
  <div class="intro-block bio-clearfix">

    <div class="photo-placeholder">
      <!--
        TO ADD YOUR PHOTO:
        Replace this entire <div class="photo-placeholder"> block with:
        <div class="photo-float">
          <img src="/images/your-photo.jpg" alt="Your Name">
        </div>
      -->
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="18" r="9" stroke="#3d3d38" stroke-width="1.5"/>
        <path d="M6 42c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="#3d3d38" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span class="photo-placeholder-label">Your photo</span>
    </div>

    <div class="bio-text">
      <p>
        Hi, I'm Maria. I am about to start my PhD in Computer Science in the UK. I offer one-to-one tuition across three areas: exam revision for A-Level and IB students, tailored support for undergraduates, and masterclasses for those who want to go further.
      </p>
      <p>
        I hold a Mathematics degree with first class honours from the University of Edinburgh, and have been tutoring for 4 years. Over that time I've worked with students at all levels — from those preparing for high school exams to undergraduates working through demanding university modules.
      </p>
      <p>
        Outside of tutoring, I enjoy [a short personal detail — optional but makes you feel human and approachable].
      </p>
    </div>

  </div>

  <!-- ── Stats strip ── -->
  <div class="stat-strip">
    <div class="stat-item">
      <!-- REPLACE with your real figure -->
      <p class="stat-number">5+</p>
      <p class="stat-label">Years tutoring</p>
    </div>
    <div class="stat-item">
      <p class="stat-number">A-Level<br>&amp; IB</p>
      <p class="stat-label">Exam revision</p>
    </div>
    <div class="stat-item">
      <p class="stat-number">Undergrad</p>
      <p class="stat-label">University support</p>
    </div>
    <div class="stat-item">
      <p class="stat-number">1-to-1</p>
      <p class="stat-label">or small groups<br>(2&ndash;3 students)</p>
    </div>
  </div>

  <!-- ── Company ── -->
  <hr class="divider-line">
  <div class="company-block">
    <p class="section-label">The company</p>
    <h2 class="section-heading">[Company Name]</h2>
    <div class="company-body">
      <!--
        REPLACE with your own text.
        Suggested structure: 1 paragraph on the story/meaning behind the name,
        1 paragraph on what the company stands for.
      -->
      <p>
        Ada Loveace was a leading 19th century mathematician who is consider the world's first programmer. At Lovelace Tutoring, we focus on Maths and Computer Science. Some snippets of questions we covered:
          * What is an explanation of a machine learning output? How can we ensure explanations do not divulge any information?
          * What does it mean for two graphs to be the same? Is there a general algorithm that can detect this?

        Just 
      </p>
      <p>
        What we stand for is straightforward: rigorous teaching, genuine curiosity, and a belief that anyone can develop confidence in these subjects with the right support. Whether you're revising for exams, working through a tough university module, or simply want to learn more, the goal is always the same — real understanding, not just the right answer.
      </p>
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
    <h2 class="section-heading">Courses</h2>
    <div class="help-grid">

      <div class="help-item">
        <p class="help-item-title">Exam Revision</p>
        <p class="help-item-detail">A-Level Maths &middot; Further Maths &middot; CS &middot; IB Maths SL/HL &middot; IB CS SL/HL</p>
        <!-- REPLACE with your real rate -->
        <p class="help-item-detail" style="margin-top:0.6rem; color:var(--gold-dark); font-family:'DM Sans',sans-serif;"> £45/hr</p>
      </div>

      <div class="help-item">
        <p class="help-item-title">Undergraduate Support</p>
        <p class="help-item-detail">Linear Algebra &middot; Algorithms &amp; Data Structures &middot; Logic &middot; Graph Theory &middot; Combinatorics &middot; Functional Programming &middot; Numerical Computation</p>
        <!-- REPLACE with your real rate -->
        <p class="help-item-detail" style="margin-top:0.6rem; color:var(--gold-dark); font-family:'DM Sans',sans-serif;">From £55/hr</p>
      </div>

      <div class="help-item">
        <p class="help-item-title">Masterclasses</p>
        <p class="help-item-detail">Machine Learning &middot; Formal Verification &middot; more available upon request</p>
        <!-- REPLACE with your real rate -->
        <p class="help-item-detail" style="margin-top:0.6rem; color:var(--gold-dark); font-family:'DM Sans',sans-serif;">From £60/hr</p>
      </div>

    </div>
  </div>

  <!-- ── CTA ── -->
  <div class="about-cta">
    <p class="about-cta-text">Ready to get started?<br>Let's talk!.</p>
    <a href="/contact" class="about-cta-btn">Get in touch →</a>
  </div>

</div>