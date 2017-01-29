import {Experiment} from "../experiment.class";
import {Flask} from "../../environment/descriptions/flask";
import {Plant} from "../../host/plant.class";

let plants = [
  new Plant(100, "#90EE90"),
  new Plant(90,  "#32CD32")
];
let ExperimentOne = new Experiment('Experiment One', 'Plants in a lab.', Flask, plants);

export { ExperimentOne };
