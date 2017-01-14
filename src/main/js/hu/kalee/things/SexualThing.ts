/**
 * Advanced Thing.
 * Can reproduce itself with sexual reproduction.
 */
class SexualThing implements Thing {
    private color: string;
    private fitness: number;

    constructor(color: string) {
        this.color = color;
        this.fitness = Math.floor(Math.random() * 80) + 20;
    }

    getColor(): string {
        return this.color;
    }

    getFitness(): number {
        return this.fitness;
    }

    isFit(target: number): boolean {
        return this.fitness >= target;
    }

    proliferate(partner: Thing): Array<Thing> {
        let ownColor = this.color.replace("#", "");
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

    age(): void {
        this.fitness -= 10;
    }
}
