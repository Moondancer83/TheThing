import {Component, OnInit} from "@angular/core";
import {Experiment} from "../experiment/experiment.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  experiments: Experiment[];

  ngOnInit() {
    const EXPS: Experiment[] = [
      {name: 'Experiment One', details: 'Plants in a lab.'},
      {name: 'Experiment Two', details: 'Plants and herbivores in a lab.'},
      {name: 'Experiment Three', details: 'Plants, herbivores and carnivores in a lab.'}
    ];

    this.experiments = EXPS;
  }
}
