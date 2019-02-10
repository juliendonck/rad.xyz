document.addEventListener('DOMContentLoaded', function () {
  let divider = document.getElementById('divider');
  let path = divider.querySelectorAll('path')[0];
  let width = divider.parentNode.clientWidth;

  let yoff = 0;

  let interval = 1000 / 30;
  let then = Date.now();
  let start = then;
  let elapsed;

  noise.seed(Math.random());

  function animate() {
    if (width !== divider.parentNode.clientWidth) {
      width = divider.parentNode.clientWidth;
      divider.setAttribute('viewBox', '0 0 ' + width + ' 500');
    }

    now = Date.now();
    elapsed = now - then;


    if (elapsed > interval) {
      let xoff = 0;
      let xs = [];

      for (var x = 0; x < width; x++) {
        let n = noise.perlin2(xoff, yoff)
        let y = 75 - (75 * n)

        xs.push([x, y]);

        xoff += 0.005;
      }

      yoff += 0.005;

      var d = 'M0,0 ' + width + ',0 ' + width + ',250 ' + xs.reverse().map(p => {
        return p[0] + ',' + p[1];
      }) + ' 0,250';

      path.setAttribute('d', d);

      then = now - (elapsed % interval);
    }

    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener('DOMContentLoaded', function () {
  const selectors = [
    "#peer h2",
    "#prog h2",
    "#term h2",
  ];
  const lines = [
    [
      "Pr",
      "Per",
      "Peer",
      "Peeer",
      "Peeeer",
      "Peeeeer",
      "Peeeeeer",
      "Peeeeeeer",
      "Peeeeeeeer",
      "Peeeeeeeeer",
      "Peeeeeeeeeer",
      "Peeeeeeeeeeer",
      "Peeeee—eeeer",
      "Peeee——eeeer",
      "Peee————eeer",
      "Peer————peer",
      "Peer—t——peer",
      "Peer–to–peer",
      "Peer–to–peer",
      "Peer–to–peer",
      "Peer–to–peer",
      "Peer–to–peer",
      "Peer–to–peer",
    ],
    [
      "–––––a––a–––",
      "–––––a––ab––",
      "–––––a––ab–e",
      "–––g–a––ab–e",
      "–––g–a––able",
      "–––g–ammable",
      "––og–ammable",
      "–rogrammable",
      "Programmable",
      "Programmable",
      "Programmable",
      "Programmable",
      "Programmable",
    ],
    [
        "&gt;",
        "&gt;▌",
        "&gt;T",
        "&gt;Te▌",
        "&gt;Ter",
        "&gt;Term▌",
        "&gt;Termi",
        "&gt;Termin▌",
        "&gt;Termina",
        "&gt;Terminal▌",
        "&gt;Terminal–",
        "&gt;Terminal–f▌",
        "&gt;Terminal–fi",
        "&gt;Terminal–fir▌",
        "&gt;Terminal–firs",
        "&gt;Terminal–first▌",
        "&gt;Terminal–first",
        "Terminal–first",
        "Terminal–first",
        "Terminal–first",
        "Terminal–first",
        "Terminal–first",
    ],
  ];

  const interval = 120;
  let then = Date.now();
  let elapsed;
  let idxLines = 0;
  let idxSelectors = 0;
  let currentEl = document.querySelector(selectors[idxSelectors]);
  let currentLines = lines[idxSelectors];

  function type() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > interval) {
      currentEl.innerHTML = currentLines[idxLines];
      then = now - (elapsed % interval);
      idxLines += 1;

      if (idxLines >= currentLines.length -1) {
        idxLines = 0;
        idxSelectors += 1;
      }

      if (idxSelectors >= selectors.length) {
        idxSelectors = 0;
      }

      if (idxLines === 0) {
        currentEl = document.querySelector(selectors[idxSelectors]);
        currentLines = lines[idxSelectors];
      }
    }

    requestAnimationFrame(type);
  }

  requestAnimationFrame(type);
});
