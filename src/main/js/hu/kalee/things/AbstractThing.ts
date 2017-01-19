abstract class AbstractThing implements Thing {
    private color:string;
    private fitness:number;
    /**
     * Number or pray need to consume to live.
     */
    private need: number;

    constructor(color: string, need?: number, fitness?: number) {
        this.color = color;
        this.fitness = fitness || Math.floor(Math.random() * 20) + 80;
        this.need = need || 1;
    }

    getColor(): string {
        return this.color;
    }

    getFitness(): number {
        return this.fitness;
    }

    public getNeed(): number {
        return this.need;
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

    public feed(nutrition: Array<any>): void {
        let id: number;
        let i: number = this.getNeed();
        for (; i > 0; i--) {
            if (nutrition.length <= 0) {
                this.starve();
            } else {
                this.consumeFood(nutrition);
            }
        }
    }

    protected starve() {
        this.fitness -= 30;
    }

    protected abstract consumeFood(nutrition: Array<any>): void;
}
