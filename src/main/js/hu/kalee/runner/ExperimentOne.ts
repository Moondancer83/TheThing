/**
 * Most basic experiment.
 *
 * @Environment: laboratory
 * @Hosts: AgamicThing
 * @Resources: constatntly enough for <capacity> number of hosts
 */
class ExperimentOne {
    private runner: Runner;
    private capacity: number = 50;
    private hosts: Array<AgamicThing> = [];

    constructor(selector: string, initial: number) {
        for (let i = 0; i < initial; i++) {
            let color = ExperimentOne.generateRandomColor();
            this.hosts.push(new AgamicThing(color));
        }
        this.runner = new Runner(selector, this.capacity, this.hosts);
    }

    public run(): void {
        this.runner.run();
    }

    public reset(): void {
        this.runner.reset();
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