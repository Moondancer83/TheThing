import { Component, Input } from '@angular/core';
import {Experiment} from "./experiment.class";



@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent {
  @Input()
  experiment: Experiment;
}
