/**
 * Carnivore.
 * Eating animals (HeterotrofThing)
 */
class CarnivoreThing extends AgamicThing {
    proliferate(): Array<Thing> {

        let children = [new CarnivoreThing(this.getColor()), new CarnivoreThing(this.getColor())];
        return children;
    }

    protected consumeFood(nutrition: Array<Thing>): void {
        console.error("hunt")
        let prey: Thing = this;
        let id: number;

        while (prey === this && prey instanceof HeterotrofThing) {
            id = Math.floor(Math.random() * nutrition.length);
            prey = nutrition[id];
        }
        nutrition.splice(id, 1);
    }
}