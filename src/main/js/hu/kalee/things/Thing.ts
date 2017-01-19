interface Thing {
    getColor(): string;
    getNeed(): number;
    isFit(target:number): boolean;
    getFitness(): number;
    proliferate(partner?: Thing): Array<Thing>;
    age(): void;
    feed(nutrition: Array<any>): void;
}
