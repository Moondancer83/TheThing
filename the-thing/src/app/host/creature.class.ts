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

  setId(id: number): void {
    this.id = id;
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

  setNeed(need: number): void {
    this.need = need;
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

  setAge(age: number): void {
    this.age = age;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  ageing(): void {
    this.age++;
  }

  factory<T>(type: { new (fitness: number, color: string): T }, fitness: number, color: string): T {
    return new type(fitness, color);
  }

  copyAttributes(target: Creature): void {
    target.setId(this.getId());
    target.setSize(this.getSize());
    target.setFitness(this.getFitness());
    target.setNeed(this.getNeed());
    target.setAge(this.getAge());
  }

  abstract clone(): Creature;
  abstract proliferate(partner?: Host): Host[];
  abstract feed(nutrition: any[]): void;
}
