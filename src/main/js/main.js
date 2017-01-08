/**
 * TheThing.
 *
 * @author mkalinovits
 * @since 1/8/17
 */

/**
 * List of organisms.
 *
 * @type {Array}
 */
var World = [];

function Thing (color) {
    var colorCode = color || "000000";
    var fitness = 1;
    
    function getColor () {
        return "#" + colorCode;
    }

    function isFit () {
        return fitness > 0;
    }
    /**
     * Agamis reproduction.
     *
     * @return {Array}
     */
    function agamic () {
        fitness--;
        return [new Thing(colorCode), new Thing(colorCode)];
    }
}

function cycle () {
    var temp = [];
    for(var i = 0; i < World.length; i++) {
        if(World[i].isFit()) {
            temp.concat(World[i].agamic());
        }
        World = temp;
    }

    render();
}

function render () {
    function generateRepresentation (thing) {
        return "<div class='thing' style='background-color: " + thing.getColor() + "'></div>";
    }

    var worldElement = $("#world");

    worldElement.empty();
    for(var i = 0; i < World.length; i++) {

        worldElement.append(generateRepresentation(World[i]));
    }
}

World.push(new Thing());
render();


