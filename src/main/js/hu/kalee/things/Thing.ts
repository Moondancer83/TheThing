interface Thing {
    getColor(): string;
    isFit(target:number): boolean;
    getFitness(): number;
    proliferate(partner?: Thing): Array<Thing>;
    age(): void;
}
