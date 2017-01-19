class AutotrofThing extends AgamicThing {

    proliferate(): Array<Thing> {
        let children: Array<Thing> = [new AutotrofThing(this.getColor()), new AutotrofThing(this.getColor())];
        return children;
    }

    protected consumeFood(nutrition: Array<number>): void {
        let id: number;
        id = Math.floor(Math.random() * nutrition.length);
        nutrition.splice(id, 1);
    }
}
