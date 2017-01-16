class AutotrofThing extends AgamicThing {

    proliferate(): Array<Thing> {
        console.log("reproduction: Autotrof", this.getFitness())
        return [new AutotrofThing(this.getColor()), new AutotrofThing(this.getColor())];
    }
}
