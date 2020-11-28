export class Sun {
    constructor() {
        this.radius = 200;

        this.total = 60;
        this.gap = 1 / this.total;
        this.originPos = [];
        this.pos = [];
        for (let i = 0; i < this.total; i++) {
            const pos = this.getCirclePoint(this.radius, this.gap * i);
            this.originPos[i] = pos;
            this.pos[i] = pos;
        }
    }


    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.x = this.stageWidth - this.radius - 140;
        this.y = this.radius + 100;
    }

    draw(ctx, t) {
        ctx.fillStyle = '#ffb200';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    getCirclePoint(radius, t) {
        const theta = Math.PI * 2 * t;

        return {
            x: (Math.cos(theta) * radius),
            y: (Math.sin(theta) * radius)
        };
    }
