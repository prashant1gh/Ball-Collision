var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

function Ball(xpos, ypos, radius, color, xvel, yvel) {
    var self = this;
    self.xpos = xpos;
    self.ypos = ypos;
    self.radius = radius;
    self.fill = color;
    self.xvel = xvel;
    self.yvel = yvel;


    self.display = function() {
        ctx.beginPath()
        ctx.fillStyle = self.fill;
        ctx.arc(self.xpos, self.ypos, self.radius, 0, 360);
        ctx.fill();
    };

    self.move = function() {

        if (self.xpos < 0 || self.xpos > 1500) {
            self.xvel = self.xvel * -1;

        }

        if (self.ypos < 0 || self.ypos > 700) {
            self.yvel = self.yvel * -1;

        }

        self.xpos += self.xvel;
        self.ypos += self.yvel;
    }

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

function generateColor() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

    return `rgb(${red},${green},${blue})`;
}

var balls = []
for (let i = 0; i < 100; i++) {
    var xpos = getRandomInt(1500);
    var ypos = getRandomInt(700);
    var radius = getRandomInt(20);
    var color = generateColor();


    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var xvel = plusOrMinus * getRandomInt(10);
    var yvel = plusOrMinus * getRandomInt(10);
    ball = new Ball(xpos, ypos, radius, color, xvel, yvel);
    balls.push(ball)
}


function animate() {
    ctx.clearRect(0, 0, 1500, 700);

    balls.forEach(function(ball) {
        ball.move();
        ball.display();
    });

    requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);


// ball.move()