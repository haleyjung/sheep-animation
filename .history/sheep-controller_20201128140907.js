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
        this.isloaded = true;
        this.addSheep();
    }

    addSheep() {
        this.items.push(
                    new Sheep(this.img, this.stageWidth),
                );
    }

    draw(ctx, t, dots) {

    }
}