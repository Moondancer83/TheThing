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
    if (nutrition.length > 0) {
      if (this.getFitness() < (100 - this.getSize() * 10)) {
        this.setFitness(this.getFitness() + 5);
      } else if (this.getSize() < 4) {
        this.setSize(this.getSize() + 1);
      }
      nutrition.pop()
    } else {
      if (this.getSize() > 1) {
        this.setSize(this.getSize() -1);
      } else {
        this.setFitness(this.getFitness() - 60);
        console.log("starving", this.getFitness())
      }
    }
  }

  clone() {
    let clone = this.factory(Plant, this.getInitialFitness(), this.getColor());
    this.copyAttributes(clone);
    return clone;
  }
}
