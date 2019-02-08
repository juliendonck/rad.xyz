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
  var prog = document.querySelectorAll("#prog .overlay")
  var term = document.querySelectorAll("#term .overlay")

  var peer = document.querySelectorAll("#peer .overlay")
  var t = 0;
  let then = Date.now();
  const interval = 120;
  let elapsed;

  function type() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > interval) {
      peer[t].setAttribute("style", "display: none");

      if(t < peer.length-1) {
        peer[t+1].setAttribute("style", "display: block");
        t++;
      } else {
        t = 0;
      };

      then = now - (elapsed % interval);
    }

    requestAnimationFrame(type);
  }

  requestAnimationFrame(type);
});
