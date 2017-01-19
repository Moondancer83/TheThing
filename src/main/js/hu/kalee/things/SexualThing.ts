/**
 * Advanced Thing.
 * Can reproduce itself with sexual reproduction.
 */
class SexualThing extends AbstractThing implements Thing {
    constructor(color: string, need?: number, fitness?: number) {
        super(color, need, fitness);
    }
    proliferate(partner: Thing): Array<Thing> {
        let ownColor = this.getColor().replace("#", "");
        var partnerColor = partner.getColor().replace("#", "");

        var a = "#", b = "#";

        for (var i = 0; i < ownColor.length; i++) {
            if (Math.round(Math.random()) == 0) {
                a += ownColor[i];
                b += partnerColor[i];
            } else {
                a += partnerColor[i];
                b += ownColor[i];
            }
        }

        return [new SexualThing(a), new SexualThing(b)];
    }

    protected consumeFood(nutrition: Array<any>): void {
    }
}
