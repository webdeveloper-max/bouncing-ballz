
    // Gravity
    const GRAVITY = 1;
    // Dampening effect
    const FRICTION = 0.99;

    let canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');

    // Array to store all circles
    let circles = [];
    let lastTime = 0;


function tick(time) {

    let deltaTime = time - lastTime;

    lastTime = time;


    for (const circle of circles) {

        circle.update(deltaTime);

    }

    drawCircles();

    requestAnimationFrame(tick);

}

    // Circle constructor
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      };

      this.update = function() {
        this.draw();
        this.dy += GRAVITY;
        this.x += this.dx;
        this.y += this.dy;

        // Collision detection
        if (this.y + this.radius > canvas.height) {
          this.dy = -this.dy * FRICTION;
        }
      };
    }

    canvas.addEventListener('click', function(event) {
      let x = event.clientX;
      let y = event.clientY;
      let dx = Math.random() * 5 - 2.5;
      let dy = -Math.random() * 5;
      let radius = Math.random() * 30 + 10;

      circles.push(new Circle(x, y, dx, dy, radius));
    });

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < circles.length; i++) {
        circles[i].update();
      }

      requestAnimationFrame(gameLoop);
    }

    gameLoop();
 