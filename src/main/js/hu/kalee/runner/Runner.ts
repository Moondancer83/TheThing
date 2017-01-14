class Runner {
    private capacity: number;
    private hosts: Array<Thing>;

    private environment: World;
    private renderer: Renderer;

    constructor(selector: string, capacity: number, hosts: Array<Thing>) {
        this.capacity = capacity;
        this.hosts = hosts;

        this.renderer = new Renderer(selector);
        this.environment = new World(capacity, hosts);

        this.renderer.render(this.environment.getStatus());
    }

    public run() {
        this.environment.nextSeason();
        this.renderer.render(this.environment.getStatus());
    }

    public reset() {
        this.environment = new World(this.capacity, this.hosts);
        this.renderer.render(this.environment.getStatus());
    }

    public setCapacity(capacity: number): void {
        this.environment.setCapacity(capacity);
    }
}
