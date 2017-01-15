///<reference path="Thing.ts"/>

import {Thing} from "Thing";

/**
 * Most basic Thing.
 * Can only reproduce itself with asexual division.
 */
export default class AgamicThing implements Thing {
    private color:string;
    private fitness:number;

    constructor(color: string, fitness?: number) {
        this.color = color;
        this.fitness = fitness || Math.floor(Math.random() * 80) + 20;
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
