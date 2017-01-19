///<reference path="Thing.ts"/>

/**
 * Most basic Thing.
 * Can only reproduce itself with asexual division.
 */
class AgamicThing extends AbstractThing implements Thing {
    constructor(color: string, need?: number, fitness?: number) {
        super(color, need, fitness);
    }
    proliferate(): Array<Thing> {
        return [new AgamicThing(this.getColor()), new AgamicThing(this.getColor())];
    }

    protected consumeFood(nutrition: Array<any>): void {
    }
}
