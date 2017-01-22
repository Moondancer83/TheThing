import { Component, Input } from '@angular/core';


export class Experiment {
  name: string;
  details: string;
}

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent {
  @Input()
  experiment: Experiment;
}
