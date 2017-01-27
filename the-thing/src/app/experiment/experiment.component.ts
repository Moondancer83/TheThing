import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Experiment} from "./experiment.class";



@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent {
  @Input()
  experiment: Experiment;
  @Output()
  onExperimentSelected = new EventEmitter<Experiment>();

  select() {
    this.onExperimentSelected.emit(this.experiment);
  }
}
