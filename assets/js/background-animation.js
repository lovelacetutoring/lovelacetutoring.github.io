/* background-animation.js
   Drifting geometric polygons with connecting edges.
   Add to your repo at /assets/js/background-animation.js
   Then reference it in _includes/head.html or before </body> in your layout.
*/

(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.cssText = [
    'position:fixed',
    'top:0', 'left:0',
    'width:100%', 'height:100%',
    'z-index:-1',
    'pointer-events:none'
  ].join(';');
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');

  // ── Colours matching the site palette ──
  const COLOURS = [
    'rgba(29,107,92,',   // teal
    'rgba(200,168,75,',  // gold
    'rgba(15,82,68,'     // dark teal
  ];

  // ── Settings ──
  const COUNT        = 18;   // number of polygons
  const MIN_SIDES    = 3;
  const MAX_SIDES    = 6;
  const MIN_RADIUS   = 18;
  const MAX_RADIUS   = 52;
  const MIN_SPEED    = 0.08;
  const MAX_SPEED    = 0.28;
  const EDGE_DIST    = 180;  // max distance to draw an edge between polygons
  const POLY_OPACITY = 0.13; // fill opacity
  const EDGE_OPACITY = 0.07; // edge opacity
  const STROKE_OPACITY = 0.18;
  const ROTATION_SPEED = 0.0008;

  let W, H, polys;

  function rand(min, max) { return min + Math.random() * (max - min); }
  function randInt(min, max) { return Math.floor(rand(min, max + 1)); }

  function makePolygon() {
    const colour = COLOURS[randInt(0, COLOURS.length - 1)];
    return {
      x:       rand(0, W),
      y:       rand(0, H),
      r:       rand(MIN_RADIUS, MAX_RADIUS),
      sides:   randInt(MIN_SIDES, MAX_SIDES),
      angle:   rand(0, Math.PI * 2),
      rotDir:  Math.random() > 0.5 ? 1 : -1,
      vx:      rand(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
      vy:      rand(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
      colour:  colour
    };
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    if (!polys) {
      polys = Array.from({ length: COUNT }, makePolygon);
    }
  }

  function drawPoly(p) {
    ctx.beginPath();
    for (let i = 0; i < p.sides; i++) {
      const a = p.angle + (i / p.sides) * Math.PI * 2;
      const x = p.x + p.r * Math.cos(a);
      const y = p.y + p.r * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle   = p.colour + POLY_OPACITY + ')';
    ctx.strokeStyle = p.colour + STROKE_OPACITY + ')';
    ctx.lineWidth   = 1;
    ctx.fill();
    ctx.stroke();
  }

  function drawEdges() {
    for (let i = 0; i < polys.length; i++) {
      for (let j = i + 1; j < polys.length; j++) {
        const a = polys[i], b = polys[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < EDGE_DIST) {
          const alpha = EDGE_OPACITY * (1 - dist / EDGE_DIST);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(29,107,92,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    polys.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += ROTATION_SPEED * p.rotDir;

      // Wrap around edges
      if (p.x < -p.r)  p.x = W + p.r;
      if (p.x > W + p.r) p.x = -p.r;
      if (p.y < -p.r)  p.y = H + p.r;
      if (p.y > H + p.r) p.y = -p.r;
    });
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    drawEdges();
    polys.forEach(drawPoly);
    update();
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();
})();