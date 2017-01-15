abstract class AbstractThing implements Thing {
    private color:string;
    private fitness:number;


    constructor(color: string, fitness?: number) {
        this.color = color;
        this.fitness = fitness || Math.floor(Math.random() * 80) + 20;
    }

    getColor(): string {
        return this.color;
    }

    getFitness(): number {
        return this.fitness;
    }

    isFit(target:number): boolean {
        return this.fitness >= target;
    }

    abstract proliferate(partner?: Thing): Array<Thing>;

    age(): void {
        this.fitness -= 10;
    }

    static compareAsc(a: Thing, b: Thing): number {
        return a.getFitness() - b.getFitness();
    }

    static compareDesc(a: Thing, b: Thing): number {
        return - AbstractThing.compareAsc(a, b);
    }
}