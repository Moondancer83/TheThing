/**
 * Defines the general properties of a host.
 */
export interface Host {
  getId(): number;
  getSize(): number;
  getNeed(): number;
  getFitness(): number;
  isFit(target:number): boolean;
  getAge(): number;
  getColor(): string;


  proliferate(partner?: Host): Host[];
  ageing(): void;
  feed(nutrition: any[]): void;
}
