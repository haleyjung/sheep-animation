export class Sheep {
    // stageWidth as the parameter because sheeps will appear from the right
    constructor(img, stageWidth) {
        this.img = img;

        // total frames of the exported img
        this.totalFrame = 8;
        this.curFrame = 0;

        // size of the single img
        this.imgWidth = 360;
        this.imgHeight = 300;

        // half the size for the displayed img concerning the retina display
        this.sheepWidth = 180;
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;

        this.fps = 24;
        this.fpsTime = 1000 / this.fps;
    } 

    draw(ctx, t, dots) {
        if (!this.time) {
            this.time = t;
        }

        //increase frames only until it reaches the fpsTime I have set
        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;
            this.curFrame += 1;
            if (this.curFrame == this.totalFrame) {
                this.curFrame = 0;
            }
        }

        this.animate(ctx, dots);
    }

    animate(ctx, dots) {
        this.x = 650;
        this.y = 550;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000000';

        // Pre-draw a black box for a test run
        // ctx.fillRect(
        //     // x: half of the width to anchor the bottom center
        //     -this.sheepWidthHalf,
        //     // y: height + extra white space of the img
        //     -this.sheepHeight + 20,
        //     this.sheepWidth,
        //     this.sheepHeight
        // );

        ctx.drawImage(
            this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        );
        ctx.restore();
    }

}