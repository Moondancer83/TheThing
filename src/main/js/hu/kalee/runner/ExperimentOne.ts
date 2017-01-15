/**
 * Most basic experiment.
 *
 * @Environment: laboratory
 * @Hosts: AgamicThing
 * @Resources: constatntly enough for <capacity> number of hosts
 */
class ExperimentOne extends AbstractExperiment implements Experiment {
    private capacity: number = 50;
    private hosts: Array<AgamicThing> = [];

    constructor(selector: string, initial: number) {
        super();
        for (let i = 0; i < initial; i++) {
            let color = ExperimentOne.generateRandomColor();
            this.hosts.push(new AgamicThing(color));
        }
        this.runner = new Runner(selector, this.capacity, this.hosts);
    }

    private static generateRandomColor(): string {
        let red = ExperimentOne.randomEightBit().toString(16);
        let green = ExperimentOne.randomEightBit().toString(16);
        let blue = ExperimentOne.randomEightBit().toString(16);
        return "#" + red + green + blue;
    }

    private static randomEightBit(): number {
        return Math.floor(Math.random() * 255);
    }
}