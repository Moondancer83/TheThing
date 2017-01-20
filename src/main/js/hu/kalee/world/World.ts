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

        // Make the fits feed.
        temp = this.letsHaveLunch(this.livingSpace);

        // Get all fits.
        result = this.liveOrLetDie(temp);

        // Make the fits reproduce.
        result = this.doSomeBaby(result);

        this.livingSpace = this.handlingCapacity(result);
        this.fitnessForLive = this.calculateFitnessForLive();
        this.fitnessForReproduce = this.calculateFitnessForReproduce();
    }

    private liveOrLetDie(things: Array<Thing>): Array<Thing> {
        let actual: Thing;
        let result: Array<Thing> = [];
        for (let i = 0; i < things.length; i++) {
            actual = things[i];
            if (actual.isFit(this.fitnessForLive)) {
                result.push(actual);
                actual.age();
            }
        }
        return result;
    }

    private letsHaveLunch(things: Array<Thing>): Array<Thing> {
        let result: Array<Thing>;
        let actual: Thing;
        let temp2 = [].concat(things);
        let naturalResources: Array<number> = this.getResources(this.capacity);

        while (temp2.length > 0) {
            actual = temp2[0];
            if (actual instanceof AutotrofThing) {
                actual.feed(naturalResources);
            } else if(actual instanceof HeterotrofThing) {
                actual.feed(things);
            } else if(actual instanceof CarnivoreThing) {
                actual.feed(things);
            }
            temp2.splice(0, 1);
        }
        result = [].concat(things);
        return result;
    }

    private getResources(capacity: number): Array<number> {
        let result: Array<number> = [];
        // result = Array(capacity).fill(1);
        for (let i = 0; i < this.capacity; i++) {
            result.push(1);
        }
        return result;
    }

    private doSomeBaby(temp: Array<Thing>) {
        let result: Array<Thing> = [].concat(temp);
        let actual: Thing;

        for (let i = 0; i < temp.length; i++) {
            actual = temp[i];

            if (actual.isFit(this.fitnessForReproduce)) {
                console.info("reproduce", actual)
                if (actual instanceof SexualThing) {
                    let partner: SexualThing = this.getPartner(<SexualThing>actual);
                    result = result.concat(actual.proliferate(partner));
                }
                else {
                    result = result.concat(actual.proliferate());
                }
            }
        }
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
        return 50;
    }

    private calculateFitnessForReproduce(): number {
        return 70;
    }

    getStatus(): Status {
        return new Status(this.livingSpace, this.fitnessForLive, this.fitnessForReproduce);
    }

    setCapacity(capacity: number): void {
        this.capacity = capacity;
    }

    private handlingCapacity(list: Array<Thing>): Array<Thing> {
        let result: Array<Thing>;
        let plants: Array<Thing> = list.filter((item) => {return item instanceof AutotrofThing;}).sort(AbstractThing.compareDesc);
        let animals: Array<Thing> = list.filter((item) => {return item instanceof HeterotrofThing}).sort(AbstractThing.compareDesc);
        let carnivores: Array<Thing> = list.filter((item) => {return item instanceof CarnivoreThing}).sort(AbstractThing.compareDesc);
        result = list.sort(AbstractThing.compareDesc);
        // result =  plants.concat(animals).concat(carnivores);
        console.info(result.length, plants.length, animals.length, carnivores.length)

        return result;
    }

    private shuffle( array: Array<any> ){
        let count = array.length,
            randomnumber,
            temp;
        while( count ){
            randomnumber = Math.random() * count-- | 0;
            temp = array[count];
            array[count] = array[randomnumber];
            array[randomnumber] = temp
        }
    }
}
