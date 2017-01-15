import {Thing} from "../things/Thing";
import SexualThing from "../things/SexualThing";
import Status from "Status";

/**
 * Description of environment.
 */
export default class World {
    private livingSpace: Array<Thing>;
    private capacity: number;
    private possiblePartners: Array<Thing>; // Array<SexualThing>
    private fitnessForLive: number;
    private fitnessForReproduce: number;

    constructor(capacity: number, things: Array<Thing>) {
        this.capacity = capacity;
        this.livingSpace = things;

        this.fitnessForLive = this.calculateFitnessForLive();
        this.fitnessForReproduce = this.calculateFitnessForReproduce();
    }

    public nextSeason() {
        this.possiblePartners = this.gatherPossiblePartners();
        let temp: Array<Thing> = [];

        let actual: Thing;
        for(let i = 0; i< this.livingSpace.length; i++) {
            actual = this.livingSpace[i];
            if(actual.isFit(this.fitnessForLive + 10)) {
                temp.push(actual);
                if (actual.isFit(this.fitnessForReproduce)) {
                    if (actual instanceof SexualThing) {
                        let partner: SexualThing = this.getPartner(<SexualThing>actual);
                        temp = temp.concat(actual.proliferate(partner));
                    }
                    else {
                        temp = temp.concat(actual.proliferate());
                    }
                }
            }
            actual.age();
        }

        this.livingSpace = temp;

        this.fitnessForLive = this.calculateFitnessForLive();
        this.fitnessForReproduce = this.calculateFitnessForReproduce();
    }

    private gatherPossiblePartners(): Array<Thing> {
        return this.livingSpace.filter((thing) => {return thing instanceof SexualThing})
    }

    private getPartner(actual: SexualThing): SexualThing {
        let others = this.possiblePartners.filter((item) => {return item !== actual});
        return <SexualThing>others[Math.floor(Math.random() * others.length)];
    }

    private calculateFitnessForLive(): number {
        return this.livingSpace.length / this.capacity * 100;
    }

    private calculateFitnessForReproduce(): number {
        return (this.livingSpace.length / this.capacity * 100) + 20;
    }

    getStatus(): Status {
        return new Status(this.livingSpace, this.fitnessForLive, this.fitnessForReproduce);
    }

    setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
}
