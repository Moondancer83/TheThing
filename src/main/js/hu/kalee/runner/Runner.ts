class Runner {
    private capacity: number;
    private hosts: Array<Thing>;

    private environment: World;
    private renderer: Renderer;

    constructor(selector: string, capacity: number, hosts: Array<Thing>) {
        this.capacity = capacity;
        this.hosts = hosts;

        this.renderer = new Renderer(selector);
        this.environment = new World(capacity, this.cloneHosts(hosts));

        this.renderer.render(this.environment.getStatus());
    }

    public run() {
        this.environment.nextSeason();
        this.renderer.render(this.environment.getStatus());
    }

    public reset() {
        this.environment = new World(this.capacity, this.cloneHosts(this.hosts));
        this.renderer.render(this.environment.getStatus());
    }

    public setCapacity(capacity: number): void {
        this.environment.setCapacity(capacity);
    }

    private clone(toClone: any): any {
        return JSON.parse(JSON.stringify(toClone));
    }

    private cloneHosts(list: Array<Thing>): Array<Thing> {
        let result: Array<Thing> = [];
        list.forEach((item) => {
            if (item instanceof AgamicThing) {
                if (item instanceof AutotrofThing) {
                    result.push(new AutotrofThing(item.getColor(), item.getNeed(), item.getFitness()));
                } else if (item instanceof HeterotrofThing) {
                    result.push(new HeterotrofThing(item.getColor(), item.getNeed(), item.getFitness()));
                } else {
                    result.push(new AgamicThing(item.getColor(), item.getNeed(), item.getFitness()));
                }
            } else {
                result.push(new SexualThing(item.getColor(), item.getNeed(), item.getFitness()));
            }
        });

        return result;
    }
}
