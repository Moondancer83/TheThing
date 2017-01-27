import {Host} from "./host.interface";

export abstract class Creature implements Host {
  private id: number;
  private size: number;
  private need: number;
  private initialFitness: number;
  private fitness: number;
  private age: number;
  private color: string;

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

  setSize(size: number) {
    this.size = size;
  }

  getNeed(): number {
    return this.need;
  }

  getFitness(): number {
    return this.fitness;
  }

  setFitness(fitness: number) {
    this.fitness = fitness;
  }

  getInitialFitness() {
    return this.initialFitness;
  }

  isFit(target: number): boolean {
    return this.getFitness() >= target;
  }

  getAge(): number {
    return this.age;
  }

  getColor(): string {
    return this.color;
  }

  proliferate(partner?: Host): Host[] {
    return [];
  }

  ageing(): void {
    this.age++;
  }

  feed(nutrition: any[]): void {
  }

}
