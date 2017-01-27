import {Component, Input, OnChanges} from '@angular/core';
import {Experiment} from "../experiment.class";
import {Host} from "../../host/host.interface";

@Component({
  selector: 'app-reactor',
  templateUrl: './reactor.component.html',
  styleUrls: ['./reactor.component.css']
})
export class ReactorComponent implements OnChanges {
  ngOnChanges() {
    this.reset();
  }

  @Input()
  experiment: Experiment;
  hosts: Host[];

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
    let x = [];
    if(this.experiment) {
      this.experiment.hosts.forEach((item) => {x.push(item.clone())});
    }
    this.hosts = x;
  }
}
