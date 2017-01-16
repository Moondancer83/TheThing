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
        let temp: Array<Thing> = [];
        let result: Array<Thing> = [];
        let actual: Thing;
        // Get all fits.
        this.liveOrLetDie(actual, temp);

        // Make the fits feed.
        result = this.letsHaveLunch(temp);

        // Make the fits reproduce.
        this.doSomeBaby(result);

        this.livingSpace = result.sort(AbstractThing.compareDesc).slice(0, this.capacity);
        this.fitnessForLive = this.calculateFitnessForLive();
        this.fitnessForReproduce = this.calculateFitnessForReproduce();
    }

    private doSomeBaby(temp: Array<Thing>) {
        let result: Array<Thing> = [].concat(temp);
        let actual: Thing;

        for (let i = 0; i < temp.length; i++) {
            actual = temp[i];

            if (actual.isFit(this.fitnessForReproduce)) {
                if (actual instanceof SexualThing) {
                    let partner: SexualThing = this.getPartner(<SexualThing>actual);
                    result = temp.concat(actual.proliferate(partner));
                }
                else {
                    result = temp.concat(actual.proliferate());
                }
            }
        }
        return result;
    }

    private letsHaveLunch(temp: Array<Thing>): Array<Thing> {
        console.info(temp)
        let result: Array<Thing>;
        let actual: Thing;
        let temp2 = [].concat(temp);

        while (temp2.length > 0) {
            actual = temp2[0];
            console.info("feed", actual);

            actual.feed(temp);
            temp2.splice(0, 1);
        }
        result = [].concat(temp);

        return result;
    }

    private liveOrLetDie(actual: Thing, temp: Array<Thing>) {
        for (let i = 0; i < this.livingSpace.length; i++) {
            actual = this.livingSpace[i];
            console.info("isFitToLive", actual)
            if (actual.isFit(this.fitnessForLive)) {
                temp.push(actual);
                actual.age();
            }
        }
        return actual;
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
