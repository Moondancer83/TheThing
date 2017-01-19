class HeterotrofThing extends AgamicThing {
    proliferate(): Array<Thing> {
        let children = [new HeterotrofThing(this.getColor()), new HeterotrofThing(this.getColor())];
        return children;
    }

    protected consumeFood(nutrition: Array<Thing>): void {
        let prey: Thing = this;
        let id: number;

        while (prey === this && prey instanceof AutotrofThing) {
            id = Math.floor(Math.random() * nutrition.length);
            prey = nutrition[id];
        }
        nutrition.splice(id, 1);
    }
}
