class AutotrofThing extends AgamicThing {

    proliferate(): Array<Thing> {
        let children: Array<Thing> = [new AutotrofThing(this.getColor()), new AutotrofThing(this.getColor())];
        console.log("reproduction: Autotrof", this.getFitness(), children)
        return children;
    }
}
