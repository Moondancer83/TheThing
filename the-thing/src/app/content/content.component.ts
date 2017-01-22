import {Component, OnInit} from "@angular/core";
import {Experiment} from "../experiment/experiment.class";
import {Laboratory} from "../environment/laboratory.class";
import {Host} from "../host/host.interface";
import {Plant} from "../host/plant.class";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  experiments: Experiment[];
  hosts: Host[];

  ngOnInit() {
    this.reset();
    let flask: Laboratory = new Laboratory('Flask', 'Artificial environment with undepletable resources', 10);

    const EXPS: Experiment[] = [
      new Experiment('Experiment One', 'Plants in a lab.', flask, this.hosts),
      new Experiment('Experiment Two', 'Plants and herbivores in a lab.', flask, []),
      new Experiment('Experiment Three', 'Plants, herbivores and carnivores in a lab.', flask, [])
    ];

    this.experiments = EXPS;
  }

  next(): void {
    let temp: Host[] = [];
    for (let host of this.hosts) {
      host.feed([1]);
      temp = temp.concat(host.proliferate());
      host.ageing();
      if (host.isFit(50)){
        temp.push(host);
      }
    }

    this.hosts = temp.sort((a, b) => {return b.getSize() - a.getSize();});
  }

  reset(): void {
    const HOSTS: Host[] = [
      new Plant(100, "#90EE90"),
      new Plant(90,  "#32CD32")
    ];
    this.hosts = HOSTS;
  }
}
