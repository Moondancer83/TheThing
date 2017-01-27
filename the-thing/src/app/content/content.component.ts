import {Component, OnInit} from "@angular/core";
import {Experiment} from "../experiment/experiment.class";
import {Laboratory} from "../environment/laboratory.class";
import {Plant} from "../host/plant.class";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  experiments: Experiment[];
  selectedExperiment: Experiment;

  ngOnInit() {
    let flask: Laboratory = new Laboratory('Flask', 'Artificial environment with undepletable resources', 10);

    let plants = [
      new Plant(100, "#90EE90"),
      new Plant(90,  "#32CD32")
    ];

    const EXPS: Experiment[] = [
      new Experiment('Experiment One', 'Plants in a lab.', flask, plants),
      new Experiment('Experiment Two', 'Plants and herbivores in a lab.', flask, []),
      new Experiment('Experiment Three', 'Plants, herbivores and carnivores in a lab.', flask, [])
    ];

    this.experiments = EXPS;
  }

  onExperimentSelected(experiment: Experiment) {
    this.selectedExperiment = experiment;
  }
}
