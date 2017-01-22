import {Component, OnInit, Input} from '@angular/core';
import {Host} from "./host.interface";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {
  @Input()
  host: Host;

  constructor() { }

  ngOnInit() {
  }

  style(host: Host) {
    return "host-size-" + this.host.getSize();
  }

}
