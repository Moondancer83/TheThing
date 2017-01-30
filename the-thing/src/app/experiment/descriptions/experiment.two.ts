import {Experiment} from "../experiment.class";
import {Flask} from "../../environment/descriptions/flask";
import {Host} from "../../host/host.interface";
import {Plant} from "../../host/plant.class";

let plants: Host[] = [
  new Plant(100, "#90EE90"),
  new Plant(90,  "#32CD32")
];
let herbivores: Host[] = [];

let hosts: Host[] = [].concat(plants, herbivores);

let ExperimentTwo = new Experiment('Experiment Two', 'Plants and herbivores in a lab.', Flask, hosts);

export { ExperimentTwo };
