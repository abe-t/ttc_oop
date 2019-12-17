class San {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveRight(speed) {
        this.x += speed;
    }
}

class Asan extends San{
    constructor(x, y){
        super(x, y);
    }
}

class Bsan extends San{
    constructor(x, y){
        super(x, y);
    }
}

var a_san = new Asan(50, 100);
var b_san = new Bsan(0, 100);

function setup() {
    createCanvas(200, 200);
}

function draw() {
  // 道
  line(0, 100, 200, 100);
  // 駅
  ellipse(150, 100, 50, 50);
  // Bさん
  ellipse(b_san.x, b_san.y, 10, 10);
  // Aさん
  ellipse(a_san.x, a_san.y, 10, 10);
  a_san.moveRight(1);
  b_san.moveRight(1.5);
}

