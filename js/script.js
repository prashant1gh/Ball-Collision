const totalBall = 50;
var balls = []

var canvas = document.getElementById("my-canvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var ctx = canvas.getContext("2d");

function Ball(xpos, ypos, radius, color, xvel, yvel) {
    var self = this;
    self.xpos = xpos;
    self.ypos = ypos;
    self.radius = radius;
    self.fill = color;
    self.xvel = xvel;
    self.yvel = yvel;
    self.mass = 1;


    self.display = function() {
        ctx.beginPath()
        ctx.fillStyle = self.fill;
        ctx.arc(self.xpos, self.ypos, self.radius, 0, 360);
        ctx.fill();
    };


    self.move = function() {
        if (self.xpos < 0 + self.radius || self.xpos + self.radius > 1500) {
            self.xvel = self.xvel * -1;
        }

        if (self.ypos < 0 + self.radius || self.ypos + self.radius > 700) {
            self.yvel = self.yvel * -1;
        }

        self.xpos += self.xvel;
        self.ypos += self.yvel;
    }


    self.checkCollisionOtherBall = function(objs) {
        objs.forEach(function(obj) {
            dx = self.xpos - obj.xpos
            dy = self.ypos - obj.ypos
            var distanceCenters = Math.sqrt(dx * dx + dy * dy)
            var sumRadius = self.radius + obj.radius;
            if (sumRadius > distanceCenters) {
                self.xvel = self.xvel * -1;
                self.yvel = self.yvel * -1;
            }
        });
    }

}

for (let i = 0; i < totalBall; i++) {
    var xpos = getRandomRangeInt(30, 1400);
    var ypos = getRandomRangeInt(30, 600);
    var radius = getRandomRangeInt(10, 11);
    var color = generateColor();


    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var xvel = plusOrMinus * getRandomInt(5);
    var yvel = plusOrMinus * getRandomInt(5);
    ball = new Ball(xpos, ypos, radius, color, xvel, yvel);
    balls.push(ball)
}

function animate() {
    ctx.clearRect(0, 0, 1500, 700);

    balls.forEach(function(ball) {
        ball.move();
        ball.checkCollisionOtherBall(removeBall(ball, balls))
        ball.display();
    });

    requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);