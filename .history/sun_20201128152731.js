export class Sun {
    constructor() {
        this.radius = 200;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.x = this.stageWidth - this.radius - 140;
        this.y = this.radius + 100;
    }

    draw(ctx, t) {
        
    }
}