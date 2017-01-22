import { Component, OnInit } from '@angular/core';
import {Laboratory} from "./laboratory.class";

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var laboratory: Laboratory = new Laboratory('Laboratory #1', '', 10);
  }

}
