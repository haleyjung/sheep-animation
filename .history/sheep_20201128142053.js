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
        this.animate(ctx, dots);
    }

    animate(ctx, dots) {

    }

}