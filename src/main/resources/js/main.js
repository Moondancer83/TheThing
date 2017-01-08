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
        return [new Thing(colorCode), new Thing(colorCode)];
    }

    function sexual (partner) {
        var partnerColorCode = partner.getColor().replace("#", "");

        var a = "", b = "";

        for (var i = 0; i < colorCode.length; i++) {
            if (Math.round(Math.random()) == 0) {
                a += colorCode[i];
                b += partnerColorCode[i];
            } else {
                a += partnerColorCode[i];
                b += colorCode[i];
            }
        }

        return [new Thing(a), new Thing(b)];
    }

    function age () {
        fitness--;
    }

    return {
        getColor: getColor,
        isFit: isFit,
        agamic: agamic,
        sexual: sexual,
        age: age,
    }
}

function cycle () {
    var temp = [];
    for (var i = 0; i < World.length; i++) {
        if (World[i].isFit()) {
            //var offsprings = World[i].agamic();
            var index = Math.floor(Math.random() * World.length);
            var partner = World[index];
            var offsprings = World[i].sexual(partner);
            temp = temp.concat(offsprings);
            World[i].age();
        }
    }
    World = temp;
    render();
}

function render () {
    function generateRepresentation (thing) {
        return "<div class='thing' style='background-color: " + thing.getColor() + "'></div>";
    }

    var worldElement = $("#world");

    worldElement.empty();
    for (var i = 0; i < World.length; i++) {

        worldElement.append(generateRepresentation(World[i]));
    }
}

function reset () {
    World = [];
    $("#world").empty();

    //World.push(new Thing("000000"));
    //World.push(new Thing("0000FF"));
    //World.push(new Thing("00FF00"));
    //World.push(new Thing("FF0000"));

    World.push(new Thing("000000"));
    World.push(new Thing("111111"));
    World.push(new Thing("222222"));
    World.push(new Thing("333333"));
    World.push(new Thing("444444"));
    World.push(new Thing("555555"));
    World.push(new Thing("666666"));
    World.push(new Thing("777777"));
    World.push(new Thing("888888"));
    World.push(new Thing("999999"));
    World.push(new Thing("AAAAAA"));
    World.push(new Thing("BBBBBB"));
    World.push(new Thing("CCCCCC"));
    World.push(new Thing("DDDDDD"));
    World.push(new Thing("EEEEEE"));
    World.push(new Thing("FFFFFF"));

    render();
}

reset();
