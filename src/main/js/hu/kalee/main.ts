import ExperimentOne from "runner/ExperimentOne";

var selector = "#world";
var experiment = new ExperimentOne(selector, 5);

function cycle () {
    experiment.run();
}

function reset () {
    experiment.reset();
}