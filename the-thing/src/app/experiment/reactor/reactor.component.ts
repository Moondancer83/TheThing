import {Component, Input} from '@angular/core';
import {Experiment} from "../experiment.class";

@Component({
  selector: 'app-reactor',
  templateUrl: './reactor.component.html',
  styleUrls: ['./reactor.component.css']
})
export class ReactorComponent {

  @Input()
  experiment: Experiment;
}
