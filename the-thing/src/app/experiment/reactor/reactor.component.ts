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
    this.resetResources();
  }

  @Input()
  experiment: Experiment;
  hosts: Host[];
  nutrients: number[];

  next(): void {
    let temp: Host[] = [];
    for (let host of this.hosts) {
      host.feed(this.nutrients);

      // Fit to reproduce
      if (host.isFit(50)){
        temp = temp.concat(host.proliferate());
      }

      host.ageing();
      // Fit to live
      if (host.isFit(30)) {
        temp.push(host);
      }
    }

    this.resetResources();
    this.hosts = temp.sort((a, b) => {return b.getSize() - a.getSize();});
  }

  reset(): void {
    let x = [];
    if(this.experiment) {
      this.experiment.hosts.forEach((item) => {x.push(item.clone())});
    }
    this.hosts = x;
  }

  resetResources() {
    if (this.experiment) {
      this.nutrients = Array(this.experiment.environment.getResources()).fill(1);
    }
  }
}
