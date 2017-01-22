import {Component, OnInit} from "@angular/core";
import {Experiment} from "../experiment/experiment.class";
import {Laboratory} from "../environment/laboratory.class";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  experiments: Experiment[];

  ngOnInit() {
    let flask: Laboratory = new Laboratory('Flask', 'Artificial environment with undepletable resources', 10);

    const EXPS: Experiment[] = [
      new Experiment('Experiment One', 'Plants in a lab.', flask, []),
      new Experiment('Experiment Two', 'Plants and herbivores in a lab.', flask, []),
      new Experiment('Experiment Three', 'Plants, herbivores and carnivores in a lab.', flask, [])
    ];

    this.experiments = EXPS;
  }
}
