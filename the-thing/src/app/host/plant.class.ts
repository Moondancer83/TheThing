import {Host} from "./host.interface";

export class Plant implements Host {
  private id;
  private size;
  private initialFitness;
  private fitness;
  private age;
  private color;

  constructor(fitness, color) {
    this.size = 1;
    this.initialFitness = fitness;
    this.fitness = fitness;
    this.age = 0;
    this.color = color;
  }

  getId(): number {
    return this.id;
  }

  getSize(): number {
    return this.size;
  }

  getNeed(): number {
    return this.size;
  }

  getFitness(): number {
    return this.fitness;
  }

  isFit(target: number): boolean {
    return this.fitness >= target;
  }

  getAge(): number {
    return this.age;
  }

  getColor(): string {
    return this.color;
  }

  proliferate(partner?: Host): Host[] {
    return [new Plant(this.initialFitness, this.color)];
  }

  ageing(): void {
    this.age++;
    this.fitness -= 10;
  }

  feed(nutrition: any[]): void {
    if (nutrition.length > 0 && this.size < 4) {
      this.size++;
    }
  }

}
