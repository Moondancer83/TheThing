abstract class AbstractExperiment implements Experiment {
    protected runner: Runner;

    public run(): void {
        this.runner.run();
    }

    public reset(): void {
        this.runner.reset();
    }
}
