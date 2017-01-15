import {Thing} from "../things/Thing";
import World from "../world/World";
import Renderer from "Renderer";
import AgamicThing from "../things/AgamicThing";
import SexualThing from "../things/SexualThing";

export default class Runner {
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

    public run(): void {
        this.environment.nextSeason();
        this.renderer.render(this.environment.getStatus());
    }

    public reset(): void {
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
                result.push(new AgamicThing(item.getColor(), item.getFitness()));
            } else {
                result.push(new SexualThing(item.getColor(), item.getFitness()));
            }
        });

        return result;
    }
}
