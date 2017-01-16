///<reference path="Thing.ts"/>

/**
 * Most basic Thing.
 * Can only reproduce itself with asexual division.
 */
class AgamicThing extends AbstractThing implements Thing {
    constructor(color: string, fitness?: number) {
        super(color, fitness);
    }

    proliferate(): Array<Thing> {
        return [new AgamicThing(this.getColor()), new AgamicThing(this.getColor())];
    }

    feed(nutrition: Array<any>): void {
    }
}
