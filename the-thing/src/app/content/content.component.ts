import {Component, OnInit} from "@angular/core";
import {Experiment} from "../experiment/experiment.class";
import {ExperimentOne} from "../experiment/descriptions/experiment.one";
import {ExperimentTwo} from "../experiment/descriptions/experiment.two";
import {ExperimentThree} from "../experiment/descriptions/experiment.three";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  experiments: Experiment[];
  selectedExperiment: Experiment;

  ngOnInit() {
    this.experiments = [
      ExperimentOne,
      ExperimentTwo,
      ExperimentThree
    ];
  }

  onExperimentSelected(experiment: Experiment) {
    this.selectedExperiment = experiment;
  }
}
