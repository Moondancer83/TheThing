/**
 * Ecological experiment.
 *
 * @Environment: laboratory
 * @Hosts: AgamicThing
 * @Resources: constantly enough for <capacity> number of autotrof hosts,
 *  heterotrof hosts are fed on autotrof ones.
 */
class ExperimentTwo extends AbstractExperiment implements Experiment {
    private capacity: number = 50;
    private hosts: Array<AgamicThing> = [];

    constructor(selector: string, autotrof: number, heterotrof: number) {
        super();
        for (let i = 0; i < autotrof; i++) {
            let color = "#009900";
            this.hosts.push(new AutotrofThing(color));
        }
        for (let i = 0; i < heterotrof; i++) {
            let color = "#DD0000";
            this.hosts.push(new HeterotrofThing(color));
        }
        this.runner = new Runner(selector, this.capacity, this.hosts);
    }
}
