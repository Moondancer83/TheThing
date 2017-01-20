/**
 * Ecological experiment with carnivores.
 *
 * @Environment: laboratory
 * @Hosts: AgamicThing
 * @Resources: constantly enough for <capacity> number of autotrof hosts,
 *  heterotrof hosts are fed on autotrof ones,
 *  carnivore hosts feed on heterotrof ones.
 */
class ExperimentThree extends AbstractExperiment implements Experiment {
    private capacity: number = 200;
    private hosts: Array<AgamicThing> = [];

    constructor(selector: string, autotrof: number, heterotrof: number, carnivore: number) {
        super();
        for (let i = 0; i < autotrof; i++) {
            let color = "#009900";
            this.hosts.push(new AutotrofThing(color, 1, ExperimentThree.generateFitness()));
        }
        for (let i = 0; i < heterotrof; i++) {
            let color = "#0088FF";
            this.hosts.push(new HeterotrofThing(color, 1, ExperimentThree.generateFitness()));
        }
        for (let i = 0; i < carnivore; i++) {
            let color = "#DD0000";
            this.hosts.push(new CarnivoreThing(color, 4, ExperimentThree.generateFitness()));
        }
        this.runner = new Runner(selector, this.capacity, this.hosts.sort(AbstractThing.compareDesc));
    }

    static generateFitness(): number {
        return Math.floor(Math.random() * 20) + 80;
    }
}
