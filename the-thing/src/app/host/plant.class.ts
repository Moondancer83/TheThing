import {Creature} from "./creature.class";

export class Plant extends Creature {
  constructor(fitness, color) {
    super(fitness, color);
  }

  proliferate(partner?: Plant): Plant[] {
    return [new Plant(this.getInitialFitness(), this.getColor())];
  }

  ageing(): void {
    super.ageing();
    this.setFitness(this.getFitness() - 10);
  }

  feed(nutrition: any[]): void {
    if (nutrition.length > 0 && this.getSize() < 4) {
      this.setSize(this.getSize() + 1);
    }
  }
}
