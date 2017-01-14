///<reference path="Thing.ts"/>

/**
 * Most basic Thing.
 * Can only reproduce itself with asexual division.
 */
class AgamicThing implements Thing {
    private color:string;
    private fitness:number;

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

    isFit(target:number): boolean {
        return this.fitness >= target;
    }

    proliferate(): Array<Thing> {
        return [new AgamicThing(this.color), new AgamicThing(this.color)];
    }

    age(): void {
        this.fitness -= 10;
    }
}
