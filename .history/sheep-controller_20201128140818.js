export class SheepController {
    constructor() {
        this.img = new Image();
        this.img.onload = () => {
               this.loaded();
        };
        this.img.src = 'sheep.png';

        this.items = [];

        this.cur = 0;
        this.isLoaded = false;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    loaded() {

    }

    addSheep() {

    }

    draw(ctx, t, dots) {

    }
}