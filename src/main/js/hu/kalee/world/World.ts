/**
 * Description of environment.
 */
class World {
    private livingSpace: Array<Thing>;
    private capacity: number;
    private possiblePartners: Array<Thing>; // Array<SexualThing>

    constructor(capacity: number, things: Array<Thing>) {
        this.capacity = capacity;
        this.livingSpace = things;
    }

    public nextSeason() {
        this.possiblePartners = this.gatherPossiblePartners();
        let temp: Array<Thing> = [];

        let actual: Thing;
        for(let i = 0; i< this.livingSpace.length; i++) {
            actual = this.livingSpace[i];
            if(actual.isFit(this.calculateFitnessForLive() + 10)) {
                temp.push(actual);
                if (actual.isFit(this.calculateFitnessForReproduce())) {
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
    }

    private gatherPossiblePartners(): Array<Thing> {
        return this.livingSpace.filter((thing) => {return thing instanceof SexualThing})
    }

    private getPartner(actual: SexualThing): SexualThing {
        let others = this.possiblePartners.filter((item) => {return item !== actual});
        return <SexualThing>others[Math.floor(Math.random() * others.length)];
    }

    private calculateFitnessForLive(): number {
        const minimum = 20;
        let result = minimum;
        const excess = this.livingSpace.length - this.capacity;

        if (excess > 0) {
            result = this.livingSpace.length / this.capacity;
        }

        return result;
    }

    private calculateFitnessForReproduce(): number {
        const minimum = 50;
        let result = minimum;
        const excess = this.livingSpace.length - this.capacity;

        if (excess > 0) {
            result = 80;
        }

        return result;
    }

    getStatus(): Array<Thing> {
        return this.livingSpace;
    }

    setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
}
