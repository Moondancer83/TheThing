/**
 * Description of environment.
 */
class World {
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
        let temp: Array<Thing>;
        let result: Array<Thing>;
        // Get all fits.
        temp = this.liveOrLetDie();

        // Make the fits feed.
        result = this.letsHaveLunch(temp);

        // Make the fits reproduce.
        result = this.doSomeBaby(result);

        this.livingSpace = result.sort(AbstractThing.compareDesc).slice(0, this.capacity);
        this.fitnessForLive = this.calculateFitnessForLive();
        this.fitnessForReproduce = this.calculateFitnessForReproduce();
    }

    private doSomeBaby(temp: Array<Thing>) {
        let result: Array<Thing> = [].concat(temp);
        console.info(result.length)
        let actual: Thing;

        for (let i = 0; i < temp.length; i++) {
            actual = temp[i];

            if (actual.isFit(this.fitnessForReproduce)) {
                if (actual instanceof SexualThing) {
                    let partner: SexualThing = this.getPartner(<SexualThing>actual);
                    result = result.concat(actual.proliferate(partner));
                }
                else {
                    result = result.concat(actual.proliferate());
                }
            }
        }
        console.warn("After reproduction: ", result.length)
        return result;
    }

    private letsHaveLunch(temp: Array<Thing>): Array<Thing> {
        let result: Array<Thing>;
        let actual: Thing;
        let temp2 = [].concat(temp);

        while (temp2.length > 0) {
            actual = temp2[0];
            actual.feed(temp);
            temp2.splice(0, 1);
        }
        result = [].concat(temp);
        console.log("After lunch: ", result.length)
        return result;
    }

    private liveOrLetDie(): Array<Thing> {
        let actual: Thing;
        let result: Array<Thing> = [];
        console.info("Start: ", this.livingSpace.length)
        for (let i = 0; i < this.livingSpace.length; i++) {
            actual = this.livingSpace[i];
            if (actual.isFit(this.fitnessForLive)) {
                result.push(actual);
                actual.age();
            }
        }
        console.log("After dieing: ", result.length)
        return result;
    }

    private gatherPossiblePartners(): Array<Thing> {
        return this.livingSpace.filter((thing) => {
            return thing instanceof SexualThing
        })
    }

    private getPartner(actual: SexualThing): SexualThing {
        let others = this.possiblePartners.filter((item) => {
            return item !== actual
        });
        return <SexualThing>others[Math.floor(Math.random() * others.length)];
    }

    private calculateFitnessForLive(): number {
        return 11;
    }

    private calculateFitnessForReproduce(): number {
        return 30;
    }

    getStatus(): Status {
        return new Status(this.livingSpace, this.fitnessForLive, this.fitnessForReproduce);
    }

    setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
}
