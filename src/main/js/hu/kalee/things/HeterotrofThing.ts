class HeterotrofThing extends AgamicThing {
    /**
     * Number or pray need to consume to live.
     */
    private need: number = 1;

    public getNeed(): number {
        return this.need;
    }

    proliferate(): Array<Thing> {
        let children = [new HeterotrofThing(this.getColor()), new HeterotrofThing(this.getColor())];
        console.log("reproduction: Heterotrof", this.getFitness(), children)
        return children;
    }

    public feed(nutrition: Array<Thing>): void {
        let prey: Thing = this;
        let id: number;
        while (prey === this) {
            id = Math.floor(Math.random() * nutrition.length);
            prey = nutrition[id];
        }
        console.error(this, "eats", nutrition[id]);
        nutrition.splice(id, 1);
    }
}
