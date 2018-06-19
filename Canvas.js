class Canvas2D {
    constructor() {
        this._canvas = document.getElementById('screen');
        this._canvasContext = this._canvas.getContext('2d');
    }

    clear() {
        // clear canvas
        this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    drawImage(image, position) {
        this._canvasContext.drawImage(image, position.x, position.y);
    }
}

// instantiate object canvas 2D
let Canvas = new Canvas2D();

// testing using image
let image = new Image();
image.src = './assets/sprites/spr_background4.png';

setTimeout(() => {
    Canvas.drawImage(image, {x: 0, y:0});
}, 1000);
