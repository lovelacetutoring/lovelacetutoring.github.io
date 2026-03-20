---
layout: page
permalink: /contact/
---

<!-- Google Fonts — same as home page -->
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
    --error:     #b33a3a;
    --success:   #1d6b5c;
  }

  body, p, li, a, span, label, input, textarea, select, button {
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
  }

  /* ── Page wrapper ── */
  .contact-page {
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
  .contact-eyebrow {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 0.7rem;
  }

  .contact-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
    color: var(--ink);
    margin: 0 0 0.8rem;
  }

  .contact-intro {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--ink-soft);
    max-width: 540px;
    margin: 0 0 0.6rem;
  }

  .contact-availability {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.82rem;
    color: var(--teal);
    background: var(--teal-light);
    padding: 0.3rem 0.85rem;
    margin-bottom: 2.8rem;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 0.03em;
  }

  .contact-availability::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--teal);
    flex-shrink: 0;
  }

  /* ── Two-column layout ── */
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 4rem;
    align-items: start;
  }

  @media (max-width: 640px) {
    .contact-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  /* ── Left: info panel ── */
  .info-section-label {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-muted);
    margin-bottom: 1.2rem;
  }

  .info-item {
    margin-bottom: 1.6rem;
  }

  .info-item-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-muted);
    margin-bottom: 0.25rem;
  }

  .info-item-value {
    font-size: 0.95rem;
    color: var(--ink);
    line-height: 1.5;
  }

  .info-item-value a {
    color: var(--teal);
    text-decoration: none;
    border-bottom: 1px solid var(--teal-light);
    transition: border-color 0.2s;
  }

  .info-item-value a:hover {
    border-color: var(--teal);
  }

  .divider-line {
    width: 100%;
    height: 1px;
    background: var(--rule);
    margin: 2rem 0;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.88rem;
    color: var(--ink-soft);
    text-decoration: none;
    border: 1px solid var(--rule);
    padding: 0.5rem 0.9rem;
    transition: border-color 0.2s, color 0.2s;
  }

  .social-link:hover {
    border-color: var(--gold-dark);
    color: var(--ink);
    text-decoration: none;
  }

  /* LinkedIn "in" badge */
  .li-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: #0a66c2;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    font-family: 'Source Code Pro', monospace;
    flex-shrink: 0;
  }

  /* ── Right: Form ── */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    .form-row { grid-template-columns: 1fr; }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .form-group label {
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-muted);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule);
    padding: 0.7rem 0.9rem;
    border-radius: 0;
    outline: none;
    transition: border-color 0.2s;
    appearance: none;
    -webkit-appearance: none;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: var(--teal);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 130px;
    line-height: 1.6;
  }

  /* Custom select arrow */
  .select-wrapper {
    position: relative;
  }

  .select-wrapper::after {
    content: '';
    position: absolute;
    right: 0.9rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid var(--ink-muted);
    pointer-events: none;
  }

  .form-group select {
    padding-right: 2.2rem;
    cursor: pointer;
    width: 100%;
  }

  /* Submit button */
  .form-submit {
    align-self: flex-start;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: #f8f6f0;
    background: var(--teal);
    border: none;
    padding: 0.85rem 2.2rem;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }

  .form-submit:hover {
    background: #155248;
    transform: translateY(-2px);
  }

  .form-submit:active {
    transform: translateY(0);
  }

  /* Success / error states (shown via JS after submission) */
  .form-notice {
    display: none;
    padding: 0.75rem 1rem;
    font-size: 0.88rem;
    line-height: 1.5;
  }

  .form-notice.success {
    background: var(--teal-light);
    color: var(--success);
    border-left: 3px solid var(--teal);
  }

  .form-notice.error {
    background: #fdf0f0;
    color: var(--error);
    border-left: 3px solid var(--error);
  }

  .required-note {
    font-size: 0.75rem;
    color: var(--ink-muted);
    margin-top: -0.4rem;
  }
</style>

<div class="contact-page">

  <p class="contact-eyebrow">Contact</p>
  <h1 class="contact-title">Get in touch</h1>
  <p class="contact-intro">
    Have a question or want to book a session? We'd love to hear from you, whether you're a student, parent, or just curious about how tutoring might help.
  </p>
  <span class="contact-availability">Typically responds within 24 hours</span>

  <div class="contact-layout">

    <!-- ── Left: contact info ── -->
    <aside>
      <p class="info-section-label">Contact details</p>

      <div class="info-item">
        <p class="info-item-label">Email</p>
        <p class="info-item-value">
          <!-- REPLACE with your real email address -->
          <a href="mailto:lovelacetutoring@gmail.com">lovelacetutoring@gmail.com</a>
        </p>
      </div>

      <div class="info-item">
        <p class="info-item-label">Sessions</p>
        <p class="info-item-value">1-to-1 · Maths &amp; CS<br>
          <span style="font-size:0.85rem; color:var(--ink-muted);">GCSE · A-Level · IB · University</span>
        </p>
      </div>

      <div class="divider-line"></div>

      <!-- REPLACE href with your real LinkedIn URL -->
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" class="social-link">
        <span class="li-badge">in</span>
        LinkedIn
      </a>
    </aside>

<!-- ── Right: form ── -->
    <div>
      <!--
        WEB3FORMS SETUP (2 steps):
        1. Go to https://web3forms.com and enter your email to get a free access key
        2. Replace YOUR_ACCESS_KEY below with that key. That's it!
      -->
      <form
        id="contact-form"
        class="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >

        <div class="form-row">
          <div class="form-group">
            <label for="name">Name <span style="color:var(--gold-dark)">*</span></label>
            <input type="text" id="name" name="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email <span style="color:var(--gold-dark)">*</span></label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required>
          </div>
        </div>

        <div class="form-group">
          <label for="subject">Subject <span style="color:var(--gold-dark)">*</span></label>
          <div class="select-wrapper">
            <select id="subject" name="subject" required>
              <option value="" disabled selected>Select a topic…</option>
              <option value="book-session">Book a session</option>
              <option value="general">General enquiry</option>
              <option value="pricing">Pricing &amp; availability</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message <span style="color:var(--gold-dark)">*</span></label>
          <textarea id="message" name="message" placeholder="Tell me a bit about what you're looking for…" required></textarea>
        </div>

        <p class="required-note"><span style="color:var(--gold-dark)">*</span> Required fields</p>

        <!-- Web3Forms access key — REPLACE with your own key from https://web3forms.com -->
        <input type="hidden" name="access_key" value="29b2555b-6459-40d5-86f0-8ceb5d07d8b1">

        <!-- Subject line of the email you'll receive -->
        <input type="hidden" name="subject" value="New message from tutoring site">

        <!-- Honeypot anti-spam (hidden from real users) -->
        <input type="checkbox" name="botcheck" style="display:none">

        <div class="form-notice" id="form-notice"></div>

        <button type="submit" class="form-submit">Send message →</button>

      </form>
    </div>

  </div>
</div>

<script>
  var form = document.getElementById('contact-form');
  var notice = document.getElementById('form-notice');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(res) {
      notice.style.display = 'block';
      if (res.ok) {
        notice.className = 'form-notice success';
        notice.textContent = 'Message sent! I\'ll be in touch within 24 hours.';
        form.reset();
      } else {
        notice.className = 'form-notice error';
        notice.textContent = 'Something went wrong. Please try emailing me directly.';
      }
    })
    .catch(function() {
      notice.style.display = 'block';
      notice.className = 'form-notice error';
      notice.textContent = 'Could not send the message. Please try emailing me directly.';
    });
  });
</script>
